import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

function Suspense() {
  return <S.StyledSuspense>Loading... Please Wait</S.StyledSuspense>;
}
export default Suspense;

Suspense.propTypes = {};
