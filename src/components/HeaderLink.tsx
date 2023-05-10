import clsx from "clsx";
import Link, { type LinkProps } from "next/link";
import React, { type ReactNode } from "react";

export default function HeaderLink(
  props: LinkProps & { children: ReactNode; className?: string }
) {
  const { className, ...propsWithoutClassName } = props;
  return (
    <Link
      {...props}
      className={clsx(
        "inline-block rounded-lg bg-cyan-900 p-2 font-semibold tracking-wider ring-1 ring-cyan-400 transition-all hover:scale-[102%] hover:bg-cyan-600 hover:ring-2  hover:ring-cyan-100",
        className ?? ""
      )}
      {...propsWithoutClassName}
    >
      {" "}
      {props.children}
    </Link>
  );
}
