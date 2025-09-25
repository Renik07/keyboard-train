"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import hand from "@/images/hand.png";

const containerVariants: Variants = {
  hidden: { y: 500, opacity: 0 },
  visible: {
    y: 375,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.25, // задержка для кружков
    },
  },
};

const circleVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

export default function HintRightHand() {
  return (
    <motion.div
      className="absolute right-70 top-0 scale-110 pointer-events-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* сама рука */}
      <Image
        className="relative z-10"
        alt="Right hand"
        src={hand}
        width={290}
        height={463}
      />

      {/* кружки на пальцах */}
      <motion.div
        className="absolute left-[-36px] top-[120px] w-[120px] h-[120px] 
          bg-[radial-gradient(circle_at_50%_50%,#FFFFFF_10%,transparent_35%)]"
        variants={circleVariants}
      />
      <motion.div
        className="absolute left-8 top-[-14px] w-[120px] h-[120px] 
          bg-[radial-gradient(circle_at_50%_50%,#F3D8A1_10%,transparent_35%)]"
        variants={circleVariants}
      />
      <motion.div
        className="absolute left-23 top-[-38px] w-[120px] h-[120px] 
          bg-[radial-gradient(circle_at_50%_50%,#EDADAE_10%,transparent_35%)]"
        variants={circleVariants}
      />
      <motion.div
        className="absolute left-38 top-[-20px] w-[120px] h-[120px] 
          bg-[radial-gradient(circle_at_50%_50%,#BFDAB1_10%,transparent_35%)]"
        variants={circleVariants}
      />
      <motion.div
        className="absolute left-53 top-8 w-[120px] h-[120px] 
          bg-[radial-gradient(circle_at_50%_50%,#B4CDE7_10%,transparent_35%)]"
        variants={circleVariants}
      />
    </motion.div>
  );
}
