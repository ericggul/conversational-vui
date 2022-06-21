import { useState, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

export default function useSocketInputRecord() {
  const [record, setRecord] = useState(null);
  const socket = useMemo(() => io("http://localhost:8000"), []);

  const handleSocketInput = (msg) => {
    msg ? setRecord({ msg, time: Date.now() }) : setRecord(null);
  };

  useEffect(() => {
    socket.on("input", handleSocketInput);
    return () => {
      socket.off("input", handleSocketInput);
    };
  }, []);

  return record;
}
