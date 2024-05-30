import * as React from "react";
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
      <Card className="ml-5 mt-5">
        <div className="flex">
          <div className="w-[20%] rounded-xl my-3 ml-3 bg-blue-300"></div>
          <div className="w-full">
            <CardHeader>
              <CardTitle>Character Event Convene</CardTitle>
              <CardDescription>Prevail the Lasting Night</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
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
      <Card className="ml-5 ">
        <div className="flex">
          <div className="w-[20%] rounded-xl my-3 ml-3 bg-blue-300"></div>
          <div className="w-full">
            <CardHeader>
              <CardTitle>Weapon Event Convene</CardTitle>
              <CardDescription>Absolute Pulsation</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
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
      <Card className="ml-5 ">
        <div className="flex">
          <div className="w-[20%] rounded-xl my-3 ml-3 bg-blue-300"></div>
          <div className="w-full">
            <CardHeader>
              <CardTitle>Character Permanent Convene</CardTitle>
              <CardDescription>Tidal Chorus</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
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
      <Card className="ml-5 ">
        <div className="flex">
          <div className="w-[20%] rounded-xl my-3 ml-3 bg-blue-300"></div>
          <div className="w-full">
            <CardHeader>
              <CardTitle>Weapon Permanent Convene</CardTitle>
              <CardDescription>Winter Brume</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
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
