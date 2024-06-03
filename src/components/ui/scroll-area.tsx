import * as React from "react";

interface InfiniteScrollProps {
  threshold?: number;
  root?: Element | Document | null;
  rootMargin?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export default function InfiniteScroll({
  threshold = 1,
  root = null,
  rootMargin = "0px",
  reverse,
  children,
}: InfiniteScrollProps) {
  const observer = React.useRef<IntersectionObserver>();

  const flattenChildren = React.useMemo(
    () => React.Children.toArray(children),
    [children],
  );

  return (
    <>
      {flattenChildren.map((child, index) => {
        if (!React.isValidElement(child)) {
          process.env.NODE_ENV === "development" &&
            console.warn("You should use a valid element with InfiniteScroll");
          return child;
        }

        const isObserveTarget = reverse
          ? index === 0
          : index === flattenChildren.length - 1;

        // @ts-ignore ignore ref type
        return React.cloneElement(child, { ref });
      })}
    </>
  );
}
