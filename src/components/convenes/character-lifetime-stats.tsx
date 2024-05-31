import Image from "next/image";
import * as React from "react";

export function CharacterLifetimeStats() {
  return (
    <>
      <div className="py-4 px-3 flex justify-between bg-accent dark:bg-background rounded-lg">
        <h1 className="text-lg">Astirites Spent</h1>
        <div className="flex gap-1">
          <h1 className="text-lg">20000</h1>
          <Image
            src={"/icons/astirites.png"}
            width={30}
            height={8}
            alt="astirites icon"
          />
        </div>
      </div>
      <div className="py-4 px-3 flex justify-between bg-accent dark:bg-background rounded-lg">
        <h1 className="text-lg">Total Convenes</h1>
        <div className="flex gap-1">
          <h1 className="text-lg">200</h1>
          <Image
            src={"/icons/special-convene.png"}
            width={30}
            height={8}
            alt="astirites icon"
          />
        </div>
      </div>
      <div className="py-4 px-3 flex justify-between bg-accent dark:bg-background rounded-lg">
        <h1 className="text-lg">5 Star Characters</h1>
        <div className="flex">
          <h1 className="text-lg">5</h1>
        </div>
      </div>
      <div className="py-4 px-3 flex justify-between bg-accent dark:bg-background rounded-lg">
        <h1 className="text-lg">50-50 Win Rate</h1>
        <div className="flex">
          <h1 className="text-lg">100%</h1>
        </div>
      </div>
    </>
  );
}
