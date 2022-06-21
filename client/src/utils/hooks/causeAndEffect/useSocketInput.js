import { useState, useEffect, useMemo } from "react";

export default function useSocketInput(triggerTimeout = 100) {
  const [triggered, setTriggered] = useState(false);
  const socket = useMemo(() => io("http://localhost:8000"), []);

  useEffect(() => {
    if (triggered) {
      const timeout = setTimeout(() => {
        setTriggered(false);
      }, triggerTimeout);
      return () => clearTimeout(timeout);
    }
  }, [triggered]);

  const handleSocketInput = () => {
    setTriggered(true);
  };

  useEffect(() => {
    socket.on("input", handleSocketInput);
    return () => {
      socket.off("input", handleSocketInput);
    };
  }, []);

  return triggered;
}
