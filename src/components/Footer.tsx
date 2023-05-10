import React from "react";

export default function Footer() {
  return (
    <div className=" mt-16 bg-neutral-900 opacity-30">
      <div className="container mx-auto flex h-[7rem] max-w-7xl flex-col items-center justify-center gap-3 md:flex md:h-[6rem] md:flex-row md:justify-between md:gap-0">
        <div>© alw • A Creative Company • 2023</div>
        <div className="flex gap-5">
          <div>Terms of Service.</div>
          <div>Privacy Policy.</div>
        </div>
      </div>
    </div>
  );
}
