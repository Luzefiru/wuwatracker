import { BannerTypeSlug } from '@/types/BannerTypeSlugEnum';

export const bannerMetadata = {
  [BannerTypeSlug['limited-character']]: {
    cardPoolType: 1,
    title: 'Prevail the Lasting Night',
    description: 'Character Event Convene',
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      'https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw_jiyan_UI.png',
    bgImgSrc:
      'https://cdn.wanderer.moe/wuthering-waves/backgrounds/T_RoleShare_01.png',
    href: '/convene/limited-character',
  },
  [BannerTypeSlug['limited-weapon']]: {
    cardPoolType: 2,
    title: 'Absolute Pulsation',
    description: 'Weapon Event Convene',
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      'https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw21010016_UI.png',
    bgImgSrc:
      'https://cdn.wanderer.moe/wuthering-waves/backgrounds/T_WeaponShare_06.png',
    href: '/convene/limited-weapon',
  },
  [BannerTypeSlug['permanent-character']]: {
    cardPoolType: 3,
    title: 'Tidal Chorus',
    description: 'Permanent Character Convene',
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      'https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw_anke_UI.png',
    bgImgSrc:
      'https://cdn.wanderer.moe/wuthering-waves/backgrounds/T_RoleShare_04.png',
    href: '/convene/permanent-character',
  },
  [BannerTypeSlug['permanent-weapon']]: {
    cardPoolType: 4,
    title: 'Weapon Permanent Convene',
    description: 'Winter Brume Banner',
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      'https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw21010015_UI.png',
    bgImgSrc:
      'https://cdn.wanderer.moe/wuthering-waves/backgrounds/T_WeaponShare_03.png',
    href: '/convene/permanent-weapon',
  },
} as const;
