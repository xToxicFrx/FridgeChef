import Link from "next/link";

export function AuthLayout({
  headline,
  tagline,
  children,
}: {
  headline: string;
  tagline: string;
  children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-dvh grid-cols-1 bg-stone-50 lg:grid-cols-[1.1fr_1fr] dark:bg-stone-950">
      <section className="hidden flex-col justify-between bg-stone-900 px-12 py-16 lg:flex">
        <Link
          href="/"
          className="text-sm font-medium uppercase tracking-[0.2em] text-stone-400 transition hover:text-stone-200"
        >
          FridgeChef
        </Link>
        <div>
          <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight text-stone-50">
            {headline}
          </h1>
          <p className="mt-4 max-w-sm text-stone-400">{tagline}</p>
        </div>
        <span aria-hidden className="h-px w-12 bg-stone-700" />
      </section>

      <section className="flex items-center justify-center px-6 py-16 sm:px-12">
        <div className="w-full max-w-sm">
          <Link
            href="/"
            className="mb-10 block text-sm font-medium uppercase tracking-[0.2em] text-stone-900 lg:hidden dark:text-stone-50"
          >
            FridgeChef
          </Link>
          {children}
        </div>
      </section>
    </main>
  );
}
