import { Component, Suspense, useMemo, useRef, type MutableRefObject, type ReactNode } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Shadow } from "@react-three/drei";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { IRG_ICON_PATHS, IRG_ICON_VIEWBOX } from "../data/irgIcon";

/**
 * Extrudes the official IRG icon vector into real 3D geometry (rather than
 * the stacked-slice CSS illusion used elsewhere) so it can be lit, shaded
 * and rotated with no viewing-angle limits, like a proper Blender render.
 * Built once and reused for the life of the app - the source paths are
 * static, so there is nothing to recompute between mounts.
 */
let iconGeometry: THREE.ExtrudeGeometry | null = null;

function getIconGeometry(): THREE.ExtrudeGeometry {
  if (iconGeometry) return iconGeometry;

  const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${IRG_ICON_VIEWBOX}">${IRG_ICON_PATHS.map(
    (d) => `<path d="${d}" />`,
  ).join("")}</svg>`;

  const { paths } = new SVGLoader().parse(svgMarkup);
  const shapes = paths.flatMap((path) => path.toShapes());

  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: 70,
    bevelEnabled: true,
    bevelThickness: 26,
    bevelSize: 22,
    bevelSegments: 20,
    curveSegments: 24,
  });

  geometry.computeBoundingBox();
  const box = geometry.boundingBox!;
  const center = new THREE.Vector3();
  box.getCenter(center);
  geometry.translate(-center.x, -center.y, -center.z);

  const size = new THREE.Vector3();
  box.getSize(size);
  const scale = 2.1 / Math.max(size.x, size.y, size.z);
  geometry.scale(scale, scale, scale);

  iconGeometry = geometry;
  return geometry;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Extruded icon mesh with a slow idle turntable that yields the moment the user drags. */
function IconMesh({ dragging }: { dragging: MutableRefObject<boolean> }) {
  const geometry = useMemo(() => getIconGeometry(), []);
  const groupRef = useRef<THREE.Group>(null);
  const reduced = useMemo(prefersReducedMotion, []);

  useFrame((_, delta) => {
    if (reduced || dragging.current || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.22;
  });

  return (
    <group ref={groupRef} rotation={[Math.PI, 0, 0]}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#1c4aa0"
          roughness={0.16}
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={1.6}
        />
      </mesh>
    </group>
  );
}

function Scene() {
  const dragging = useRef(false);

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4.5, 6, 5]} intensity={2} />
      <directionalLight position={[-5, 2, -3]} intensity={0.5} color="#396ef3" />
      <directionalLight position={[0, -3, -4]} intensity={0.25} color="#ffffff" />

      <IconMesh dragging={dragging} />

      {/*
        A gradient-texture plane rather than drei's ContactShadows: that
        component's shadow disc is single-sided and disappears the moment
        the free-orbiting camera dips below the horizon, which defeats the
        whole point of unrestricted rotation. This one is visible from
        underneath too.
      */}
      <Shadow color="#00133d" colorStop={0.1} opacity={0.45} position={[0, -1.05, 0]} scale={[3.4, 3.4, 1]} />

      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={0.6} />
      </Suspense>

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom
        minDistance={2.6}
        maxDistance={6}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.85}
        onStart={() => {
          dragging.current = true;
        }}
        onEnd={() => {
          dragging.current = false;
        }}
      />
    </>
  );
}

/**
 * Real WebGL render of the IRG icon: true extruded geometry, physically
 * based shading, a soft ground shadow and completely free orbit rotation
 * on every axis (drag or touch to spin it any way you like).
 */
export function IRGIcon3DGL() {
  return (
    <div className="absolute inset-0 z-[3]" style={{ touchAction: "none" }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0.45, 4.2], fov: 32 }}>
        <Scene />
      </Canvas>
    </div>
  );
}

class WebGLBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/**
 * Drop-in replacement for the hero icon that renders the real 3D version
 * and falls back to the existing CSS build if WebGL is unavailable or the
 * canvas fails to initialise (old GPUs, locked-down browsers, etc.).
 */
export function IRGIcon3DWithFallback({ fallback }: { fallback: ReactNode }) {
  return (
    <WebGLBoundary fallback={fallback}>
      <IRGIcon3DGL />
    </WebGLBoundary>
  );
}
