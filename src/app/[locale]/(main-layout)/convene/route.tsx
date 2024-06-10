import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";
import getFirstConveneBannerHref from "@/lib/getFirstConveneBannerHref";

export async function GET(_: NextRequest) {
  return redirect(getFirstConveneBannerHref());
}
