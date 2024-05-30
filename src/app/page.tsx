import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <Button variant="outline">Get Started</Button>
    </div>
  );
}
