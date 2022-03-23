import { useEffect, useState } from "react";
import { debounce } from "timer";

export function useMousePos() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (ev) => {
    setMousePos({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    const listener = window.addEventListener("mousemove", debounce(handleMouseMove));
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
    window.addEventListener("touchmove", debounce(handleTouchMove));
    return () => window.removeEventListener("touchmove", debounce(handleTouchMove));
  }, []);

  return touchPos;
}
