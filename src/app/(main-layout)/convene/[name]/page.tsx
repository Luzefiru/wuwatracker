import { BannerTypeSlug, BannerTypeSlugEnum } from "@/types/BannerTypeSlugEnum";
import Header from "@/components/home/header";
import { Sidebar } from "@/components/ui/sidebar";
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

  return (
    <div className="flex flex-col h-full justify-between">
      <Header />
      <div className="flex h-full flex-col lg:flex-row gap-8 lg:gap-12 desktop:gap-16">
        <Sidebar />
        <section className="flex w-full flex-col gap-8">
          <BannerStatsCard {...bannerMetadata[params.name]} />
        </section>
      </div>
    </div>
  );
}
