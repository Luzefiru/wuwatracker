"use client";
import { ModeToggle } from "./mode-toggle";
import * as React from "react";

export function Header() {
  return (
    <header className="flex justify-between items-center border-b-[1.5px] h-[10%] px-8">
      <h1 className="text-3xl font-bold">Wuwa Convene Tracker</h1>
      <ModeToggle />
    </header>
  );
}
