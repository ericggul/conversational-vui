import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const getRandom = (a, b) => Math.random() * (b - a) + a;

function DayFormatter({ date, UIVersion, handleSpecialClick }) {
  const specialDate = useMemo(() => date === 32 || date === 33, [date]);

  //level 0, 1, 2
  const [mouseEntered, setMouseEntered] = useState(0);

  useEffect(() => {
    if (mouseEntered % 2 === 1) {
      const timeout = setTimeout(() => {
        setMouseEntered((e) => e + 1);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [mouseEntered]);

  const handleClick = () => {
    if (specialDate) {
      handleSpecialClick();
    }
  };

  return (
    <>
      <S.Day specialHover={specialDate} UIVersion={UIVersion} onClick={handleClick} mouseEntered={mouseEntered} onMouseEnter={() => setMouseEntered((e) => e + 1)}>
        {date}
      </S.Day>
    </>
  );
}

function Day({ week, day, firstDayOfMonth, monthLength, UIVersion, handleSpecialClick }) {
  const date = useMemo(() => 7 * week + day + 1 - firstDayOfMonth, [week, day, firstDayOfMonth]);
  const display = useMemo(() => (date > 0 && date <= monthLength ? true : false), [date, monthLength]);
  return <S.CalendarDay>{display ? <DayFormatter date={date} UIVersion={UIVersion} handleSpecialClick={handleSpecialClick} /> : ""}</S.CalendarDay>;
}

function MonthDisplayer({ year, month, moveToNextMovement }) {
  const [firstDay, setFirstDay] = useState(new Date(year, month - 1, 1).getDay());
  const monthLength = useMemo(() => new Date(year, month, 0).getDate(), [year, month]) + 2;
  const rowNum = useMemo(() => Math.ceil((firstDay + monthLength) / 7), [monthLength, firstDay]);

  useEffect(() => {
    setFirstDay(new Date(year, month - 1, 1).getDay());
  }, [year, month]);

  const [UIVersion, setUIVersion] = useState(0);

  const handleUIVersionUpdate = () => {
    if (UIVersion < 9) {
      setUIVersion((e) => e + 1);
      return;
    }

    setTimeout(() => {
      moveToNextMovement();
    }, 1000);
  };

  return (
    <S.WholeContainer>
      <S.StyledMonthDisplayer>
        {new Array(rowNum).fill(0).map((_, i) => (
          <S.CalendarRow key={i}>
            {new Array(7).fill(0).map((_, j) => (
              <Day week={i} day={j} firstDayOfMonth={firstDay} monthLength={monthLength} key={j} UIVersion={UIVersion} handleSpecialClick={handleUIVersionUpdate} />
            ))}
          </S.CalendarRow>
        ))}
      </S.StyledMonthDisplayer>
    </S.WholeContainer>
  );
}
export default MonthDisplayer;

MonthDisplayer.propTypes = {};
