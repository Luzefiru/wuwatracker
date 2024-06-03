"use client";

import * as React from "react";
import * as FilterDropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Eye, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const FilterDropdownMenu = FilterDropdownMenuPrimitive.Root;

const FilterDropdownMenuTrigger = FilterDropdownMenuPrimitive.Trigger;

const FilterDropdownMenuGroup = FilterDropdownMenuPrimitive.Group;

const FilterDropdownMenuPortal = FilterDropdownMenuPrimitive.Portal;

const FilterDropdownMenuSub = FilterDropdownMenuPrimitive.Sub;

const FilterDropdownMenuRadioGroup = FilterDropdownMenuPrimitive.RadioGroup;

const FilterDropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof FilterDropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<
    typeof FilterDropdownMenuPrimitive.SubTrigger
  > & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <FilterDropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </FilterDropdownMenuPrimitive.SubTrigger>
));
FilterDropdownMenuSubTrigger.displayName =
  FilterDropdownMenuPrimitive.SubTrigger.displayName;

const FilterDropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof FilterDropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof FilterDropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <FilterDropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    {...props}
  />
));
FilterDropdownMenuSubContent.displayName =
  FilterDropdownMenuPrimitive.SubContent.displayName;

const FilterDropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof FilterDropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof FilterDropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <FilterDropdownMenuPrimitive.Portal>
    <FilterDropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </FilterDropdownMenuPrimitive.Portal>
));
FilterDropdownMenuContent.displayName =
  FilterDropdownMenuPrimitive.Content.displayName;

const FilterDropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof FilterDropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof FilterDropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <FilterDropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
FilterDropdownMenuItem.displayName =
  FilterDropdownMenuPrimitive.Item.displayName;

const FilterDropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof FilterDropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<
    typeof FilterDropdownMenuPrimitive.CheckboxItem
  >
>(({ className, children, checked, ...props }, ref) => (
  <FilterDropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <FilterDropdownMenuPrimitive.ItemIndicator>
        <Eye className="h-4 w-4" />
      </FilterDropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </FilterDropdownMenuPrimitive.CheckboxItem>
));
FilterDropdownMenuCheckboxItem.displayName =
  FilterDropdownMenuPrimitive.CheckboxItem.displayName;

const FilterDropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof FilterDropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof FilterDropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <FilterDropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <FilterDropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </FilterDropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </FilterDropdownMenuPrimitive.RadioItem>
));
FilterDropdownMenuRadioItem.displayName =
  FilterDropdownMenuPrimitive.RadioItem.displayName;

const FilterDropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof FilterDropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof FilterDropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <FilterDropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
FilterDropdownMenuLabel.displayName =
  FilterDropdownMenuPrimitive.Label.displayName;

const FilterDropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof FilterDropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof FilterDropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <FilterDropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
FilterDropdownMenuSeparator.displayName =
  FilterDropdownMenuPrimitive.Separator.displayName;

const FilterDropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
FilterDropdownMenuShortcut.displayName = "FilterDropdownMenuShortcut";

export {
  FilterDropdownMenu,
  FilterDropdownMenuTrigger,
  FilterDropdownMenuContent,
  FilterDropdownMenuItem,
  FilterDropdownMenuCheckboxItem,
  FilterDropdownMenuRadioItem,
  FilterDropdownMenuLabel,
  FilterDropdownMenuSeparator,
  FilterDropdownMenuShortcut,
  FilterDropdownMenuGroup,
  FilterDropdownMenuPortal,
  FilterDropdownMenuSub,
  FilterDropdownMenuSubContent,
  FilterDropdownMenuSubTrigger,
  FilterDropdownMenuRadioGroup,
};
