import { useState, useEffect, useMemo } from "react";
import { io } from "socket.io-client";

export default function useSocketInputRecord() {
  const [record, setRecord] = useState(null);
  const socket = useMemo(() => io({ transports: ["websocket"] }), []);

  const handleSocketInput = (data) => {
    data ? setRecord({ ...data, time: Date.now() }) : setRecord(null);
  };

  useEffect(() => {
    socket.on("input 2", handleSocketInput);
    return () => {
      socket.off("input 2", handleSocketInput);
    };
  }, []);

  return record;
}
