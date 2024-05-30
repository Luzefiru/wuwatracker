import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ConveneStats() {
  return (
    <div className="flex gap-3 w-full">
      <Card className="mx-2 mt-5 bg-accent w-[25%]">
        <div className="flex">
          <div className="w-full">
            <CardHeader>
              <CardTitle>Lifetime Statistics</CardTitle>
              <CardDescription>Prevail the Lasting Night</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col mt-1">
              <Card className="py-5 px-2">
                <h1>Astirites Spent</h1>
              </Card>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
