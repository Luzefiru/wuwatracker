import { BannerTypeSlug } from "@/types/BannerTypeSlugEnum";

export const bannerMetadata = {
  [BannerTypeSlug["limited-character"]]: {
    cardPoolType: 1,
    title: "When Thunder Pours",
    description: "Featured Resonator Convene",
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw_yinlin_UI.png",
    bgImgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/backgrounds/T_RoleShare_01.png",
    href: "/convene/limited-character",
  },
  [BannerTypeSlug["limited-weapon"]]: {
    cardPoolType: 2,
    title: "Absolute Pulsation",
    description: "Featured Weapon Convene",
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw21050016_UI.png",
    bgImgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/backgrounds/T_WeaponShare_06.png",
    href: "/convene/limited-weapon",
  },
  [BannerTypeSlug["permanent-character"]]: {
    cardPoolType: 3,
    title: "Tidal Chorus",
    description: "Permanent Character Convene",
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw_anke_UI.png",
    bgImgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/backgrounds/T_RoleShare_04.png",
    href: "/convene/permanent-character",
  },
  [BannerTypeSlug["permanent-weapon"]]: {
    cardPoolType: 4,
    title: "Weapon Permanent Convene",
    description: "Winter Brume Banner",
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw21010015_UI.png",
    bgImgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/backgrounds/T_WeaponShare_03.png",
    href: "/convene/permanent-weapon",
  },
  [BannerTypeSlug["starter"]]: {
    cardPoolType: 5,
    title: "Beginner Convene",
    description: "Utterance of Marvels",
    pullCost: 128, // average pulls since it's always discounted
    fiveStarPity: 50,
    fourStarPity: 10,
    imgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw_jianxin_UI.png",
    bgImgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_LuckdraRole00.png",
    href: "/convene/starter",
  },
  [BannerTypeSlug["starter-selector"]]: {
    cardPoolType: 6,
    title: "Beginner's Choice Convene",
    description: "Beginner Selector",
    pullCost: 160,
    fiveStarPity: 80,
    fourStarPity: 10,
    imgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_Luckdraw_jueyuan_UI.png",
    bgImgSrc:
      "https://cdn.wanderer.moe/wuthering-waves/luckdraw/T_LuckdraRoleWeilinaiBg.png",
    href: "/convene/starter-selector",
  },
} as const;
