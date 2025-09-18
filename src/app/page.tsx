import Keyboard from "@/components/Keyboard";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100%]">
      <Keyboard />
      <CustomCursor />
    </div>
  );
}
