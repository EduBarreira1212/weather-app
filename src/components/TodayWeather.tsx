import { useSelector } from "react-redux";
import { IState } from "../types/allTypes";

const TodayWeather = () => {
    const { currentCity } = useSelector((state: IState) => state.weatherReducer);
    return(
        <div>
            <h3>City name: {currentCity?.name}</h3>
            <p>Today</p>
            <div>
                <span>date</span>
                <span>min</span>
                <span>max</span>
                <span>description</span>
            </div>
        </div>
    );
}

export default TodayWeather;