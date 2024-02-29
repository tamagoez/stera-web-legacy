"use server";

import { createSupabaseServerClient } from "@/utils/globalfunc";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(email: string, password: string) {
  const supabase = createSupabaseServerClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return new Error(error.message)
  }

  revalidatePath("/", "layout");
  redirect("/auth/callback");
}

export async function signup(email: string, password: string) {
  const supabase = createSupabaseServerClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return new Error(error.message)
  }

  revalidatePath("/", "layout");
//   redirect("/auth/");
}
