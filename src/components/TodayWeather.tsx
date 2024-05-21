import { useSelector } from "react-redux";
import { IState } from "../types/allTypes";

const TodayWeather = () => {
    const { currentCity } = useSelector((state: IState) => state.weatherReducer);
    const { currentWeather } = useSelector((state: IState) => state.weatherReducer);
    return(
        <div>
            <h3>City name: {currentCity?.name}</h3>
            <p>Today</p>
                {currentWeather && currentWeather.length > 0 ? (
                    <div>
                        <span>date: {currentWeather[0].date}</span>
                        <span>min: {currentWeather[0].temp_min} ºC</span>
                        <span>max: {currentWeather[0].temp_max} ºC</span>
                        <span>{currentWeather[0].main}</span>
                    </div>
                    
                ) : (
                    <span>No weather data available</span>
                )}
        </div>
    );
}

export default TodayWeather;