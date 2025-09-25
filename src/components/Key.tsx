import clsx from "clsx";
import { motion } from "framer-motion";

type KeyProps = {
  char: string;
  activeKey?: string | null;
  hint: boolean;
  cls?: string | "";
};

const keyToColor: Record<string, string> = {
  "`": "bg-[#F3D8A1] text-black",
  1: "bg-[#F3D8A1] text-black",
  2: "bg-[#F3D8A1] text-black",
  q: "bg-[#F3D8A1] text-black",
  a: "bg-[#F3D8A1] text-black",
  z: "bg-[#F3D8A1] text-black",
  3: "bg-[#EDADAE] text-black",
  w: "bg-[#EDADAE] text-black",
  s: "bg-[#EDADAE] text-black",
  x: "bg-[#EDADAE] text-black",
  4: "bg-[#BFDAB1] text-black",
  e: "bg-[#BFDAB1] text-black",
  d: "bg-[#BFDAB1] text-black",
  c: "bg-[#BFDAB1] text-black",
  5: "bg-[#B4CDE7] text-black",
  6: "bg-[#B4CDE7] text-black",
  r: "bg-[#B4CDE7] text-black",
  t: "bg-[#B4CDE7] text-black",
  f: "bg-[#B4CDE7] text-black",
  g: "bg-[#B4CDE7] text-black",
  v: "bg-[#B4CDE7] text-black",
  b: "bg-[#B4CDE7] text-black",
  7: "bg-[#F3D8A1] text-black",
  y: "bg-[#F3D8A1] text-black",
  u: "bg-[#F3D8A1] text-black",
  h: "bg-[#F3D8A1] text-black",
  j: "bg-[#F3D8A1] text-black",
  n: "bg-[#F3D8A1] text-black",
  m: "bg-[#F3D8A1] text-black",
  8: "bg-[#EDADAE] text-black",
  i: "bg-[#EDADAE] text-black",
  k: "bg-[#EDADAE] text-black",
  ",": "bg-[#EDADAE] text-black",
  9: "bg-[#BFDAB1] text-black",
  o: "bg-[#BFDAB1] text-black",
  l: "bg-[#BFDAB1] text-black",
  ".": "bg-[#BFDAB1] text-black",
  0: "bg-[#B4CDE7] text-black",
  "-": "bg-[#B4CDE7] text-black",
  "=": "bg-[#B4CDE7] text-black",
  backspace: "bg-[#B4CDE7] text-black",
  p: "bg-[#B4CDE7] text-black",
  "[": "bg-[#B4CDE7] text-black",
  "]": "bg-[#B4CDE7] text-black",
  "\\": "bg-[#B4CDE7] text-black",
  ";": "bg-[#B4CDE7] text-black",
  "'": "bg-[#B4CDE7] text-black",
  "/": "bg-[#B4CDE7] text-black",
  " ": "bg-[#ffffff] text-black",
  tab: "bg-[#E4E4E4] text-black",
  "caps lock": "bg-[#E4E4E4] text-black",
  alt: "bg-[#E4E4E4] text-black",
  enter: "bg-[#E4E4E4] text-black",
  shift: "bg-[#E4E4E4] text-black",
  ctrl: "bg-[#E4E4E4] text-black",
  fn: "bg-[#E4E4E4] text-black",
  opt: "bg-[#E4E4E4] text-black",
  win: "bg-[#E4E4E4] text-black",
};

export function Key({ char, activeKey, hint, cls }: KeyProps) {
  const isActive = activeKey === char.toLowerCase();
  const color = hint ? keyToColor[char.toLowerCase()] : "bg-black";

  // console.log(char);

  return (
    <motion.div
      className={clsx(cls, "border rounded-2xl text-xl p-4 w-full h-full", {
        "bg-green-500 text-white": isActive,
        [color]: !isActive,
      })}
      animate={{
        scale: isActive ? 1.1 : 1,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {char}
      {char === "f" && <span>-</span>}
    </motion.div>
  );
}
