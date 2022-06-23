import React, { useRef, useEffect, useState } from "react";
import * as S from "./styles";

function Credit({ moveToNextMovement }) {
  const containerRef = useRef();
  const [clickedStatus, setClickedStatus] = useState(0);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [containerRef, clickedStatus]);

  function handleClick(e) {
    if (clickedStatus === 0) {
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.fontSize = `40px`;
      el.style.transform = `translate(-50%, -50%)`;
      el.style.color = "black";
      el.innerHTML = `The First Web Composition`;

      console.log(el);
      containerRef.current.appendChild(el);
    } else if (clickedStatus === 1) {
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.fontSize = `120px`;
      el.style.transform = `translate(-50%, -50%)`;
      el.style.color = "black";
      el.innerHTML = `<b>Calendar</b>`;

      containerRef.current.appendChild(el);
    } else if (clickedStatus === 2) {
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.fontSize = `30px`;
      el.style.transform = `translate(-50%, -50%)`;
      el.style.color = "black";
      el.innerHTML = `<i>Composed by Jeanyoon Choi</i>`;

      containerRef.current.appendChild(el);
    } else if (clickedStatus === 3) {
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      el.style.fontSize = `30px`;
      el.style.transform = `translate(-50%, -50%)`;
      el.style.color = "black";
      el.innerHTML = `The End`;

      containerRef.current.appendChild(el);
    }

    setClickedStatus((clicked) => clicked + 1);
  }

  useEffect(() => {
    if (clickedStatus > 3) {
      const timeout = setTimeout(() => {
        moveToNextMovement();
      }, 7000);
      return () => clearTimeout(timeout);
    }
  }, [clickedStatus]);

  return <S.StyledCredit ref={containerRef}></S.StyledCredit>;
}
export default Credit;
