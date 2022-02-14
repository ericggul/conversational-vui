import React, { useEffect } from "react";
import FluxContainer from "@/containers/flux/Flux";

function Flux() {
  useEffect(() => {
    console.log("Hello there, thanks for visiting this webpage!");
    console.log(
      `I am so excited to be part of the Meta's FFE team as an intern.`
    );
    console.log(
      `This journey will be both exciting and challenging to upgrade my frontend development skills.`
    );
    console.log(
      `Please let me know if you have any additional questions about myself. I will be happy to answer you directly.`
    );
    console.log(`Thank you very much!`);
  }, []);
  return <FluxContainer />;
}
export default Flux;
