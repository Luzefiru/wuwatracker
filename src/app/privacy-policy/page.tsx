"use client";

export default function Import() {

  return (
    <div className="flex flex-col items-center h-full w-full gap-16">
      <div className="flex flex-col sm:text-start">
        <div>
          <h2 className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight pb-2">
            Privacy Policy
          </h2>
          <p className="text-muted-foreground mb-8">
            What data wuwatracker collects and what it is used for
          </p>
        </div>
        <div className="flex flex-col sm:text-start">
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Convene History
          </h2>
          <p className="max-w-lg text-base font-normal text-gray-500 dark:text-gray-400 leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            vel sit dolorem amet corporis nesciunt fugiat qui officiis iste
            recusandae neque explicabo error, placeat quo odit repudiandae
            debitis cupiditate hic!
          </p>
        </div>
        <div className="flex flex-col sm:text-start">
          <h2 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Vercel Analytics
          </h2>
          <p className="max-w-lg text-base font-normal text-gray-500 dark:text-gray-400 leading-7 [&:not(:first-child)]:mt-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            vel sit dolorem amet corporis nesciunt fugiat qui officiis iste
            recusandae neque explicabo error, placeat quo odit repudiandae
            debitis cupiditate hic!
          </p>
        </div>
      </div>
    </div>
  );
}
