export default function chooseTypeColor(typeName) {
  return typeName === "simple"
    ? "bg-[#E17654]"
    : typeName === "rugged"
    ? "bg-[#115E59]"
    : typeName === "luxury"
    ? "bg-[#161616]"
    : "";
}
