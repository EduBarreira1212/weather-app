import axios from "axios"
import { IFilteredTodayApiResponse, ITodayWeatherApiResponse } from "../types/allTypes";

const apiKey = process.env.REACT_APP_API_KEY;

const filterData = (data: ITodayWeatherApiResponse): IFilteredTodayApiResponse=> {
    const {weather, main} = data;
    return {weather, main}
}

const getTodayWeather = async (lat: number, lon: number) => {
    try {
        const response = await axios.get<ITodayWeatherApiResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

        const filteredResponse = filterData(response.data);

        return filteredResponse;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

export default getTodayWeather;