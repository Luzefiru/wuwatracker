"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <div>
      <Button
        variant="outline"
        className="w-[10%]"
        onClick={() => router.push("/import")}
      >
        Import
      </Button>
    </div>
  );
}
