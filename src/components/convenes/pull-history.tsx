"use client";
import React from "react";
import InfiniteScroll from "../ui/scroll-area";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { BannerStats } from "@/types/BannerStats";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DummyProductResponse {
  products: DummyProduct[];
  total: number;
  skip: number;
  limit: number;
}

interface DummyProduct {
  id: number;
  title: string;
  price: string;
}

interface Props {
  stats: BannerStats | null;
}

const Product = ({ product }: { product: DummyProduct }) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg border-2 border-gray-200 p-2">
      <div className="flex gap-2">
        <div className="flex flex-col justify-center gap-1">
          <div className="font-bold text-primary">
            {product.id} - {product.title}
          </div>
          <div className="text-sm text-muted-foreground">{product.price}</div>
        </div>
      </div>
    </div>
  );
};

export function PullHistory({ stats }: Props) {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [products, setProducts] = useState<DummyProduct[]>([]);

  const next = async () => {
    setLoading(true);

    setTimeout(async () => {
      const res = await fetch(
        `https://dummyjson.com/products?limit=3&skip=${3 * page}&select=title,price`,
      );
      const data = (await res.json()) as DummyProductResponse;
      setProducts((prev) => [...prev, ...data.products]);
      setPage((prev) => prev + 1);

      // Usually your response will tell you if there is no more data.
      if (data.products.length < 3) {
        setHasMore(false);
      }
      setLoading(false);
    }, 800);
  };
  return (
    <div className="max-h-[300px] w-full  overflow-y-auto">
      <div className="flex w-full flex-col items-center  gap-3">
        <Card className="w-full">
          <CardHeader className="pb-2">
            <CardTitle>Pull History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Pull No.</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Pity</TableHead>
                  <TableHead className="text-right">Date Received</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats?.fourStarObjects.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-medium">
                      {item.cardPoolType}
                    </TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <InfiniteScroll
          hasMore={hasMore}
          isLoading={loading}
          next={next}
          threshold={1}
        >
          {hasMore && <Loader2 className="my-4 h-8 w-8 animate-spin" />}
        </InfiniteScroll>
      </div>
    </div>
  );
}
