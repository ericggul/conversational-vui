import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function SingleDate({ date, everythingGetEnlarge }) {
  const reverse = useMemo(() => Math.random() < 0.5, []);
  const animationDelay = useMemo(() => getRandom(5, getRandom(30, 60)), []);

  const [enableAnimation, setEnableAnimation] = useState(false);

  useEffect(() => {
    if (everythingGetEnlarge) {
      setEnableAnimation(true);
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
  const color = useMemo(() => `rgb(${getRandom(200, 256)}, 0, 0)`, []);

  const [enableEnlarge, setEnableEnlarge] = useState(true);
  const [changeColorOnly, setChangeColorOnly] = useState(false);

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
      if (mouseEntered > 15) {
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

function MonthDisplayer({ year, month }) {
  const [firstDay, setFirstDay] = useState(new Date(year, month - 1, 1).getDay());
  const monthLength = useMemo(() => new Date(year, month, 0).getDate(), [year, month]) + 2;
  const rowNum = useMemo(() => Math.ceil((firstDay + monthLength) / 7), [monthLength, firstDay]);

  const [everythingGetEnlarge, setEverythingGetEnlarge] = useState(false);

  useEffect(() => {
    setFirstDay(new Date(year, month - 1, 1).getDay());
    // const interval = setInterval(() => {
    //   setFirstDay((day) => (day + 1) % 7);
    // }, 4000);
    // return () => clearTimeout(interval);
  }, [year, month]);

  return (
    <S.StyledMonthDisplayer>
      {new Array(rowNum).fill(0).map((_, i) => (
        <Row key={i} i={i} firstDay={firstDay} monthLength={monthLength} everythingGetEnlarge={everythingGetEnlarge} triggerGetEnlarge={() => setEverythingGetEnlarge(true)} />
      ))}
    </S.StyledMonthDisplayer>
  );
}
export default MonthDisplayer;

MonthDisplayer.propTypes = {};
