// profileFetch.ts
//
// ユーザーのプロファイル関連のデータについて取得します
// ここでは、SupabaseのTypescriptパッケージを利用して書いています
// ご利用のDBサービスに合わせて適宜、スクリプトを変更してください
//
// This is a utility class for fetching user profile data.
// This functions are written for Supabase Typescript Package.
// Please edit scripts for your DB service.

import { createSupabaseServerClient } from "../globalfunc";

export async function isUserInitFinished() {
  try {
    const supabase = createSupabaseServerClient()
    const {
      data: { user }, error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    const handleId = user?.user_metadata.handle_id
    const { data: select_data, error: select_error } = await supabase.from("profile").select().eq("handle_id", handleId);
    if (select_error) return false;
    if (select_data) return true;
    return new Error()
  } catch (error: any) {
    return new Error(error);
  }
}
