import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthField } from "@/components/auth/auth-field";
import { GoogleButton } from "@/components/auth/google-button";
import { login, loginWithGoogle } from "./actions";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <AuthLayout
      headline="Aus dem, was da ist, wird ein Rezept."
      tagline="Foto vom Kühlschrank rein, Rezeptvorschlag raus."
    >
      <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
        Willkommen zurück
      </h2>
      <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
        Melde dich mit deiner E-Mail-Adresse an.
      </p>

      {searchParams.error && (
        <p className="mt-6 border-l-2 border-red-500 pl-3 text-sm text-red-600 dark:text-red-400">
          {searchParams.error}
        </p>
      )}

      <form action={login} className="mt-8 flex flex-col gap-5">
        <AuthField label="E-Mail" name="email" type="email" autoComplete="email" />
        <AuthField
          label="Passwort"
          name="password"
          type="password"
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="mt-2 rounded-full bg-stone-900 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
        >
          Einloggen
        </button>
      </form>

      <div className="my-8 flex items-center gap-4 text-xs uppercase tracking-widest text-stone-400">
        <span className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
        oder
        <span className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
      </div>

      <form action={loginWithGoogle}>
        <GoogleButton />
      </form>

      <p className="mt-10 text-sm text-stone-500 dark:text-stone-400">
        Noch kein Konto?{" "}
        <Link
          href="/signup"
          className="font-medium text-stone-900 underline underline-offset-4 dark:text-stone-50"
        >
          Registrieren
        </Link>
      </p>
    </AuthLayout>
  );
}
