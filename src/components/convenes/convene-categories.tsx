'use client';

import * as React from 'react';
import ConveneCategoryCard from './convene-category-card';

export function ConveneCategories() {
  // TODO - create a JSON object to get these information
  return (
    <>
      <ConveneCategoryCard
        title="Character Event Convene"
        imgSrc="/banners/jiyan.png"
        cardPoolType={1}
        fiveStarPity={80}
        fourStarPity={10}
      />
      <ConveneCategoryCard
        title="Weapon Event Convene"
        imgSrc="/banners/limited-weapon.png"
        cardPoolType={2}
        fiveStarPity={80}
        fourStarPity={10}
      />
      <ConveneCategoryCard
        title="Character Permanent Convene"
        imgSrc="/banners/encore.png"
        cardPoolType={3}
        fiveStarPity={80}
        fourStarPity={10}
      />
      <ConveneCategoryCard
        title="Weapon Permanent Convene"
        imgSrc="/banners/permanent-weapon.png"
        cardPoolType={4}
        fiveStarPity={80}
        fourStarPity={10}
      />
    </>
  );
}
