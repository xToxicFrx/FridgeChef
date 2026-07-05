import { createClient } from "@/lib/supabase/server";

export async function getGoogleOAuthUrl(origin: string) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  return { url: data?.url ?? null, error };
}
