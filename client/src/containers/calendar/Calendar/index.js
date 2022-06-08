import React from "react";
import PropTypes from "prop-types";

import MonthDisplayer from "@C/calendar/MonthDisplayer";

import * as S from "./styles";

function Calendar() {
  return (
    <S.StyledCalendar>
      <MonthDisplayer year={2022} month={7} />
    </S.StyledCalendar>
  );
}
export default Calendar;

Calendar.propTypes = {};
