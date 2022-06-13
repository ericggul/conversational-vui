import React, { useEffect, useMemo, useState, useRef } from "react";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

//random date generation from 1st of Jaunary to 31st of December
function getRandomDate() {
  const month = getRandom(1, 12);
  const day = getRandom(1, 31);
  return new Date(2022, month - 1, day);
}

function SingleDate({ date, everythingGetEnlarge }) {
  const reverse = useMemo(() => Math.random() < 0.5, []);
  const animationDelay = useMemo(() => getRandom(0, getRandom(30, 60)), []);

  const [enableAnimation, setEnableAnimation] = useState(false);

  useEffect(() => {
    if (everythingGetEnlarge) {
      let timeout = setTimeout(() => {
        setEnableAnimation(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [everythingGetEnlarge]);

  return (
    <S.Date reverse={reverse} delay={animationDelay} enableAnimation={enableAnimation}>
      {date}
    </S.Date>
  );
}

function DayFormatter({ date, triggerGetEnlarge, everythingGetEnlarge }) {
  //level 0, 1, 2
  const [mouseEntered, setMouseEntered] = useState(0);
  const color = useMemo(() => (Math.random() < 0.5 ? "red" : "blue"), []);

  const [enableEnlarge, setEnableEnlarge] = useState(true);

  useEffect(() => {
    if (everythingGetEnlarge) {
      setEnableEnlarge(false);
    }
  }, [everythingGetEnlarge]);

  useEffect(() => {
    if (enableEnlarge) {
      if (mouseEntered % 2 === 1) {
        const timeout = setTimeout(() => {
          setMouseEntered((e) => e + 1);
        }, 2000);
        return () => clearTimeout(timeout);
      }
      if (mouseEntered > 17) {
        console.log("trigger!");
        triggerGetEnlarge();
      }
    }
  }, [mouseEntered, enableEnlarge]);

  return (
    <S.DayFormatter mouseEntered={mouseEntered} color={color} onMouseLeave={() => enableEnlarge && setMouseEntered((e) => e + 1)} enableEnlarge={enableEnlarge}>
      {new Array(9).fill(0).map((_, i) => (
        <SingleDate key={i} date={date} everythingGetEnlarge={everythingGetEnlarge} />
      ))}
    </S.DayFormatter>
  );
}

function Day({ week, day, firstDayOfMonth, monthLength, everythingGetEnlarge, triggerGetEnlarge }) {
  const date = useMemo(() => 7 * week + day + 1 - firstDayOfMonth, [week, day, firstDayOfMonth]);
  const display = useMemo(() => (date > 0 && date <= monthLength ? true : false), [date, monthLength]);
  return <S.CalendarDay>{display ? <DayFormatter date={date} everythingGetEnlarge={everythingGetEnlarge} triggerGetEnlarge={triggerGetEnlarge} /> : ""}</S.CalendarDay>;
}

function Row({ i, firstDay, monthLength, everythingGetEnlarge, triggerGetEnlarge }) {
  //animation horizontalragne in x axis
  const horizontalRange = useMemo(() => getRandom(-10, 10), [i]);
  const [enableAnimation, setEnableAnimation] = useState(false);

  useEffect(() => {
    if (everythingGetEnlarge) {
      setEnableAnimation(true);
    }
  }, [everythingGetEnlarge]);

  return (
    <S.CalendarRow key={i} idx={i} range={horizontalRange} enableAnimation={enableAnimation}>
      {new Array(7).fill(0).map((_, j) => (
        <Day week={i} day={j} firstDayOfMonth={firstDay} monthLength={monthLength} everythingGetEnlarge={everythingGetEnlarge} triggerGetEnlarge={triggerGetEnlarge} key={j} />
      ))}
    </S.CalendarRow>
  );
}

function MonthDisplayer({ year, month, moveToNextMovement }) {
  const [firstDay, setFirstDay] = useState(new Date(year, month - 1, 1).getDay());
  const monthLength = useMemo(() => new Date(year, month, 0).getDate(), [year, month]) + 2;
  const rowNum = useMemo(() => Math.ceil((firstDay + monthLength) / 7), [monthLength, firstDay]);

  const [everythingGetEnlarge, setEverythingGetEnlarge] = useState(false);

  const displayerRef = useRef();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (everythingGetEnlarge && displayerRef && displayerRef.current) {
      document.addEventListener("click", addNumbers);
      return () => document.removeEventListener("click", addNumbers);
    }
  }, [everythingGetEnlarge, displayerRef]);

  function addNumbers(e) {
    let el = document.createElement("div");
    el.className = "number";
    el.style = `
      position: absolute; 
      top: ${e.clientY}px; 
      left: ${e.clientX}px; 
      font-size: ${getRandom(1, 3)}vw; 
      transform: translate(-50%, -50%);
      color: black;
      text-shadow: 0 0 .3vw white;
    `;
    el.innerHTML = getRandomDate();
    displayerRef.current.appendChild(el);
    setOpacity((op) => op - (1.01 - op) * 0.3);
  }

  useEffect(() => {
    if (opacity < 0.03) {
      moveToNextMovement();
    }
  }, [opacity]);

  useEffect(() => {
    setFirstDay(new Date(year, month - 1, 1).getDay());
  }, [year, month]);

  return (
    <S.Background everythingGetEnlarge={everythingGetEnlarge}>
      <S.Contents everythingGetEnlarge={everythingGetEnlarge} opacity={opacity} ref={displayerRef}>
        {new Array(rowNum).fill(0).map((_, i) => (
          <Row key={i} i={i} firstDay={firstDay} monthLength={monthLength} everythingGetEnlarge={everythingGetEnlarge} triggerGetEnlarge={() => setEverythingGetEnlarge(true)} />
        ))}
      </S.Contents>
    </S.Background>
  );
}
export default MonthDisplayer;

MonthDisplayer.propTypes = {};
