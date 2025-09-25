"use client";
import { useEffect, useRef, useState } from "react";
import { Key } from "./Key";
import { useHotkeys } from "react-hotkeys-hook";
import SwitchRgb from "./SwitchRgb";
import SwitchSound from "./SwitchSound";
import SwitchHint from "./SwitchHint";
import HintRightHand from "./HintRightHand";
import HintLeftHand from "./HintLeftHand";

export default function Keyboard() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [rgb, setRgb] = useState(false);
  const [sound, setSound] = useState(false);
  const [hint, setHint] = useState(false);

  // console.log(activeKey);

  // Загружаем звук
  const soundRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    soundRef.current = new Audio("/sounds/key-click.MP3");
  }, []);

  // Ловим все клавиши
  useHotkeys("*", (event) => {
    const key = event.key.toLowerCase();
    setActiveKey(key);

    // Если включен звук
    if (sound && soundRef.current) {
      // Создаём клон, чтобы звук играл поверх
      const audio = soundRef.current.cloneNode() as HTMLAudioElement;
      audio.volume = 0.5;
      audio.play().catch(() => {}); // ловим ошибку, если браузер блокнул
    }

    // Чтобы подсветка исчезала после отпускания
    setTimeout(() => setActiveKey(null), 200);
  });

  return (
    <div className="relative">
      <div className="flex gap-4">
        <SwitchRgb rgb={rgb} setRgb={setRgb} />
        <SwitchSound sound={sound} setSound={setSound} />
        <SwitchHint hint={hint} setHint={setHint} />
      </div>
      <div className={`space-y-1 p-7 ${rgb ? "keyboard" : ""}`}>
        {/* Первый ряд */}
        <div className="grid grid-cols-15 gap-1 text-center">
          <Key char="`" activeKey={activeKey} hint={hint} />
          <Key char="1" activeKey={activeKey} hint={hint} />
          <Key char="2" activeKey={activeKey} hint={hint} />
          <Key char="3" activeKey={activeKey} hint={hint} />
          <Key char="4" activeKey={activeKey} hint={hint} />
          <Key char="5" activeKey={activeKey} hint={hint} />
          <Key char="6" activeKey={activeKey} hint={hint} />
          <Key char="7" activeKey={activeKey} hint={hint} />
          <Key char="8" activeKey={activeKey} hint={hint} />
          <Key char="9" activeKey={activeKey} hint={hint} />
          <Key char="0" activeKey={activeKey} hint={hint} />
          <Key char="-" activeKey={activeKey} hint={hint} />
          <Key char="=" activeKey={activeKey} hint={hint} />
          <Key
            char="Backspace"
            activeKey={activeKey}
            hint={hint}
            cls="col-span-2 text-right"
          />
        </div>

        {/* Второй ряд */}
        <div className="grid grid-cols-16 gap-1 text-center">
          <Key
            char="tab"
            activeKey={activeKey}
            hint={hint}
            cls="col-span-2 text-left"
          />
          <Key char="Q" activeKey={activeKey} hint={hint} />
          <Key char="W" activeKey={activeKey} hint={hint} />
          <Key char="E" activeKey={activeKey} hint={hint} />
          <Key char="R" activeKey={activeKey} hint={hint} />
          <Key char="T" activeKey={activeKey} hint={hint} />
          <Key char="Y" activeKey={activeKey} hint={hint} />
          <Key char="U" activeKey={activeKey} hint={hint} />
          <Key char="I" activeKey={activeKey} hint={hint} />
          <Key char="O" activeKey={activeKey} hint={hint} />
          <Key char="P" activeKey={activeKey} hint={hint} />
          <Key char="[" activeKey={activeKey} hint={hint} />
          <Key char="]" activeKey={activeKey} hint={hint} />
          <Key char="\" activeKey={activeKey} hint={hint} cls="col-span-2" />
        </div>

        {/* Третий ряд */}
        <div className="grid grid-cols-15 gap-1 text-center">
          <Key
            char="Caps lock"
            activeKey={activeKey}
            hint={hint}
            cls="col-span-2 text-left"
          />
          <Key char="A" activeKey={activeKey} hint={hint} />
          <Key char="S" activeKey={activeKey} hint={hint} />
          <Key char="D" activeKey={activeKey} hint={hint} />
          <Key char="F" activeKey={activeKey} hint={hint} />
          <Key char="G" activeKey={activeKey} hint={hint} />
          <Key char="H" activeKey={activeKey} hint={hint} />
          <Key char="J" activeKey={activeKey} hint={hint} />
          <Key char="K" activeKey={activeKey} hint={hint} />
          <Key char="L" activeKey={activeKey} hint={hint} />
          <Key char=";" activeKey={activeKey} hint={hint} />
          <Key char="'" activeKey={activeKey} hint={hint} />
          <Key
            char="Enter"
            activeKey={activeKey}
            hint={hint}
            cls="col-span-2"
          />
        </div>

        {/* Четвертый ряд */}
        <div className="grid grid-cols-14 gap-1 text-center">
          <Key
            char="Shift"
            activeKey={activeKey}
            hint={hint}
            cls="col-span-2 text-left"
          />
          <Key char="Z" activeKey={activeKey} hint={hint} />
          <Key char="X" activeKey={activeKey} hint={hint} />
          <Key char="C" activeKey={activeKey} hint={hint} />
          <Key char="V" activeKey={activeKey} hint={hint} />
          <Key char="B" activeKey={activeKey} hint={hint} />
          <Key char="N" activeKey={activeKey} hint={hint} />
          <Key char="M" activeKey={activeKey} hint={hint} />
          <Key char="," activeKey={activeKey} hint={hint} />
          <Key char="." activeKey={activeKey} hint={hint} />
          <Key char="/" activeKey={activeKey} hint={hint} />
          <Key
            char="Shift"
            activeKey={activeKey}
            hint={hint}
            cls="col-span-2 text-right"
          />
        </div>

        {/* Пятый ряд */}
        <div className="grid grid-cols-15 gap-1 text-center">
          <Key
            char="Ctrl"
            activeKey={activeKey}
            hint={hint}
            cls="col-span-2 text-left"
          />
          <Key char="Win" activeKey={activeKey} hint={hint} />
          <Key char="Alt" activeKey={activeKey} hint={hint} />
          <Key char=" " activeKey={activeKey} hint={hint} cls="col-span-6" />
          <Key char="Alt" activeKey={activeKey} hint={hint} />
          <Key char="Fn" activeKey={activeKey} hint={hint} />
          <Key char="Opt" activeKey={activeKey} hint={hint} />
          <Key
            char="Ctrl"
            activeKey={activeKey}
            hint={hint}
            cls="col-span-2 text-right"
          />
        </div>
      </div>
      {hint && (
        <>
          <HintRightHand />
          <HintLeftHand />
        </>
      )}
    </div>
  );
}
