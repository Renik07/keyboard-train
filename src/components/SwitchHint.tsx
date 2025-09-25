import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type SwitchHintProps = {
  hint: boolean;
  setHint: (value: boolean) => void;
};

export default function SwitchHint({ hint, setHint }: SwitchHintProps) {
  return (
    <div className="flex items-center gap-1">
      <motion.div
        transition={{ duration: 0.3 }}
        className="inline-flex rounded-lg"
      >
        <Switch
          className="border cursor-pointer"
          id="hint-mode"
          checked={hint}
          onCheckedChange={setHint}
        />
      </motion.div>
      <Label
        htmlFor="hint-mode"
        className={`text-xl cursor-pointer select-none transition-colors`}
      >
        Hint
      </Label>
    </div>
  );
}
