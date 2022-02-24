import React, { useEffect } from "react";
import ChronologyContainer from "@/containers/chronology/Chronology";

function Chronology() {
  useEffect(() => {
    console.log("The Chronology of Values");
    console.log(
      "This series is supported by the <Unscene-Unseen> project 'Artifacts: The Creator's View'."
    );
    console.log(
      "The Chronology of Values is a web based 3D sculpture, made of 1 Contemporary Statue and 12 off-Contemporary Statues."
    );
    console.log(
      "Each of 12 Contemporary Statues represent both the hour of the clock and the specific chronological era in Humanity's History. It's layout is determined upon such considerations."
    );
    console.log(
      "A Contemporary Mode statue changes its shape in real time, in such a manner where it reaches one of the off-Contemporary shapes in each exact hour."
    );
    console.log(
      "This sculpture expresses concepts around Euclidean and Non-Euclidean domain, highlighting that our aesthetic value changes upon the time, but we seldomly rememer such a fact."
    );
    console.log("------------------------");
    console.log("Instructions on using Control Bar");
    console.log(
      "1. The control bar will automatically pop up once the page is rendered. To hide the control bar, click anywhere on the screen outside of the bar area. Click once more to view again."
    );
    console.log(
      "2. The control bar is made of three sections: Contemporary Mode modal, The Clock, and the Reset Perspective Position Button."
    );
    console.log(
      "2.1. Contemporary Mode modal: Use this modal to turn on and off the Contemporary Mode. The sculpture will alter in real-time inside the Contemporary Mode."
    );
    console.log(
      "2.2. The Clock: It displays the real-time inside the Contemporary Mode, and the statue's status inside the off-Contemporary Mode. Click on the Hour Hand of the Clock to change the status' shape inside the off-Contemporary Mode."
    );
    console.log(
      "2.3. Reset Perspective Button: When clicking the button, the angle and the depth of the camera will be resetted into the default position."
    );
  }, []);
  return <ChronologyContainer />;
}
export default Chronology;
