import { BannerTypeSlug, BannerTypeSlugEnum } from '@/types/BannerTypeSlugEnum';
import Header from '@/components/home/header';
import { Sidebar } from '@/components/ui/sidebar';
import { BannerStatsCard } from '@/components/convenes/banner-stats-card';

// TODO - find a better place to put this to easily edit it
const data = {
  [BannerTypeSlug['limited-character-convene']]: {
    cardPoolType: 1,
    title: 'Prevail the Lasting Night',
    description: 'Character Event Convene',
    pullCost: 160,
  },
  [BannerTypeSlug['limited-weapon-convene']]: {
    cardPoolType: 2,
    title: 'Absolute Pulsation',
    description: 'Weapon Event Convene',
    pullCost: 160,
  },
  [BannerTypeSlug['permanent-character-convene']]: {
    cardPoolType: 3,
    title: 'Tidal Chorus',
    description: 'Permanent Character Convene',
    pullCost: 160,
  },
  [BannerTypeSlug['permanent-weapon-convene']]: {
    cardPoolType: 4,
    title: 'Weapon Permanent Convene',
    description: 'Winter Brume Banner',
    pullCost: 160,
  },
} as const;

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
            <BannerStatsCard {...data[params.name]} />
          </div>
        </section>
      </div>
    </div>
  );
}
