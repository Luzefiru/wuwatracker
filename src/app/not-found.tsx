import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex  gap-5 items-center justify-center h-full">
      <div className="flex flex-col">
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>

      <Image
        className="object-cover"
        src="https://cdn.wanderer.moe/wuthering-waves/emotes/T_ChatEmo_A_06.png"
        width="360"
        height="450"
        alt="Wuwa Convene Tracker"
      />
    </div>
  );
}
