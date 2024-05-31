import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import ConveneCategoryCard from './convene-category-card';

export function ConveneCategories() {
  return (
    <>
      <ConveneCategoryCard
        title="Character Event Convene"
        imgSrc="/banners/jiyan.png"
        stats={{
          fiveStarPity: 80,
          fiveStarCurrent: 10,
          fourStarPity: 10,
          fourStarCurrent: 2,
          totalPulls: 100,
        }}
      />
      <ConveneCategoryCard
        title="Weapon Event Convene"
        imgSrc="/banners/limited-weapon.png"
        stats={{
          fiveStarPity: 80,
          fiveStarCurrent: 10,
          fourStarPity: 10,
          fourStarCurrent: 2,
          totalPulls: 100,
        }}
      />
      <ConveneCategoryCard
        title="Character Permanent Convene"
        imgSrc="/banners/encore.png"
        stats={{
          fiveStarPity: 80,
          fiveStarCurrent: 10,
          fourStarPity: 10,
          fourStarCurrent: 2,
          totalPulls: 100,
        }}
      />
      <ConveneCategoryCard
        title="Weapon Permanent Convene"
        imgSrc="/banners/permanent-weapon.png"
        stats={{
          fiveStarPity: 80,
          fiveStarCurrent: 10,
          fourStarPity: 10,
          fourStarCurrent: 2,
          totalPulls: 100,
        }}
      />
    </>
  );
}
