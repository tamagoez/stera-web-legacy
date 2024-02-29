// import { createClient } from '@supabase/supabase-js'
import { createBrowserClient, createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { DB_KEY, DB_URL } from "./globalvar";

// export const supabase = createClient(DB_URL, DB_KEY)


// https://supabase.com/docs/guides/auth/server-side/nextjs
export function createSupabaseBrowserClient() {
  return createBrowserClient(DB_URL!, DB_KEY!);
}
export function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerClient(
    DB_URL!,
    DB_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
