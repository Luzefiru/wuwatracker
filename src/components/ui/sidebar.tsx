import * as React from "react";
import { ConveneCategories } from "../convenes/convene-categories";

export function Sidebar() {
  return (
    <aside className="w-full xl:max-w-screen-sm desktop:w-[45%] h-fit desktop:sticky desktop:top-16">
      <div className="flex flex-col gap-3">
        <ConveneCategories />
      </div>
    </aside>
  );
}
