// @ts-nocheck
"use client";
import React from "react";
import InfiniteScroll from "../ui/scroll-area";
import getPullNumber from "@/lib/getPullNumber";

import { useState } from "react";
import { BannerStats } from "@/types/BannerStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableItemName } from "../ui/table-item-name";

interface Props {
  stats: BannerStats | null;
}

export function PullHistory({ stats }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="pb-6">
        <CardTitle>Pull History</CardTitle>
      </CardHeader>
      <div className="max-h-[300px] w-full  overflow-y-auto">
        <div className="flex w-full flex-col items-center  gap-3">
          <CardContent className="w-full">
            {stats?.fiveStarObjects.length || stats?.fourStarObjects.length ? (
              <Table className="text-md">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Pull No.</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead>Pity</TableHead>
                    <TableHead className="text-right">Date Received</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {[...stats?.fourStarObjects, ...stats?.fiveStarObjects]
                    .sort((a, b) => b.pullNumber - a.pullNumber)
                    .map((item) => (
                      <TableRow key={item.pullNumber}>
                        <TableCell className="font-medium">
                          {item.pullNumber}
                        </TableCell>
                        <TableCell>
                          <TableItemName
                            name={item.name}
                            qualityLevel={item.qualityLevel}
                          />
                        </TableCell>
                        <TableCell>
                          {getPullNumber(
                            item.qualityLevel,
                            item.fourStarCurrentPity,
                            item.pullNumber,
                            item.previousFiveStarPullNumber,
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          {item.time.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-muted-foreground text-sm">No records found.</p>
            )}
          </CardContent>
          <InfiniteScroll threshold={1}></InfiniteScroll>
        </div>
      </div>
    </Card>
  );
}
