import { BannerTypeSlug, BannerTypeSlugEnum } from "@/types/BannerTypeSlugEnum";
import { BannerStatsCard } from "@/components/convenes/banner-stats-card";
import { bannerMetadata } from "@/data/banners";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";
import locales from "@/config/locales";

export default function Page({
  params,
}: {
  params: { name: BannerTypeSlugEnum; locale: string };
}) {
  unstable_setRequestLocale(params.locale);

  if (!Object.keys(BannerTypeSlug).includes(params.name)) {
    notFound();
  }

  return <BannerStatsCard {...bannerMetadata[params.name]} />;
}

export async function generateStaticParams() {
  const localesArray = locales.map((locale) => ({ locale }));
  const namesArray = Object.keys(bannerMetadata) as BannerTypeSlugEnum[];

  // Create an array of objects, each containing locale and name
  const staticParams = localesArray.flatMap((localeObj) =>
    namesArray.map((name) => ({ locale: localeObj.locale, name })),
  );

  return staticParams;
}
