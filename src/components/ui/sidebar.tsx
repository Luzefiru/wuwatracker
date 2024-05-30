import * as React from 'react';
import { ConveneCategories } from '../convenes/convene-categories';

export function Sidebar() {
  return (
    <aside className="w-[40%] h-full flex flex-col gap-3">
      <ConveneCategories />
    </aside>
  );
}
