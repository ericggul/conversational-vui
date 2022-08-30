import React, { useEffect, useState } from "react";
import * as S from "./styles";

import TSLA from "@ST/data/TSLA.csv";
import Papa from "papaparse";

function Tesla() {
  useEffect(() => {
    parser();
  }, []);

  const [data, setData] = useState(null);

  const parser = () => {
    Papa.parse(TSLA, {
      download: true,
      header: false,
      complete: function (results) {
        let res = results.data;
        res.shift();
        setData(res);
      },
    });
  };

  console.log(data);
  return (
    <S.StyledTesla>
      {data &&
        data.map((datum, i) => (
          <S.Column
            key={i}
            style={{
              width: `1px`,
              left: `${(2000 * i) / data.length}px`,
              height: `${(Math.abs(parseFloat(datum[2]) - parseFloat(datum[3])) / 400) * 1300}px`,
              top: `${((400 - parseFloat(datum[2])) / 400) * 1300}px`,
            }}
          />
        ))}
    </S.StyledTesla>
  );
}
export default Tesla;
