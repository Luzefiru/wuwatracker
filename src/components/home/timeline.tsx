"use client";

export default function Timeline() {
  return (
    <ul className="flex flex-col w-full gap-1">
      <li className="flex w-full items-center gap-3">
        <div className="bg-accent rounded-full w-10 h-10 flex justify-center items-center">
          <p className="text-center">1</p>
        </div>
        <div className="">
          Launch Wuthering Waves on PC and open your Convene Records through the
          shop.
        </div>
      </li>
      <hr className="w-1 h-6 bg-accent ml-[1.15rem]" />
      <li className="flex w-full items-center gap-3">
        <div className="bg-accent rounded-full w-10 h-10 flex justify-center items-center">
          <p className="text-center">2</p>
        </div>
        <div className="">First Macintosh computer</div>
        <hr />
      </li>
    </ul>
  );
}
