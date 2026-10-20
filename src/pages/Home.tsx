import { useLayoutEffect, useRef, useState } from "react";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { toCreasedNormals } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { Link } from "react-router";
import { Section, SectionHead, Card, Eyebrow, Button, WRAP, cx } from "../lib/ui";
import { Icon } from "../lib/icons";
import { ConsultationBand } from "../components/Bands";
import HeroSlider from "../components/HeroSlider";
import NetworkProof from "../components/NetworkProof";
import { TRUSTPILOT_URL } from "../data/site";
import { IRG_ICON_PATHS, IRG_ICON_VIEWBOX } from "../data/irgIcon";

/** Solid, beveled official IRG mark. Quaternion rotation has no pole limits. */
function IRGIcon3D() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [available, setAvailable] = useState(false);
  const [failed, setFailed] = useState(false);

  // Build and draw the first 3D frame before the browser paints this component.
  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
    } catch {
      setFailed(true);
      return; // Show the SVG only when WebGL actually cannot initialize.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.visibility = "hidden";
    host.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 30);
    camera.position.z = 4.95;

    // A local studio environment: no remote HDR file or image request.
    const pmrem = new THREE.PMREMGenerator(renderer);
    const studio = new RoomEnvironment();
    const environment = pmrem.fromScene(studio, 0.04);
    scene.environment = environment.texture;
    studio.dispose();
    pmrem.dispose();
    scene.add(new THREE.AmbientLight("#ffffff", 0.65));
    scene.add(new THREE.HemisphereLight("#ffffff", "#c4d8ff", 0.8));
    for (const [x, y, z, intensity] of [[-3, 5, 5, 2], [4, 1, 3, 0.85], [2, 3, -5, 1.8], [-3, -3, -4, 0.7]]) {
      const light = new THREE.DirectionalLight("#ffffff", intensity);
      light.position.set(x, y, z);
      scene.add(light);
    }
    const float = new THREE.Group();
    const model = new THREE.Group();
    scene.add(float);
    float.add(model);
    const home = new THREE.Quaternion();
    model.quaternion.copy(home);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${IRG_ICON_VIEWBOX}">${IRG_ICON_PATHS.map(d => `<path d="${d}"/>`).join("")}</svg>`;
    const paths = new SVGLoader().parse(svg).paths;
    const face = new THREE.MeshPhysicalMaterial({ color: "#1948b0", metalness: 0.12, roughness: 0.34, specularColor: "#ffffff", specularIntensity: 0.4, clearcoat: 0.28, clearcoatRoughness: 0.3, envMapIntensity: 0.32 });
    const edge = new THREE.MeshPhysicalMaterial({ color: "#002776", metalness: 0.1, roughness: 0.38, specularColor: "#ffffff", specularIntensity: 0.38, clearcoat: 0.2, clearcoatRoughness: 0.34, envMapIntensity: 0.25 });
    // A broad diagonal white reflection sweeps over the actual front/back faces.
    // Shading the existing surface avoids overlay depth conflicts during rotation.
    const sheenPosition = { value: -1.8 };
    const sheenStrength = { value: 0 };
    face.onBeforeCompile = (shader) => {
      shader.uniforms.irgSheenPosition = sheenPosition;
      shader.uniforms.irgSheenStrength = sheenStrength;
      shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 irgSheenPoint;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nirgSheenPoint = position;");
      shader.fragmentShader = shader.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 irgSheenPoint;\nuniform float irgSheenPosition;\nuniform float irgSheenStrength;")
        .replace("#include <colorspace_fragment>", `#include <colorspace_fragment>
          // Original hero's sky-blue / royal-blue / deep-blue gradient, in sRGB.
          // Retain a little physical lighting so the finish still responds to rotation.
          float paletteT = clamp(0.5 - irgSheenPoint.y * 0.36 + irgSheenPoint.x * 0.18, 0.0, 1.0);
          vec3 skyBlue = vec3(0.4196, 0.5961, 0.9412);
          vec3 royalBlue = vec3(0.2118, 0.3882, 0.7765);
          vec3 deepBlue = vec3(0.0, 0.15294, 0.46275); // Company navy #002776.
          vec3 referenceBlue = paletteT < 0.34
            ? mix(skyBlue, royalBlue, paletteT / 0.34)
            : mix(royalBlue, deepBlue, (paletteT - 0.34) / 0.66);
          // A small, soft white highlight in the upper lit area.
          float whiteHighlight = (1.0 - smoothstep(0.0, 0.42, paletteT)) * 0.20;
          referenceBlue = mix(referenceBlue, vec3(1.0), whiteHighlight);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, referenceBlue, 0.78);
          float sweepDistance = abs(irgSheenPoint.x + irgSheenPoint.y * 0.32 - irgSheenPosition);
          float sweepBand = 1.0 - smoothstep(0.17, 0.23, sweepDistance);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.92, 0.96, 1.0), sweepBand * irgSheenStrength);
        `);
    };
    face.customProgramCacheKey = () => "irg-company-navy-white-sheen-v4";
    const geometries: THREE.BufferGeometry[] = [];

    // Simplify tiny scan irregularities without changing the logo's silhouette.
    const simplify = (points: THREE.Vector2[], tolerance = 4): THREE.Vector2[] => {
      if (points.length < 3) return points;
      const a = points[0], b = points[points.length - 1];
      let distance = 0, split = 0;
      const line = new THREE.Vector2().subVectors(b, a);
      for (let i = 1; i < points.length - 1; i++) {
        const t = THREE.MathUtils.clamp(new THREE.Vector2().subVectors(points[i], a).dot(line) / (line.lengthSq() || 1), 0, 1);
        const d = points[i].distanceTo(a.clone().addScaledVector(line, t));
        if (d > distance) { distance = d; split = i; }
      }
      return distance > tolerance
        ? [...simplify(points.slice(0, split + 1), tolerance).slice(0, -1), ...simplify(points.slice(split), tolerance)]
        : [a, b];
    };
    for (const path of paths) {
      for (const original of path.toShapes()) {
        const points = simplify(original.getPoints(8));
        const shape = new THREE.Shape(points);
        shape.holes = original.holes;
        const raw = new THREE.ExtrudeGeometry(shape, { depth: 130, bevelEnabled: true, bevelThickness: 7, bevelSize: 5, bevelSegments: 5, steps: 1, curveSegments: 8 });
        // Rotation (not a negative scale) preserves the front-face winding.
        raw.translate(-434.35, -500, -65);
        raw.rotateX(Math.PI);
        raw.scale(0.0023, 0.0023, 0.0023);
        const geometry = toCreasedNormals(raw, Math.PI / 3);
        if (geometry !== raw) raw.dispose();
        geometries.push(geometry);
        model.add(new THREE.Mesh(geometry, [face, edge]));
      }
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduced = media.matches;
    let pointer: number | null = null;
    let lastX = 0, lastY = 0, lastMove = 0;
    let velocityX = 0, velocityY = 0;
    let returnAt = 0;
    let elapsed = 0, idlePhase = 0, lastTime = performance.now();
    let frameId = 0, running = false, visible = true, contextLost = false;
    const axis = new THREE.Vector3();
    const deltaRotation = new THREE.Quaternion();
    const parentInverse = new THREE.Quaternion();
    const turn = (dx: number, dy: number) => {
      const distance = Math.hypot(dx, dy);
      if (!distance) return;
      axis.set(dy / distance, dx / distance, 0);
      axis.applyQuaternion(parentInverse.copy(float.quaternion).invert());
      deltaRotation.setFromAxisAngle(axis, distance);
      model.quaternion.premultiply(deltaRotation).normalize();
    };
    const render = (now: number) => {
      const dt = Math.min(Math.max((now - lastTime) / 1000, 0), 0.04);
      lastTime = now;
      if (!reduced) elapsed += dt;
      if (pointer === null && !reduced) {
        turn(velocityX * dt, velocityY * dt);
        velocityX *= Math.exp(-5 * dt);
        velocityY *= Math.exp(-5 * dt);
        // After release, take the shortest smooth path back to the readable
        // front view. Automatic sway lives on the parent and continues normally.
        if (now >= returnAt) {
          // Gradually introduce the return force, then ease out near the front.
          const returnEase = THREE.MathUtils.smoothstep((now - returnAt) / 1000, 0, 1.2);
          model.quaternion.slerp(home, 1 - Math.exp(-0.9 * returnEase * dt)).normalize();
          if (model.quaternion.angleTo(home) < 0.001) {
            model.quaternion.copy(home);
            velocityX = velocityY = 0;
          }
        }
        idlePhase += dt;
      }
      // Bounded rocking on a separate parent prevents accumulated orientation drift.
      // Its phase pauses during a drag, then resumes without a jump on release.
      // Original hero timing: left/right +/-38 degrees every 9 seconds,
      // with the original restrained 11-second tilt and roll.
      const radians = Math.PI / 180;
      float.rotation.set(
        reduced ? 7 * radians : (1 + 8 * Math.cos(idlePhase / 11 * Math.PI * 2)) * radians,
        reduced ? -26 * radians : 38 * Math.sin(idlePhase / 9 * Math.PI * 2) * radians,
        reduced ? 0 : -1.8 * Math.cos(idlePhase / 11 * Math.PI * 2) * radians,
      );

      float.position.y = reduced ? 0 : Math.sin(elapsed * 1.15) * 0.05;
      // Original-style sheen: cross the logo, disappear, then repeat after 5.6s.
      const sweepProgress = (elapsed % 5.6) / 3.3;
      sheenPosition.value = -1.8 + Math.min(sweepProgress, 1) * 3.6;
      sheenStrength.value = reduced || sweepProgress >= 1 ? 0 : 0.48 * Math.min(1, sweepProgress * 8, (1 - sweepProgress) * 8);
      renderer.render(scene, camera);
      if (running) frameId = requestAnimationFrame(render);
    };
    const stop = () => { running = false; cancelAnimationFrame(frameId); };
    const sync = () => {
      stop();
      if (!visible || document.hidden || contextLost) return;
      lastTime = performance.now();
      running = !reduced;
      render(lastTime);
    };
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.position.z = 4.95 / Math.min(camera.aspect, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      if (!contextLost) renderer.render(scene, camera);
    };
    const down = (event: PointerEvent) => {
      if (pointer !== null || (event.pointerType === "mouse" && event.button !== 0)) return;
      pointer = event.pointerId;
      returnAt = Infinity;
      lastX = event.clientX; lastY = event.clientY; lastMove = performance.now();
      velocityX = velocityY = 0;

      elapsed = 0;
      host.setPointerCapture(pointer);
      host.focus({ preventScroll: true });
      host.style.cursor = "grabbing";
    };
    const move = (event: PointerEvent) => {
      if (event.pointerId !== pointer) return;
      const now = performance.now();
      const dt = Math.max((now - lastMove) / 1000, 1 / 120);
      const sensitivity = (Math.PI * 2) / Math.max(host.clientWidth * 0.85, 240);
      const dx = (event.clientX - lastX) * sensitivity;
      const dy = (event.clientY - lastY) * sensitivity;
      turn(dx, dy);
      velocityX = THREE.MathUtils.clamp(dx / dt, -3, 3);
      velocityY = THREE.MathUtils.clamp(dy / dt, -3, 3);
      lastX = event.clientX; lastY = event.clientY; lastMove = now;

      if (reduced) render(now);
    };
    const up = (event: PointerEvent) => {
      if (event.pointerId !== pointer) return;
      pointer = null;
      returnAt = performance.now() + 900;
      if (performance.now() - lastMove > 80 || event.type !== "pointerup") velocityX = velocityY = 0;
      if (host.hasPointerCapture(event.pointerId)) host.releasePointerCapture(event.pointerId);
      host.style.cursor = "grab";
    };
    const key = (event: KeyboardEvent) => {
      const steps: Record<string, [number, number]> = { ArrowLeft: [-0.16, 0], ArrowRight: [0.16, 0], ArrowUp: [0, -0.16], ArrowDown: [0, 0.16] };
      if (event.key === "Home") { model.quaternion.copy(home); velocityX = velocityY = 0; idlePhase = 0; float.rotation.set(0, 0, 0); }
      else if (steps[event.key]) turn(...steps[event.key]);
      else return;
      event.preventDefault();
      returnAt = performance.now() + 900;
      if (reduced) render(performance.now());
    };
    const lost = (event: Event) => { event.preventDefault(); contextLost = true; stop(); renderer.domElement.style.visibility = "hidden"; setAvailable(false); setFailed(true); };
    const restored = () => { contextLost = false; resize(); sync(); renderer.domElement.style.visibility = "visible"; setFailed(false); setAvailable(true); };
    const preference = () => { reduced = media.matches; velocityX = velocityY = 0; sync(); };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(host);
    intersection.observe(host);
    host.addEventListener("pointerdown", down);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerup", up);
    host.addEventListener("pointercancel", up);
    host.addEventListener("lostpointercapture", up);
    host.addEventListener("keydown", key);
    renderer.domElement.addEventListener("webglcontextlost", lost);
    renderer.domElement.addEventListener("webglcontextrestored", restored);
    document.addEventListener("visibilitychange", sync);
    media.addEventListener("change", preference);
    resize();
    sync();
    renderer.domElement.style.visibility = "visible";
    setFailed(false);
    setAvailable(true);
    return () => {
      stop(); observer.disconnect(); intersection.disconnect();
      host.removeEventListener("pointerdown", down);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerup", up);
      host.removeEventListener("pointercancel", up);
      host.removeEventListener("lostpointercapture", up);
      host.removeEventListener("keydown", key);
      renderer.domElement.removeEventListener("webglcontextlost", lost);
      renderer.domElement.removeEventListener("webglcontextrestored", restored);
      document.removeEventListener("visibilitychange", sync);
      media.removeEventListener("change", preference);
      geometries.forEach(geometry => geometry.dispose());
      face.dispose(); edge.dispose();

      environment.dispose(); renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="irg-solid">
      <style>{`
        .irg-solid { position: absolute; inset: 0; z-index: 3; }
        .irg-solid-halo { position: absolute; inset: 9%; border-radius: 50%; background: radial-gradient(circle, #6798ff21, #396ef308 50%, transparent 72%); filter: blur(20px); pointer-events: none; }
        .irg-solid-shadow { position: absolute; left: 27%; right: 27%; bottom: 6%; height: 6%; border-radius: 50%; background: radial-gradient(ellipse, #396ef32b, transparent 70%); filter: blur(9px); pointer-events: none; }
        .irg-solid-control { position: absolute; inset: 0; touch-action: none; cursor: grab; border-radius: 24px; outline: none; }
        .irg-solid-control:focus-visible { outline: none; }
        .irg-solid-control canvas { display: block; width: 100%; height: 100%; }
        .irg-solid-fallback { position: absolute; width: 67%; height: 77%; left: 16.5%; top: 11.5%; filter: drop-shadow(6px 10px 5px #396ef333); pointer-events: none; }
        .irg-solid-hint { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 7px; white-space: nowrap; border: 1px solid #274ca820; border-radius: 999px; padding: 7px 12px; background: #ffffffc9; color: #274ca8; font-size: 11px; font-weight: 500; pointer-events: none; box-shadow: 0 4px 18px #274ca808; }
        .irg-solid-hint span { width: 6px; height: 6px; border-radius: 50%; background: #396ef3; box-shadow: 0 0 0 4px #396ef31a; }
      `}</style>
      <div className="irg-solid-halo" aria-hidden="true" />
      <div className="irg-solid-shadow" aria-hidden="true" />
      <div ref={hostRef} className="irg-solid-control" tabIndex={0} role="img" aria-label="Interactive 3D IRG logo. Drag or swipe in any direction to rotate 360 degrees. Arrow keys rotate; Home resets the view." />
      {failed && <svg className="irg-solid-fallback" viewBox={IRG_ICON_VIEWBOX} aria-hidden="true">{IRG_ICON_PATHS.map((d, i) => <path key={i} d={d} fill="#396ef3" />)}</svg>}
    </div>
  );
}


function HomeHeroGlassLogo() {
  return (
    <div className="relative flex h-full min-h-[380px] flex-col lg:min-h-[480px]">
      <div className="relative z-[3] flex flex-1 items-start justify-center pb-4 lg:-mt-6 lg:pb-0">
        <div className="relative aspect-square w-full max-w-[420px] lg:w-[88%]">
          {/* Faint network wiring behind the mark */}
          <svg
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
            viewBox="0 0 500 500"
            aria-hidden="true"
          >
            <circle cx="250" cy="250" r="188" fill="none" stroke="#274ca8" strokeOpacity="0.08" strokeWidth="1" />
            <circle cx="250" cy="250" r="132" fill="none" stroke="#274ca8" strokeOpacity="0.07" strokeWidth="1" />
            <path d="M 132 151 C 170 170, 184 194, 209 220" fill="none" stroke="#274ca8" strokeOpacity="0.24" strokeWidth="1.15" strokeDasharray="4 7" />
            <path d="M 392 402 C 357 362, 330 309, 300 248" fill="none" stroke="#274ca8" strokeOpacity="0.24" strokeWidth="1.15" strokeDasharray="4 7" />
            <path d="M 163 365 C 187 327, 208 300, 226 279" fill="none" stroke="#274ca8" strokeOpacity="0.24" strokeWidth="1.15" strokeDasharray="4 7" />
            <circle cx="209" cy="220" r="3.5" fill="#396ef3" />
            <circle cx="300" cy="248" r="3.5" fill="#396ef3" />
            <circle cx="226" cy="279" r="3.5" fill="#396ef3" />
            <circle cx="209" cy="220" r="8" fill="#396ef3" opacity="0.10" />
            <circle cx="300" cy="248" r="8" fill="#396ef3" opacity="0.10" />
            <circle cx="226" cy="279" r="8" fill="#396ef3" opacity="0.10" />
          </svg>

          <IRGIcon3D />
        </div>
      </div>

    </div>
  );
}

const expertiseCards = [
  { icon: "globe" as const, title: "Global Market Expertise", description: "IRG connects you with market experts across 90+ countries, enabling access to region-specific trends, opportunities, and competitive insight." },
  { icon: "users" as const, title: "Diverse Expert Profiles", description: "From subject matter experts and C-suite leaders to niche analysts and regulators, our network spans every role that drives business insight." },
  { icon: "pin" as const, title: "Localized Research Delivery", description: "We combine qualitative and quantitative methods with deep cultural and industry knowledge to capture buyer behaviors and market expectations that truly matter for B2B growth." },
  { icon: "compass" as const, title: "Strategic Expansion Support", description: "Whether expanding to North America, LATAM, Europe, MENA, or APAC, IRG helps you make informed moves with the guidance of in-region experts." },
  { icon: "layers" as const, title: "Diverse Market Knowledge", description: "Our global reach allows us to target decision-makers and professionals in IT, Healthcare, Financial Services, SaaS, Hospitality, Utilities, and many more sectors." },
  { icon: "handshake" as const, title: "Frictionless Collaboration", description: "We simplify access to global insight. No subscriptions. No bloated processes. Just fast, tailored connections that support bold decisions." },
];

const process = [
  { number: "01", title: "Clarify Outcomes", description: "Define decision, audience, scope, and timelines." },
  { number: "02", title: "Design Methodology", description: "Choose the qualitative and quantitative mix, sample sizes, screener, and guide." },
  { number: "03", title: "Fieldwork", description: "Recruit, schedule, moderate, and collect clean data." },
  { number: "04", title: "Synthesis", description: "Analyze, visualize, and deliver action-oriented insights." },
];

const deliveryBenefits = [
  { icon: "users" as const, title: "Expert Access", description: "Tap into our B2B expert network of decision-makers, practitioners, and niche specialists." },
  { icon: "layers" as const, title: "Right Method, Right Time", description: "From IDIs and focus groups to CATI and online surveys, we tailor the best approach." },
  { icon: "clock" as const, title: "Fast Turnarounds", description: "Lean operations and vetted panels help move projects from scope to data efficiently." },
  { icon: "target" as const, title: "Decision-Grade Outputs", description: "Clear insights, defensible methodology, and actionable recommendations." },
];


const whyDifferent = [
  { icon: "target" as const, title: "Custom sourcing per brief", description: "We don’t filter existing members and hope for a match. Our team sources each participant specifically for your project: from LinkedIn, professional associations, and direct outreach." },
  { icon: "compass" as const, title: "No infeasible briefs", description: "We take the briefs that other panel providers mark as too niche or too hard. If the audience exists and can be reached, we recruit it. If there is a genuine barrier, we tell you within 24 hours." },
  { icon: "eye" as const, title: "Human-verified, not algorithmically matched", description: "Every participant is reviewed by an IRG team member against your exact screening criteria before confirmation. No automated matching. No surprises in field." },
];

const homeTestimonials = [
  {
    initials: "HO",
    quote: "IRG fills briefs that our previous providers marked infeasible. Their custom sourcing capability for C-suite decision makers is in a different league. Zero quota shortfalls across 14 projects.",
    role: "Head of Research Operations",
    firm: "Leading North American MR firm",
  },
  {
    initials: "SI",
    quote: "We briefed IRG on a study with highly specific criteria: decision makers at hospital systems with 1,000+ beds. Nobody else could fill it. IRG delivered 43 confirmed participants in five days.",
    role: "Senior Insights Manager",
    firm: "London-based qualitative research agency",
  },
  {
    initials: "VP",
    quote: "The quality sets them apart: not because they have a bigger database, but because they actually go and find the right people. Low no-shows, accurate profiling, serious team.",
    role: "VP Research",
    firm: "MENA-based management consulting firm",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <NetworkProof />

      <Section tone="tint">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>The Right Expert. Not Just Any Expert.</Eyebrow>
          <h2 className="mt-5 text-[30px] font-extrabold leading-[1.1] tracking-[-0.02em] text-primary sm:text-[36px] lg:text-[42px]">
            <span className="block">On-Demand Solutions for</span>
            <span className="block">Expert Recruitment</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-[1.65] text-body sm:text-[16px]">
            Unlike generic panel databases, IRG’s experts are exclusive to our network. You get active industry
            practitioners: decision-makers who work in their field every day, not professional survey takers or
            paid consultants.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {whyDifferent.map((item) => (
            <Card key={item.title} className="min-h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-input bg-tint-30 text-secondary">{Icon[item.icon]({ size: 23 })}</div>
              <h3 className="mt-5 text-[19px] font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5">
          <article className="relative grid grid-cols-1 items-center gap-7 overflow-hidden rounded-panel p-7 text-white shadow-card sm:p-9 lg:grid-cols-12 lg:gap-10" style={{ background: "var(--grad-dark)" }}>
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl" />
            <div className="relative lg:col-span-5">
            <Eyebrow dark>Industries</Eyebrow>
            <h3 className="mt-5 text-[26px] font-extrabold leading-tight">Custom recruitment across 15+ B2B sectors</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">From hospital C-suites to energy infrastructure leaders; if the audience exists, our recruiters know how to find them.</p>
            </div>
            <div className="relative lg:col-span-7 lg:border-l lg:border-white/10 lg:pl-10">
            <div className="flex flex-wrap gap-2">
              {["Technology & Software", "Financial Services", "Healthcare & Medical", "Retail & Consumer Goods", "Manufacturing & Industrial", "Real Estate & Construction", "Utilities & Energy", "+8 more"].map((industry) => (
                <span key={industry} className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[13px] font-semibold text-white">{industry}</span>
              ))}
            </div>
            <Link to="/industries" className="focus-ring mt-6 inline-flex rounded-ctl text-[14px] font-semibold text-white hover:underline">Explore all industries →</Link>
            </div>
          </article>

          <article className="rounded-panel border border-tint-100 bg-white p-7 shadow-card lg:p-9">
            <Eyebrow>How It Works</Eyebrow>
            <h3 className="mt-5 text-[26px] font-extrabold leading-tight text-primary">From brief to recruited in days</h3>
            <div className="mt-6 space-y-3">
              {[
                ["1", "Brief us", "Share your audience spec, methodology, timeline, and quota. We review every brief personally and confirm feasibility within 24 hours."],
                ["2", "We recruit exclusively for you", "Your project is assigned to a dedicated IRG recruiter. They individually source, approach, and screen every participant: from scratch, no shared vendor pools."],
                ["3", "You run your research", "Confirmed, pre-screened participants delivered to your schedule. We manage no-shows with immediate replacements and stay on call throughout fieldwork."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex gap-4 rounded-card border border-tint-100 bg-tint-50 p-4 transition-colors duration-200 hover:border-secondary/25 hover:bg-white sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-[14px] font-extrabold text-white">{number}</span>
                  <div><h4 className="text-[15px] font-bold text-primary">{title}</h4><p className="mt-1 text-[14px] leading-relaxed text-body">{description}</p></div>
                </div>
              ))}
            </div>
          </article>

        </div>

        <article className="relative mt-5 overflow-hidden rounded-panel border border-secondary/15 bg-white p-7 shadow-card sm:p-9">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <Eyebrow>Trust &amp; Compliance</Eyebrow>
              <h3 className="mt-5 text-[26px] font-extrabold leading-tight text-primary">Research confidence, built in</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-body">Independent feedback and recognized professional standards support every IRG engagement.</p>
            </div>
            <a href={TRUSTPILOT_URL} target="_blank" rel="noreferrer" className="focus-ring group rounded-card bg-tint-50 p-5 transition-colors hover:bg-white lg:col-span-3">
              <span className="block text-[42px] font-extrabold leading-none text-primary">4.6</span>
              <span className="mt-3 block tracking-[0.08em] text-[#00b67a]">★★★★★</span>
              <span className="mt-2 block text-[13px] font-medium text-body group-hover:text-secondary">Trustpilot score · <span className="whitespace-nowrap">10+ verified reviews</span></span>
            </a>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5">
              <div className="flex items-center gap-3 rounded-card bg-tint-50 px-4 py-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-input bg-primary text-[11px] font-extrabold text-white">ES</span><span><strong className="block text-[12px] font-bold uppercase tracking-[0.04em] text-primary">ESOMAR member</strong><small className="mt-0.5 block text-[11px] text-body">Verified since 2022</small></span></div>
              <div className="flex items-center gap-3 rounded-card bg-tint-50 px-4 py-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-input bg-white text-[11px] font-extrabold text-secondary shadow-sm">EU</span><span><strong className="block text-[12px] font-bold uppercase tracking-[0.04em] text-primary">GDPR compliant</strong><small className="mt-0.5 block text-[11px] text-body">EU &amp; UK data protection</small></span></div>
            </div>
          </div>
        </article>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3" aria-label="Client feedback">
          {homeTestimonials.map((testimonial) => (
            <article key={testimonial.role} className="flex min-h-full flex-col rounded-panel border border-tint-100 bg-white p-7 shadow-card">
              <div className="tracking-[0.08em] text-[#00b67a]">★★★★★</div>
              <blockquote className="mt-5 flex-1 text-[15px] italic leading-[1.75] text-primary">“{testimonial.quote}”</blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-tint-100 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white" style={{ background: "var(--grad-primary)" }}>{testimonial.initials}</span>
                <span><strong className="block text-[13px] font-bold text-primary">{testimonial.role}</strong><small className="block text-[12px] text-body">{testimonial.firm}</small></span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <SectionHead eyebrow="How IRG Works" title="Our approach (fast & flexible)" center />
        <div className="relative mt-14 grid grid-cols-1 gap-5 md:grid-cols-4">
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-tint-100 md:block" />
          {process.map((step) => (
            <div key={step.number} className="relative rounded-card border border-tint-100 bg-white p-6 shadow-card">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[17px] font-extrabold text-primary shadow-card">{step.number}</div>
              <h3 className="mt-5 text-[18px] font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-body">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <SectionHead eyebrow="Where Expertise Meets Innovation" title="Our Global Expert Network Spans 90+ Markets" intro="At Inventive Research Group, our expert network empowers your business with global market understanding. We work with vetted professionals worldwide, from C-level executives to entry-level specialists, including researchers and analysts, to deliver localized insight that fuels confident business decisions." center />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {expertiseCards.map((card, index) => (
            <Card key={card.title} className="group min-h-full transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-input bg-tint-50 text-secondary transition-colors group-hover:bg-primary group-hover:text-white">{Icon[card.icon]({ size: 23 })}</div>
                <span className="text-[12px] font-bold tracking-[0.12em] text-tint-100">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-[19px] font-semibold text-primary">{card.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{card.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to="/about">Learn more about IRG</Button>
        </div>
      </Section>

      <section className="text-white" style={{ background: "var(--grad-dark)" }}>
        <div className={cx(WRAP, "grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:items-center lg:py-24")}>
          <div className="lg:col-span-5">
            <Eyebrow dark>Have a brief?</Eyebrow>
            <h2 className="mt-5 text-[34px] font-extrabold leading-[1.08] sm:text-[44px]">Got a brief that&rsquo;s been sitting on your desk?</h2>
            <p className="mt-5 text-[15px] leading-[1.65] text-white/75 sm:text-[16px]">Send it to IRG. We specialise in the briefs other providers can&rsquo;t fill. Feasibility confirmed within 24 hours: no commitment required.</p>
            <Button to="/consultation" variant="dark" className="mt-8">Send your requirements →</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {deliveryBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-card border border-white/10 bg-white/[0.04] p-6">
                <span className="text-accent">{Icon[benefit.icon]({ size: 23 })}</span>
                <h3 className="mt-4 text-[18px] font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBand />

      <section className="border-t border-tint-100 bg-white">
        <div className={cx(WRAP, "py-10 sm:py-12")}>
          <div className="flex flex-col items-start justify-between gap-7 rounded-panel px-7 py-9 text-white sm:px-10 sm:py-10 lg:flex-row lg:items-center" style={{ background: "var(--grad-dark)" }}>
            <div className="max-w-2xl">
              <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/65">For industry professionals</p>
              <h2 className="mt-2 text-[24px] font-bold leading-tight text-white sm:text-[28px]">Are you a senior B2B professional?</h2>
              <p className="mt-2 max-w-lg text-[15px] font-medium text-white/75">IRG recruits experts individually for paid research studies. Join our panel and get paid for your expertise.</p>
            </div>
            <Button to="/become-irg-expert" variant="dark" size="lg" className="shrink-0">Apply to join →</Button>
          </div>
        </div>
      </section>
    </>
  );
}
