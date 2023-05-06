export function Button(props: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className="rounded-lg bg-blue-500 px-3 py-3 font-semibold transition-all hover:bg-blue-400"
    >
      {props.children}
    </button>
  );
}
