import * as React from "react";
import { ConveneCategories } from "../convenes/convene-categories";

export function Sidebar() {
  return (
    <aside className="w-full desktop:w-[45%] h-full ">
      <div className="ml-5 mr-5 desktop:mr-0 flex flex-col gap-3">
        <ConveneCategories />
      </div>
    </aside>
  );
}
