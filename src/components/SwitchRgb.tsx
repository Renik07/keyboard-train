import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type SwitchRgbProps = {
  rgb: boolean;
  setRgb: (value: boolean) => void;
};

export default function SwitchRgb({ rgb, setRgb }: SwitchRgbProps) {
  return (
    <div className="flex items-center gap-1">
      <motion.div
        transition={{ duration: 0.3 }}
        className="inline-flex rounded-lg"
      >
        <Switch
          className="border cursor-pointer"
          id="rgb-mode"
          checked={rgb}
          onCheckedChange={setRgb}
        />
      </motion.div>
      <Label
        htmlFor="rgb-mode"
        className={`cursor-pointer select-none transition-colors ${
          rgb
            ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
            : ""
        }`}
      >
        RGB
      </Label>
    </div>
  );
}
