import { signInUpCallback } from "@/utils/db/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  try {
    await signInUpCallback(cookies, req);
    return NextResponse.redirect(new URL("/", req.url));
  } catch (error) {
    return NextResponse.redirect(new URL("/error/00100", req.url));
  }
}