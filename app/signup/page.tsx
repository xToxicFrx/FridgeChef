import Link from "next/link";
import { AuthLayout } from "@/components/auth/auth-layout";
import { AuthField } from "@/components/auth/auth-field";
import { GoogleButton } from "@/components/auth/google-button";
import { signup, signupWithGoogle } from "./actions";

export default function SignupPage({
  searchParams,
}: {
  searchParams: { error?: string; success?: string };
}) {
  return (
    <AuthLayout
      headline="Kein Rezept-Ideen-Mangel mehr."
      tagline="Ein Konto, drei Scans täglich kostenlos, jederzeit kündbar."
    >
      <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-50">
        Konto erstellen
      </h2>
      <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
        Registriere dich mit deiner E-Mail-Adresse.
      </p>

      {searchParams.error && (
        <p className="mt-6 border-l-2 border-red-500 pl-3 text-sm text-red-600 dark:text-red-400">
          {searchParams.error}
        </p>
      )}

      {searchParams.success === "check_email" && (
        <p className="mt-6 border-l-2 border-emerald-500 pl-3 text-sm text-emerald-700 dark:text-emerald-400">
          Fast geschafft — bestätige deine E-Mail-Adresse über den Link, den
          wir dir geschickt haben.
        </p>
      )}

      <form action={signup} className="mt-8 flex flex-col gap-5">
        <AuthField label="E-Mail" name="email" type="email" autoComplete="email" />
        <AuthField
          label="Passwort"
          name="password"
          type="password"
          autoComplete="new-password"
        />
        <button
          type="submit"
          className="mt-2 rounded-full bg-stone-900 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
        >
          Registrieren
        </button>
      </form>

      <div className="my-8 flex items-center gap-4 text-xs uppercase tracking-widest text-stone-400">
        <span className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
        oder
        <span className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
      </div>

      <form action={signupWithGoogle}>
        <GoogleButton />
      </form>

      <p className="mt-10 text-sm text-stone-500 dark:text-stone-400">
        Schon ein Konto?{" "}
        <Link
          href="/login"
          className="font-medium text-stone-900 underline underline-offset-4 dark:text-stone-50"
        >
          Einloggen
        </Link>
      </p>
    </AuthLayout>
  );
}
