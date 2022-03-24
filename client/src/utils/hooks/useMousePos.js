import { useEffect, useState } from "react";
import { debounce } from "@U/functions/timer";

export function useMousePos() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (ev) => {
    setMousePos({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    const listener = window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", listener);
  }, []);

  return mousePos;
}

export function useTouchPos() {
  const [touchPos, setTouchPos] = useState({ x: 0, y: 0 });

  const handleTouchMove = (ev) => {
    setTouchPos({ x: ev.changedTouches[0].clientX, y: ev.changedTouches[0].clientY });
  };

  useEffect(() => {
    const listener = window.addEventListener("touchmove", handleTouchMove);
    return () => window.removeEventListener("touchmove", listener);
  }, []);

  return touchPos;
}

export function useMouseOrTouchPos() {
  const mousePos = useMousePos();
  const touchPos = useTouchPos();

  return mousePos.x === 0 && mousePos.y === 0 ? touchPos : mousePos;
}
