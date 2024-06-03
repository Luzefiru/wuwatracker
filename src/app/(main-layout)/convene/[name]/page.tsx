import { BannerTypeSlug, BannerTypeSlugEnum } from "@/types/BannerTypeSlugEnum";
import { Sidebar } from "@/components/ui/sidebar";
import { BannerStatsCard } from "@/components/convenes/banner-stats-card";
import { bannerMetadata } from "@/data/banners";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Import } from "lucide-react";

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
      <div className="flex h-full flex-col lg:flex-row gap-8 lg:gap-12 desktop:gap-16">
        <Sidebar />
        <section className="w-full">
          <div className="justify-around md:justify-end w-full md:w-auto mb-4 hidden lg:flex">
            <Button asChild variant="default" size="lg">
              <Link href="/import">
                <Import className="mr-2 h-4 w-4" /> Import
              </Link>
            </Button>
          </div>
          <BannerStatsCard {...bannerMetadata[params.name]} />
        </section>
      </div>
    </div>
  );
}
