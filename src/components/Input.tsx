import { useRef } from "react";
import getGeoCoding from "../services/getGeoCoding";
import { setCityAction, setWeatherAction } from "../redux/weatherReducer/actions";
import store from "../redux/store";
import getFiveDaysWeather from "../services/getFiveDaysWeather";

const Input = () => {

    const cityRef = useRef<HTMLInputElement>(null)

    const handleClick = async () => {
        const cityGeoCode = await getGeoCoding(cityRef.current?.value || "");
        console.log(cityGeoCode[0]);
        store.dispatch(setCityAction(cityGeoCode));
        const weather = await getFiveDaysWeather(cityGeoCode[0].lat, cityGeoCode[0].lon);
        console.log(weather);
        store.dispatch(setWeatherAction(weather!));
    }
    return(
        <div>
            <label>Insert a city</label>
            <input ref={cityRef} type='text' placeholder='Ex: London'/>
            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default Input;