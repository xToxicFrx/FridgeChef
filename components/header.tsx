import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function Header() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  async function signOut() {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <header className="flex items-center justify-between border-b border-stone-200 px-8 py-5 dark:border-stone-800">
      <Link
        href="/"
        className="text-sm font-medium uppercase tracking-[0.2em] text-stone-900 dark:text-stone-50"
      >
        FridgeChef
      </Link>

      {user ? (
        <form action={signOut} className="flex items-center gap-4">
          <span className="text-sm text-stone-500 dark:text-stone-400">
            Eingeloggt als {user.email}
          </span>
          <button
            type="submit"
            className="rounded-full border border-stone-300 px-4 py-1.5 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-50 dark:hover:text-stone-50"
          >
            Logout
          </button>
        </form>
      ) : (
        <nav className="flex items-center gap-3 text-sm font-medium">
          <Link
            href="/login"
            className="text-stone-700 transition hover:text-stone-900 dark:text-stone-300 dark:hover:text-stone-50"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-stone-900 px-4 py-1.5 text-stone-50 transition hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-900 dark:hover:bg-stone-200"
          >
            Sign up
          </Link>
        </nav>
      )}
    </header>
  );
}
