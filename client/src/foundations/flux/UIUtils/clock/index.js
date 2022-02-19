import React, { useEffect, useState, useRef, useCallback } from "react";
import * as S from "./styles";
import { useSpring } from "@react-spring/three";
import { CONFIG } from "@F/flux/layouts/config";
export default function Clock({ current, clicked, realTime }) {
  let unitWidth = 12;
  let largeSize = { width: 0.25, height: 3 };
  let smallSize = { width: 0.125, height: 2 };
  let innerRadius = unitWidth / 2 - largeSize.height;
  let adjustedOuter = innerRadius + largeSize.height / 2;
  let adjustedInner = innerRadius + smallSize.height / 2;
  let adjustedText = innerRadius + 4;

  const [currentLayout, setCurrentLayout] = useState(current);
  const [realTimeMode, setRealTimeMode] = useState(realTime);

  return (
    <S.ClockElement>
      {[0, 1, 2, 3].map((e, i) => (
        <S.Large
          key={i + 20}
          top={unitWidth / 2 + adjustedOuter * Math.cos((e / 2) * Math.PI)}
          left={unitWidth / 2 - adjustedOuter * Math.sin((e / 2) * Math.PI)}
          angle={90 * e}
          onClick={() => {
            clicked(((e + 2) % 4) * 3);
            setCurrentLayout(((e + 2) % 4) * 3);
          }}
          current={currentLayout % 3 === 0 && (currentLayout / 3 + 2) % 4 === e}
        />
      ))}

      {[0, 1, 3].map((e, i) => (
        <S.Text
          key={i + 20}
          top={unitWidth / 2 + adjustedText * Math.cos((e / 2) * Math.PI)}
          left={unitWidth / 2 - adjustedText * Math.sin((e / 2) * Math.PI)}
          angle={90 * e}
          onClick={() => {
            clicked(((e + 2) % 4) * 3);
            setCurrentLayout(((e + 2) % 4) * 3);
          }}
        >
          {e === 1 ? "IX" : e === 0 ? "VI" : "III"}
        </S.Text>
      ))}

      {[1, 2, 4, 5, 7, 8, 10, 11].map((e, i) => (
        <S.Small
          key={i}
          top={unitWidth / 2 + adjustedInner * Math.cos((e / 6) * Math.PI)}
          left={unitWidth / 2 - adjustedInner * Math.sin((e / 6) * Math.PI)}
          angle={30 * e}
          onClick={() => {
            clicked((e + 6) % 12);
            setCurrentLayout((e + 6) % 12);
          }}
          current={(currentLayout + 6) % 12 === e}
        />
      ))}

      {/* <S.Hour
        top={
          unitWidth / 2 +
          (smallSize.height / 2) * Math.cos(((currentHour + 6) / 6) * Math.PI)
        }
        left={
          unitWidth / 2 -
          (smallSize.height / 2) * Math.sin(((currentHour + 6) / 6) * Math.PI)
        }
        angle={30 * (currentHour + 6)}
      />
      <S.Min
        top={
          unitWidth / 2 +
          (largeSize.height / 2) * Math.cos(((currentMin + 30) / 30) * Math.PI)
        }
        left={
          unitWidth / 2 -
          (largeSize.height / 2) * Math.sin(((currentMin + 30) / 30) * Math.PI)
        }
        angle={6 * (currentMin + 30)}
      /> */}
    </S.ClockElement>
  );
}
