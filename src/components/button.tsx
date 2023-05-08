import clsx from "clsx";

export function Button(
  props: React.ComponentPropsWithoutRef<"button"> & {
    variant?: "prmary" | "secondary";
  }
) {
  const color =
    (props.variant ?? "prmary") === "prmary"
      ? "bg-green-800 hover:bg-green-700 ring-1 hover:text-green-50 ring-green-400"
      : "bg-zinc-900 hover:bg-zinc-900 ring-red-600 hover:text-red-600 hover:ring-1";

  return (
    <button
      {...props}
      className={clsx(
        "mb-2 rounded-lg  px-3 py-2 font-semibold transition-all ",
        color
      )}
    >
      {props.children}
    </button>
  );
}
