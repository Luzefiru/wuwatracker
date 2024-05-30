import * as React from "react";
import { Image } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ConveneCategories() {
  return (
    <>
      <Card className="ml-5 mt-5 hover:bg-accent">
        <div className="flex">
          <div className="w-28 h-28 rounded-xl my-3 ml-3 bg-blue-300 self-center"></div>
          <div className="w-full">
            <CardHeader>
              <CardTitle className="text-lg desktop:text-xl">
                Character Event Convene
              </CardTitle>
              <CardDescription className="text-sm desktop:text-md">
                Prevail the Lasting Night
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col  text-sm desktop:text-md">
              <div className="flex justify-between text-yellow-500 ">
                <p>5 Star Pity</p>
                <p>0/80</p>
              </div>
              <div className="flex justify-between text-purple-500">
                <p>4 Star Pity</p>
                <p>0/80</p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
      <Card className="ml-5 hover:bg-accent">
        <div className="flex">
          <div className="w-28 h-28 rounded-xl my-3 ml-3 bg-blue-300 self-center"></div>
          <div className="w-full">
            <CardHeader>
              <CardTitle className="text-lg desktop:text-xl">
                Weapon Event Convene
              </CardTitle>
              <CardDescription className="text-sm desktop:text-md">
                Absolute Pulsation
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col text-sm desktop:text-md">
              <div className="flex justify-between text-yellow-500">
                <p>5 Star Pity</p>
                <p>0/80</p>
              </div>
              <div className="flex justify-between text-purple-500">
                <p>4 Star Pity</p>
                <p>0/80</p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
      <Card className="ml-5 hover:bg-accent">
        <div className="flex">
          <div className="w-28 h-28 rounded-xl my-3 ml-3 bg-blue-300 self-center"></div>
          <div className="w-full">
            <CardHeader>
              <CardTitle className="text-lg desktop:text-xl">
                Character Permanent Convene
              </CardTitle>
              <CardDescription className="text-sm desktop:text-md">
                Tidal Chorus
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col text-sm desktop:text-md">
              <div className="flex justify-between text-yellow-500">
                <p>5 Star Pity</p>
                <p>0/80</p>
              </div>
              <div className="flex justify-between text-purple-500">
                <p>4 Star Pity</p>
                <p>0/80</p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
      <Card className="ml-5 hover:bg-accent">
        <div className="flex">
          <div className="w-28 h-28 rounded-xl my-3 ml-3 bg-blue-300 self-center"></div>
          <div className="w-full">
            <CardHeader>
              <CardTitle className="text-lg desktop:text-xl">
                Weapon Permanent Convene
              </CardTitle>
              <CardDescription className="text-sm desktop:text-md">
                Winter Brume
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col text-sm desktop:text-md">
              <div className="flex justify-between text-yellow-500">
                <p>5 Star Pity</p>
                <p>0/80</p>
              </div>
              <div className="flex justify-between text-purple-500">
                <p>4 Star Pity</p>
                <p>0/80</p>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </>
  );
}
