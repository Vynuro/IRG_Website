import { Button } from "../lib/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[64px] font-extrabold text-tint-100">404</p>
      <h1 className="mt-2 text-[28px] font-extrabold text-primary">Page not found</h1>
      <p className="mt-3 max-w-md text-[16px] text-body">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Button to="/" className="mt-8">Back to home</Button>
    </div>
  );
}
