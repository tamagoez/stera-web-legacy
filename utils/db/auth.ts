// auth.ts
// 認証関連の処理を実行するユーティリティクラスです
// ここでは、SupabaseのTypescriptパッケージを利用して書いています
// ご利用のDBサービスに合わせて適宜、スクリプトを変更してください
//
// This is a utility class for auth.
// This functions are written for Supabase Typescript Package.
// Please edit scripts for your DB service.
import { supabase } from "../globalfunc";

// signInWithEmailAndPassword(email, password)
// メールアドレスとパスワードを利用して、"ログイン"します
// "Login" with Email address and password
export async function signInWithEmailAndPassword(
  email: string,
  password: string
) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  } catch (error: any) {
    return new Error(error);
  }
}

// signInWithPhoneAndPassword(phone, password)
// 電話番号とパスワードを利用して、"ログイン"します
// "Login" with phone number and password
export async function signInWithPhoneAndPassword(
  phone: string,
  password: string
) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      phone,
      password,
    });
    if (error) throw error;
    return data;
  } catch (error: any) {
    return new Error(error);
  }
}

// signUpWithEmailAndPassword(email, password, emailRedirectTo)
// メールアドレスを利用して、アカウントを新規登録します
// メールに送信された

export async function signUpWithEmailAndPassword(
  email: string,
  password: string,
  emailRedirectTo: string,
) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo,
      },
    });
    if (error) throw error
    return data;
  } catch (error: any) {
    return new Error(error);
  }
}
