"use client";
import { useEffect, useRef, useState } from "react";
import { Key } from "./Key";
import { useHotkeys } from "react-hotkeys-hook";
import SwitchRgb from "./SwitchRgb";
import SwitchSound from "./SwitchSound";

export default function Keyboard() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [rgb, setRgb] = useState(false);
  const [sound, setSound] = useState(false);

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
    <div>
      <div className="flex gap-4">
        <SwitchRgb rgb={rgb} setRgb={setRgb} />
        <SwitchSound sound={sound} setSound={setSound} />
      </div>
      <div className={`space-y-1 p-7 ${rgb ? "keyboard" : ""}`}>
        {/* Первый ряд */}
        <div className="grid grid-cols-15 gap-1 text-center">
          <Key char="~" activeKey={activeKey} />
          <Key char="1" activeKey={activeKey} />
          <Key char="2" activeKey={activeKey} />
          <Key char="3" activeKey={activeKey} />
          <Key char="4" activeKey={activeKey} />
          <Key char="5" activeKey={activeKey} />
          <Key char="6" activeKey={activeKey} />
          <Key char="7" activeKey={activeKey} />
          <Key char="8" activeKey={activeKey} />
          <Key char="9" activeKey={activeKey} />
          <Key char="0" activeKey={activeKey} />
          <Key char="-" activeKey={activeKey} />
          <Key char="=/+" activeKey={activeKey} />
          <Key
            char="backspace"
            activeKey={activeKey}
            cls="col-span-2 text-right"
          />
        </div>

        {/* Второй ряд */}
        <div className="grid grid-cols-16 gap-1 text-center">
          <Key char="tab" activeKey={activeKey} cls="col-span-2 text-left" />
          <Key char="q" activeKey={activeKey} />
          <Key char="w" activeKey={activeKey} />
          <Key char="e" activeKey={activeKey} />
          <Key char="r" activeKey={activeKey} />
          <Key char="t" activeKey={activeKey} />
          <Key char="y" activeKey={activeKey} />
          <Key char="u" activeKey={activeKey} />
          <Key char="i" activeKey={activeKey} />
          <Key char="o" activeKey={activeKey} />
          <Key char="p" activeKey={activeKey} />
          <Key char="[" activeKey={activeKey} />
          <Key char="]" activeKey={activeKey} />
          <Key char="\" activeKey={activeKey} cls="col-span-2" />
        </div>

        {/* Третий ряд */}
        <div className="grid grid-cols-15 gap-1 text-center">
          <Key
            char="Caps lock"
            activeKey={activeKey}
            cls="col-span-2 text-left"
          />
          <Key char="a" activeKey={activeKey} />
          <Key char="s" activeKey={activeKey} />
          <Key char="d" activeKey={activeKey} />
          <Key char="f" activeKey={activeKey} />
          <Key char="g" activeKey={activeKey} />
          <Key char="h" activeKey={activeKey} />
          <Key char="j" activeKey={activeKey} />
          <Key char="k" activeKey={activeKey} />
          <Key char="l" activeKey={activeKey} />
          <Key char=";" activeKey={activeKey} />
          <Key char="'" activeKey={activeKey} />
          <Key char="Enter" activeKey={activeKey} cls="col-span-2" />
        </div>

        {/* Четвертый ряд */}
        <div className="grid grid-cols-14 gap-1 text-center">
          <Key char="Shift" activeKey={activeKey} cls="col-span-2 text-left" />
          <Key char="z" activeKey={activeKey} />
          <Key char="x" activeKey={activeKey} />
          <Key char="c" activeKey={activeKey} />
          <Key char="v" activeKey={activeKey} />
          <Key char="b" activeKey={activeKey} />
          <Key char="n" activeKey={activeKey} />
          <Key char="m" activeKey={activeKey} />
          <Key char="," activeKey={activeKey} />
          <Key char="." activeKey={activeKey} />
          <Key char="/" activeKey={activeKey} />
          <Key char="Shift" activeKey={activeKey} cls="col-span-2 text-right" />
        </div>

        {/* Пятый ряд */}
        <div className="grid grid-cols-15 gap-1 text-center">
          <Key char="Ctrl" activeKey={activeKey} cls="col-span-2 text-left" />
          <Key char="Win" activeKey={activeKey} />
          <Key char="Alt" activeKey={activeKey} />
          <Key char="Space" activeKey={activeKey} cls="col-span-6" />
          <Key char="Alt" activeKey={activeKey} />
          <Key char="Fn" activeKey={activeKey} />
          <Key char="Opt" activeKey={activeKey} />
          <Key char="Ctrl" activeKey={activeKey} cls="col-span-2 text-right" />
        </div>
      </div>
    </div>
  );
}
