import { useRef, useState } from "react";
import getGeoCoding from "../services/getGeoCoding";
import { setCityAction, setTodayWeatherAction, setWeatherAction } from "../redux/weatherReducer/actions";
import store from "../redux/store";
import getFiveDaysWeather from "../services/getFiveDaysWeather";
import styled from "styled-components";
import getTodayWeather from "../services/getTodayWeather";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Label = styled.label`
    font-size: medium;
`;

const StyledInput = styled.input`
    padding: 0.5vh 0.5vw;
    font-size: medium;
`;

const Button = styled.button`
    padding: 0.65vh 0.5vw;
    font-size: medium;
    cursor: pointer;
    background-color: #00BFA6;
    color: black;
    border: none;
    &:hover {
      background-color: #00897B;
    }
`;

const Input = () => {

    const cityRef = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<string | null>(null);

    const handleClick = async () => {
        const cityGeoCode = await getGeoCoding(cityRef.current?.value || "");
        if (cityGeoCode.length === 0) {
            setError("Insert a valid city");
            return;
        }
        store.dispatch(setCityAction(cityGeoCode));
        const todayWeather = await getTodayWeather(cityGeoCode[0].lat, cityGeoCode[0].lon);
        store.dispatch(setTodayWeatherAction(todayWeather!));
        const weather = await getFiveDaysWeather(cityGeoCode[0].lat, cityGeoCode[0].lon);
        store.dispatch(setWeatherAction(weather!));
    }
    return(
        <FormContainer>
            <Label>Insert the city,state and country</Label>
            <div>
                <StyledInput ref={cityRef} type='text' placeholder='Ex: Miami,FL,US'/>
                <Button onClick={handleClick}>Search</Button>
            </div>
            {error && <span>{error}</span>}
        </FormContainer>
    );
}

export default Input;