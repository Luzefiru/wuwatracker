import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full px-8 desktop:px-0">
      <p className="text-2xl desktop:text-3xl font-bold">
        Whoops! Are you lost, Rover?
      </p>
      <Image
        className="object-cover"
        src="https://cdn.wanderer.moe/wuthering-waves/emotes/T_ChatEmo_A_06.png"
        width="360"
        height="450"
        alt="Wuwa Convene Tracker"
      />
      <div className="flex flex-col gap-4">
        <p className="text-md desktop:text-lg">
          Sorry, we could not seem to find that resource.
        </p>
        <Button asChild variant="default" size="lg">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
