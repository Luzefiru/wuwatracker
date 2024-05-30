import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <header className="flex gap-3">
          <h1 className="text-3xl font-bold">Wuwa Convene Tracker</h1>
          <ModeToggle />
        </header>
      </div>
      <Button variant="outline">Get Started</Button>
    </div>
  );
}
