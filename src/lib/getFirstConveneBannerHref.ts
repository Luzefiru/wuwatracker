import { BannerTypeSlug } from "@/types/BannerTypeSlugEnum";

export default function getFirstConveneBannerHref() {
  const firstBannerSlug = Object.keys(BannerTypeSlug)[0];
  return `/convene/${firstBannerSlug}`;
}
