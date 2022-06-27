import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { WiDaySunny, WiRain, WiCloudy, WiFog, WiSnow, WiSleet, WiThunderstorm } from "react-icons/wi";
import { GiEarthAmerica } from "react-icons/gi";
import useSocketInput from "@U/hooks/causeAndEffect/useSocketInput";

const LONDON_POS = { lat: 51.5098, lon: -0.118 };

const getRandom = (a, b) => Math.random() * (b - a) + a;

function Earth() {
  return (
    <S.Earth>
      <GiEarthAmerica />
    </S.Earth>
  );
}

function Reception() {
  const WEATHER_CONDITIONS = {
    Thunderstorm: <WiThunderstorm />,
    Drizzle: <WiRain />,
    Rain: <WiRain />,
    Snow: <WiSnow />,
    Atmosphere: <WiFog />,
    Clear: <WiDaySunny />,
    Clouds: <WiCloudy />,
    Earth: <GiEarthAmerica />,
  };

  const triggered = useSocketInput(200);

  const [weatherTemp, setWeatherTemp] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [displayTemp, setDisplayTemp] = useState(15.34);
  const [displayCondition, setDisplayCondition] = useState("Earth");

  useEffect(() => {
    retriveWeatherData();
  }, []);

  async function retriveWeatherData() {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${LONDON_POS.lat}&lon=${LONDON_POS.lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`);
      setWeatherTemp(res.data.main.temp);
      setWeatherCondition(res.data.weather[0].main);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    setDisplayTemp(triggered ? getRandom(30, 40) : weatherTemp);
    setDisplayCondition(triggered ? "Earth" : weatherCondition);
  }, [weatherCondition, weatherTemp, triggered]);

  return (
    <S.StyledReception>
      <S.WeatherSection>
        <S.IconSection>{displayCondition && (displayCondition === "Earth" ? <Earth /> : WEATHER_CONDITIONS[displayCondition])}</S.IconSection>
        <S.InfoSection>
          <S.Temperature>
            {displayTemp && Math.floor(displayTemp)}
            <span>.{displayTemp && (displayTemp % 1).toFixed(2).split(".")[1]}&#8451;</span>
          </S.Temperature>
        </S.InfoSection>
      </S.WeatherSection>
      <S.NewsSection></S.NewsSection>
    </S.StyledReception>
  );
}
export default Reception;
