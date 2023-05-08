import clsx from "clsx";
import Spinner from "./Spinner";

export function Button(
  props: React.ComponentPropsWithoutRef<"button"> & {
    variant?: "prmary" | "secondary";
    className?: string;
    isLoading?: boolean;
  }
) {
  const { className, ...propsWithoutClassName } = props;
  const color =
    (props.variant ?? "prmary") === "prmary"
      ? "bg-green-800 hover:bg-green-700 ring-1 hover:text-green-50 ring-green-400"
      : "bg-zinc-900 hover:bg-zinc-900 ring-red-600 hover:text-red-600 hover:ring-1";

  return (
    <button
      {...props}
      className={clsx(
        " flex flex-row items-center justify-center rounded-lg px-3 py-2 font-semibold transition-all disabled:bg-neutral-600 ",
        color,
        className ?? ""
      )}
      {...propsWithoutClassName}
    >
      {props.isLoading && <Spinner />}
      {props.children}
    </button>
  );
}
