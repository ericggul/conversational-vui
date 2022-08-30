import React, { useEffect, useState } from "react";
import * as S from "./styles";

import axios from "axios";
import { WiDaySunny, WiRain, WiCloudy, WiFog, WiSnow, WiSleet, WiThunderstorm } from "react-icons/wi";

const LONDON_POS = { lat: 51.5098, lon: -0.118 };

function Weather() {
  const WEATHER_CONDITIONS = {
    Thunderstorm: <WiThunderstorm />,
    Drizzle: <WiRain />,
    Rain: <WiRain />,
    Snow: <WiSnow />,
    Atmosphere: <WiFog />,
    Clear: <WiDaySunny />,
    Clouds: <WiCloudy />,
  };

  const [weatherTemp, setWeatherTemp] = useState(15.34);
  const [weatherCondition, setWeatherCondition] = useState("snow");
  const [tmrwWeatherTemp, setTmrwWeatherTemp] = useState(15.34);
  const [tmrwWeatherCondition, setTmrwWeatherCondition] = useState("snow");

  useEffect(() => {
    retriveWeatherData();
  }, []);

  async function retriveWeatherData() {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${LONDON_POS.lat}&lon=${LONDON_POS.lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`);

      setWeatherTemp(res.data.main.temp);
      setWeatherCondition(res.data.weather[0].main);

      const res2 = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${LONDON_POS.lat}&lon=${LONDON_POS.lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`);
      setTmrwWeatherTemp(res2.data.list[8].main.temp);
      setTmrwWeatherCondition(res2.data.list[8].weather[0].main);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <S.StyledWeather>
      <S.SingleWeather>
        <S.Header>Today</S.Header>
        <S.IconSection>{weatherCondition && WEATHER_CONDITIONS[weatherCondition]}</S.IconSection>
        <S.InfoSection>
          <S.Temperature>
            {weatherTemp && Math.floor(weatherTemp)}
            <span>.{weatherTemp && (weatherTemp % 1).toFixed(2).split(".")[1]}&#8451;</span>
          </S.Temperature>
        </S.InfoSection>
      </S.SingleWeather>
      <S.SingleWeather>
        <S.Header>Tomorrow</S.Header>
        <S.IconSection>{tmrwWeatherCondition && WEATHER_CONDITIONS[tmrwWeatherCondition]}</S.IconSection>
        <S.InfoSection>
          <S.Temperature>
            {tmrwWeatherTemp && Math.floor(tmrwWeatherTemp)}
            <span>.{tmrwWeatherTemp && (tmrwWeatherTemp % 1).toFixed(2).split(".")[1]}&#8451;</span>
          </S.Temperature>
        </S.InfoSection>
      </S.SingleWeather>
    </S.StyledWeather>
  );
}
export default Weather;
