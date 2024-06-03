import { BannerTypeSlugEnum } from "./BannerTypeSlugEnum";

export default interface BannerFilter {
  slug: BannerTypeSlugEnum;
  cardPoolType: number;
}
