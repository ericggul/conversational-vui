import React, { useMemo } from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

function Day({ date, monthLength }) {
  const display = useMemo(() => (date > 0 && date <= monthLength ? true : false), [date, monthLength]);
  return <S.CalendarDay>{display ? date : ""}</S.CalendarDay>;
}

function MonthDisplayer({ year, month }) {
  const monthLength = useMemo(() => new Date(year, month, 0).getDate(), [year, month]);
  const firstDay = useMemo(() => new Date(year, month - 1, 1).getDay(), [year, month]);

  console.log(new Date(2022, 5, 9).getDay());

  const rowNum = useMemo(() => Math.ceil((firstDay + monthLength) / 7), [monthLength, firstDay]);

  console.log(firstDay, monthLength);

  return (
    <S.StyledMonthDisplayer>
      {new Array(rowNum).fill(0).map((_, i) => (
        <S.CalendarRow key={i}>
          {new Array(7).fill(0).map((_, j) => (
            <Day date={7 * i + j + 1 - firstDay} monthLength={monthLength} key={j} />
          ))}
        </S.CalendarRow>
      ))}
    </S.StyledMonthDisplayer>
  );
}
export default MonthDisplayer;

MonthDisplayer.propTypes = {};
