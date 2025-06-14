import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] py-24 px-4 text-center">
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
        404
      </h1>
      <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
        Page Not Found
      </h2>
      <p className="text-lg mb-8 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Return to Home
      </Link>
    </main>
  );
} 