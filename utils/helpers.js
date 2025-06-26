import clsx from "clsx";

export default function chooseTypeColor(typeName) {
  return clsx(
    typeName === "simple"
      ? "bg-[#E17654]"
      : typeName === "rugged"
      ? "bg-[#115E59]"
      : typeName === "luxury"
      ? "bg-[#161616]"
      : "",
    "text-[#FFEAD0]",
    "w-fit py-2",
    "px-4",
    "rounded-lg"
  );
}
