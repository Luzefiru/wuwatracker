import Image from "next/image";
import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CharacterLifetimeStats } from "./character-lifetime-stats";
import { WeaponLifetimeStats } from "./weapon-lifetime-statistics";

export function ConveneStats() {
  return (
    <div className="flex gap-2 w-full flex-col ">
      <div className="flex w-full gap-4">
        <Card className=" mt-5 bg-accent w-[50%]">
          <div className="flex">
            <div className="w-full">
              <CardHeader>
                <CardTitle>Character Banner Statistics</CardTitle>
                <CardDescription>Account Lifetime Statistics</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col mt-3 gap-2">
                <CharacterLifetimeStats />
              </CardContent>
            </div>
          </div>
        </Card>
        <Card className=" mt-5 bg-accent w-[50%]">
          <div className="flex">
            <div className="w-full">
              <CardHeader>
                <CardTitle>Weapon Banner Statistics</CardTitle>
                <CardDescription>Account Lifetime Statistics</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col mt-3 gap-2">
                <WeaponLifetimeStats />
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
      <Card className="mt-5 bg-accent w-full">
        <div className="w-full">
          <CardHeader>
            <CardTitle>Recent 5 Stars Received</CardTitle>
          </CardHeader>
          <CardContent className="flex mt-5 mb-3 gap-2 ">
            <div className="bg-background w-12 h-12 rounded-full"></div>
            <div className="bg-background w-12 h-12 rounded-full"></div>
            <div className="bg-background w-12 h-12 rounded-full"></div>
            <div className="bg-background w-12 h-12 rounded-full"></div>
            <div className="bg-background w-12 h-12 rounded-full"></div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
