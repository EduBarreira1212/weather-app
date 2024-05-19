import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const getFiveDaysWeather = async (lat: number, lon: number) => {
    try {
        const response = await axios.get(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        return response.data;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

export default getFiveDaysWeather;