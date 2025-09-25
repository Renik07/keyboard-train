"use client";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Volume2, VolumeX } from "lucide-react";

type SwitchSoundProps = {
  sound: boolean;
  setSound: (value: boolean) => void;
};

export default function SwitchSound({ sound, setSound }: SwitchSoundProps) {
  return (
    <div className="flex items-center gap-1">
      <Switch
        id="sound-mode"
        checked={sound}
        onCheckedChange={setSound}
        className="cursor-pointer relative border"
      />
      <Label htmlFor="sound-mode" className="cursor-pointer">
        {/* Иконка с анимацией */}
        <div className="relative w-8 h-8">
          <AnimatePresence mode="wait" initial={false}>
            {sound ? (
              <motion.div
                key="volume-on"
                initial={{ opacity: 0, y: -10, rotate: -30 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: 10, rotate: 30 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center text-emerald-500"
              >
                <Volume2 size={30} />
              </motion.div>
            ) : (
              <motion.div
                key="volume-off"
                initial={{ opacity: 0, y: -10, rotate: 30 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, y: 10, rotate: -30 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center text-red-500"
              >
                <VolumeX size={30} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Label>
    </div>
  );
}
