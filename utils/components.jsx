import clsx from "clsx";
export default function Tag({ name }) {
  const bg =
    name === "simple"
      ? "bg-simple"
      : name === "rugged"
      ? "bg-rugged"
      : name === "luxury"
      ? "bg-luxury"
      : "";
  return (
    <span
      className={clsx("text-[#FFEAD0]", "w-fit py-2", "px-4", "rounded-lg", bg)}
    >
      {name}
    </span>
  );
}
