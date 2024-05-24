import axios from "axios";
import { IApiResponse, IFilteredForecast, IForecast } from "../types/allTypes";

const apiKey = process.env.REACT_APP_API_KEY;

const getFiveDaysWeather = async (lat: number, lon: number) => {
    try {
        const response = await axios.get<IApiResponse>(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        
        const forecasts: IForecast[] = response.data.list;

        const dailyForecastMap = new Map<string, IFilteredForecast>();

        forecasts.forEach((forecast: IForecast) => {
            const dateCity = new Date(forecast.dt_txt);
            const date = forecast.dt_txt.split(' ')[0];
            

            if (dailyForecastMap.has(date)) {
                const existingForecast = dailyForecastMap.get(date)!;
                existingForecast.temp_min = Math.min(existingForecast.temp_min, forecast.main.temp_min);
                existingForecast.temp_max = Math.max(existingForecast.temp_max, forecast.main.temp_max);
            } else {
                dailyForecastMap.set(date, {
                    date: dateCity.toLocaleDateString("en-US", {weekday: "long"}),
                    temp_min: forecast.main.temp_min,
                    temp_max: forecast.main.temp_max,
                    main: forecast.weather[0].main
                });
            }
        });

        const filteredForecasts = Array.from(dailyForecastMap.values());

        return filteredForecasts;

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

export default getFiveDaysWeather;