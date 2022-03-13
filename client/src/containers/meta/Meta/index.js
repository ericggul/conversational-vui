import React, { useRef, useMemo } from "react";

import Sector1 from "@C/meta/Sector1";
import Sector2 from "@C/meta/Sector2";
import Sector3 from "@C/meta/Sector3";
import Sector4 from "@C/meta/Sector4";
import * as S from "./styles";

function Meta() {
  return (
    <S.StyledMeta>
      <S.Sector>
        <Sector1 />
      </S.Sector>
      <S.Sector>
        <Sector2 />
      </S.Sector>
      <S.Sector>
        <Sector3 />
      </S.Sector>
      <S.Sector>
        <Sector4 />
      </S.Sector>
    </S.StyledMeta>
  );
}
export default Meta;

Meta.propTypes = {};
