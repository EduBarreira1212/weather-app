import { useSelector } from "react-redux";
import { IState } from "../types/allTypes";

const FiveDaysWeather = () => {

    const { currentWeather } = useSelector((state: IState) => state.weatherReducer);

    return(
        <div>
            <h4>Next 5 days</h4>
            {currentWeather ? (
                <div>
                    <div>
                        <span>date: {currentWeather[1].date}</span>
                        <span>min: {currentWeather[1].temp_min} ºC</span>
                        <span>max: {currentWeather[1].temp_max} ºC</span>
                        <span>{currentWeather[1].main}</span>
                    </div>
                    <div>
                        <span>date: {currentWeather[2].date}</span>
                        <span>min: {currentWeather[2].temp_min} ºC</span>
                        <span>max: {currentWeather[2].temp_max} ºC</span>
                        <span>{currentWeather[2].main}</span>
                    </div>
                    <div>
                        <span>date: {currentWeather[3].date}</span>
                        <span>min: {currentWeather[3].temp_min} ºC</span>
                        <span>max: {currentWeather[3].temp_max} ºC</span>
                        <span>{currentWeather[3].main}</span>
                    </div>
                    <div>
                        <span>date: {currentWeather[4].date}</span>
                        <span>min: {currentWeather[4].temp_min} ºC</span>
                        <span>max: {currentWeather[4].temp_max} ºC</span>
                        <span>{currentWeather[4].main}</span>
                    </div>
                    <div>
                        <span>date: {currentWeather[5].date}</span>
                        <span>min: {currentWeather[5].temp_min} ºC</span>
                        <span>max: {currentWeather[5].temp_max} ºC</span>
                        <span>{currentWeather[5].main}</span>
                    </div>
                </div>
            ) : (
                <span>No weather data available</span>
            )}
        </div>
    );
}

export default FiveDaysWeather;