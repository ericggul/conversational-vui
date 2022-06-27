import { useState, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

export default function useSocketInput(triggerTimeout = 100) {
  const [triggered, setTriggered] = useState(false);
  const socket = useMemo(() => io({ transports: ["websocket"] }), []);

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
    socket.on("input 1", handleSocketInput);
    return () => {
      socket.off("input 1", handleSocketInput);
    };
  }, []);

  return triggered;
}
