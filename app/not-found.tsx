import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
          Oops! Här var det tomt.
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Sidan du letar efter kan ha blivit borttagen, fått sitt namn ändrat
          eller är tillfälligt otillgänglig.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-lg text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
          prefetch={false}
        >
          Tillbaka till förstasidan
        </Link>
      </div>
    </div>
  );
}
