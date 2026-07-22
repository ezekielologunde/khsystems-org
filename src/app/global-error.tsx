"use client";

import { company } from "@/lib/content/company";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 p-8 text-center font-sans">
        <p className="text-sm font-semibold uppercase tracking-wide text-red-600">
          Something went wrong
        </p>
        <h1 className="text-3xl font-bold">We hit an unexpected error</h1>
        <p className="max-w-md text-gray-600">
          Please try again, or call {company.phone} for help.
        </p>
        <button
          onClick={reset}
          className="rounded-lg bg-blue-700 px-5 py-2 text-white"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
