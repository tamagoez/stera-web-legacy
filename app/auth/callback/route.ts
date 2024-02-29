import { signInUpCallback } from "@/utils/db/auth";
import { isUserInitFinished } from "@/utils/db/profileFetch";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  try {
    await signInUpCallback(cookies, req);
    const userInitStatus = await isUserInitFinished();
    if (userInitStatus) {
    return NextResponse.redirect(new URL("/", req.url));
    } return NextResponse.redirect(new URL("/auth/init", req.url))
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(new URL("/error/00100", req.url));
  }
}