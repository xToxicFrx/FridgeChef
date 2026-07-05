"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getGoogleOAuthUrl } from "@/lib/supabase/oauth";

export async function signup(formData: FormData) {
  const supabase = createClient();
  const origin = headers().get("origin")!;

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/signup?success=check_email");
}

export async function signupWithGoogle() {
  const origin = headers().get("origin")!;
  const { url, error } = await getGoogleOAuthUrl(origin);

  if (error || !url) {
    redirect(
      `/signup?error=${encodeURIComponent(error?.message ?? "Google-Login fehlgeschlagen")}`,
    );
  }

  redirect(url);
}
