import React, { useEffect } from "react";
import FluxContainer from "@/containers/flux/Flux";

function Flux() {
  useEffect(() => {
    console.log("etet");
  }, []);
  return <FluxContainer />;
}
export default Flux;
