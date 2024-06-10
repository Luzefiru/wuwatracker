import { BannerTypeSlug, BannerTypeSlugEnum } from "@/types/BannerTypeSlugEnum";
import { BannerStatsCard } from "@/components/convenes/banner-stats-card";
import { bannerMetadata } from "@/data/banners";
import { notFound } from "next/navigation";

export default function Page({
  params,
}: {
  params: { name: BannerTypeSlugEnum };
}) {
  if (!Object.keys(BannerTypeSlug).includes(params.name)) {
    notFound();
  }

  return <BannerStatsCard {...bannerMetadata[params.name]} />;
}

export async function generateStaticParams() {
  return Object.keys(bannerMetadata) as BannerTypeSlugEnum[];
}
