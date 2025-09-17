import { motion } from "framer-motion";

type KeyProps = {
  char: string;
  activeKey?: string | null;
  cls?: string | "";
};

export function Key({ char, activeKey, cls }: KeyProps) {
  const isActive = activeKey === char.toLowerCase();

  return (
    <motion.div
      className={`${cls} border rounded-2xl p-3 w-full h-full ${
        isActive ? "bg-green-800 text-white" : "bg-black"
      }`}
      animate={{
        scale: isActive ? 1.1 : 1,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {char}
    </motion.div>
  );
}
