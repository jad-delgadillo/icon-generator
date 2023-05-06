import React from "react";

export default function Input(props: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      type="text"
      className="rounded-md px-2 py-1 text-black"
    ></input>
  );
}
