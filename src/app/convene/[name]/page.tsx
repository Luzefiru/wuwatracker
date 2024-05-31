import { BannerTypeSlug, BannerTypeSlugEnum } from '@/types/BannerTypeSlugEnum';
import Header from '@/components/home/header';
import { Sidebar } from '@/components/ui/sidebar';
import { BannerStatsCard } from '@/components/convenes/banner-stats-card';
import { bannerMetadata } from '@/data/banners';

export default function Page({
  params,
}: {
  params: { name: BannerTypeSlugEnum };
}) {
  if (!Object.keys(BannerTypeSlug).includes(params.name)) {
    // TODO - use 404 component
    return <h1>This does not exist.</h1>;
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <Header />
      <div className="flex h-full flex-col lg:flex-row gap-8 lg:gap-12 desktop:gap-24">
        <Sidebar />
        <section className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col desktop:flex-row">
            <BannerStatsCard {...bannerMetadata[params.name]} />
          </div>
        </section>
      </div>
    </div>
  );
}
