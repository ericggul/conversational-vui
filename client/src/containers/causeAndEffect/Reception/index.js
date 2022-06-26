import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { WiDaySunny, WiRain, WiCloudy, WiFog, WiSnow, WiSleet, WiThunderstorm } from "react-icons/wi";
import { OPENWEATHER_API_KEY } from "@ST/apikey";

const LONDON_POS = { lat: 51.5098, lon: -0.118 };

function Reception() {
  const WEATHER_CONDITIONS = [
    { Thunderstorm: <WiThunderstorm /> },
    { Drizzle: <WiRain /> },
    { Rain: <WiRain /> },
    { Snow: <WiSnow /> },
    { Atmosphere: <WiFog /> },
    { Clear: <WiDaySunny /> },
    { Clouds: <WiCloudy /> },
    // { "Drizzle" : WiSleet },
    // { "Rain" : WiRain },
    // { "Snow" : WiSnow },
    // { "Atmosphere" : WiFog },
    // { "Clear" : WiDaySunny },
    // { "Clouds" : WiCloudy }
  ];

  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    retriveWeatherData();
  }, []);

  async function retriveWeatherData() {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${LONDON_POS.lat}&lon=${LONDON_POS.lon}&appid=${OPENWEATHER_API_KEY}&units=metric`);
      setWeatherData(res.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <S.StyledReception>
      <S.WeatherSection>
        <S.IconSection>
          {weatherData && WEATHER_CONDITIONS[weatherData.weather[0].main]}
          <WiSleet />
        </S.IconSection>

        <S.InfoSection>
          <S.Temperature>
            {weatherData && Math.floor(weatherData.main.temp)}
            <span>.{weatherData && (weatherData.main.temp % 1).toFixed(2).split(".")[1]}&#8451;</span>
          </S.Temperature>
        </S.InfoSection>
      </S.WeatherSection>
    </S.StyledReception>
  );
}
export default Reception;
