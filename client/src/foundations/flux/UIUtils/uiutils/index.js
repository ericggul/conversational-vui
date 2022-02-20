import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

import Clock from "@F/flux/UIUtils/clock";

export default function UIUtils({
  current,
  clicked,
  resetPos,
  realTimeMode,
  alterTimeMode,
  layout,
  progress,
}) {
  const [showUtils, setShowUtils] = useState(false);
  const containerRef = useRef(null);

  const utilToggle = (e) => {
    if (!containerRef.current || !containerRef.current.contains(e.target)) {
      setShowUtils((util) => !util);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowUtils(true);
    }, 3000);
    document.addEventListener("click", utilToggle);
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", utilToggle);
    };
  }, []);

  return (
    <>
      {showUtils && (
        <S.UtilsContainer ref={containerRef}>
          <S.RealTimeModal>
            Contemporary Mode
            <S.Box>
              <S.El
                selected={realTimeMode}
                onClick={function (e) {
                  alterTimeMode(true);
                  e.stopPropagation();
                }}
              >
                {"On"}
              </S.El>
              <S.El
                selected={!realTimeMode}
                onClick={function (e) {
                  alterTimeMode(false);
                  e.stopPropagation();
                }}
              >
                {"Off"}
              </S.El>
            </S.Box>
          </S.RealTimeModal>

          <Clock
            current={current}
            clicked={clicked}
            realTime={realTimeMode}
            layout={layout}
            progress={progress}
          />
          <S.ResetPosition
            onClick={(e) => {
              e.preventDefault();
              resetPos();
            }}
          >
            Reset Perspective Position
          </S.ResetPosition>
        </S.UtilsContainer>
      )}
    </>
  );
}
