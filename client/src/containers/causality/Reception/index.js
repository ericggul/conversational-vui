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
  useEffect(() => {
    console.log(`Climate change comes with a sudden impulse.`);
    console.log(`The change is not linear: It is always unexpected and unpredictable, just as how we had experienced through Covid-19 in the past years.`);
    console.log(`This artwork, recpetion, normally displays today's weather conditions, as most of the buildings' and hotels' recpetions do so.`);
    console.log(
      `Once we enter these places, we naturally skip through receptions, as we exepct that temperature and weather conditions are just simulating the real world's condition: There is nothing special about it.`
    );
    console.log(
      `However, in this artwork, the temperature abnormally increases as external input signal is given, rejecting the pre-existing relationship between real world condition and simulated weather condition.`
    );
    console.log(`By doing so, it asks for the user's attention towards routinary everyday materials, alongside with the alertness to the climate change.`);
  }, []);

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
