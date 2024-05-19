import axios from "axios"

const apiKey = process.env.REACT_APP_API_KEY;
 
const getGeoCoding = async (city: string) => {
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`)
        return response.data;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

export default getGeoCoding;