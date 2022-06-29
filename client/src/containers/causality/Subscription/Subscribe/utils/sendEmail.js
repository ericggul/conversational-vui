import style from "./Email.module.scss";
import { useState, useCallback, useEffect } from "react";
import emailjs from "emailjs-com";

const TEXT = `
당신은 문제의 의미를 '잘못' 파악했습니다.

퀴즈의 우승자에게 갈 상금 일백만원은 다른 우승자에게 주어집니다.

당신의 멍청함에 풍요로움이 깃들기를 기원하며

`;

const textParser = (text, repeat) => {
  var output = text;

  for (let i = 0; i < repeat; i++) {
    console.log(output);

    const parse = Math.floor(Math.random() * output.length);

    const output2 = output.substring(parse, output.length) + output.substring(0, parse);
    output = output2;
  }
  console.log(output);
};

function Email() {
  textParser(TEXT, 500);

  useEffect(() => {
    var templateParams = {
      to_email: "ericggul@gmail.com",
      artwork_name: 'henry',
      image: 
    };

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, "template_gcopoum", templateParams, process.env.REACT_APP_EMAILJS_PUBLIC_KEY).then((result) => {
      console.log(result.text);
    });
  }, []);

  return <div className={style.container}></div>;
}
