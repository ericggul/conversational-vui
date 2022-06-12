import React, { useState } from "react";
import PropTypes from "prop-types";

import ZeroMovement from "@/containers/calendar/ZeroMovement";
import FirstMovement from "@/containers/calendar/FirstMovement";

import * as S from "./styles";

function Calendar() {
  const [movement, setMovement] = useState(0);

  const [year, setYear] = useState(2022);
  const [month, setMonth] = useState(6);

  const handleMonthChange = (increase) => {
    if (increase) {
      if (month === 12) {
        setMonth(1);
        setYear((yr) => yr + 1);
      } else {
        setMonth((m) => m + 1);
      }
    } else {
      if (month === 1) {
        setMonth(12);
        setYear((yr) => yr - 1);
      } else {
        setMonth((m) => m - 1);
      }
    }
  };

  const moveToNextMovement = () => {
    setMovement((mv) => mv + 1);
  };

  return (
    <S.StyledCalendar>
      {movement === 0 && <ZeroMovement year={year} month={month} handleMonthChange={handleMonthChange} moveToNextMovement={moveToNextMovement} />}
      {movement === 1 && <FirstMovement year={year} month={month} />}
    </S.StyledCalendar>
  );
}
export default Calendar;

Calendar.propTypes = {};
