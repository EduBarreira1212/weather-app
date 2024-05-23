import { useRef } from "react";
import getGeoCoding from "../services/getGeoCoding";
import { setCityAction, setWeatherAction } from "../redux/weatherReducer/actions";
import store from "../redux/store";
import getFiveDaysWeather from "../services/getFiveDaysWeather";
import styled from "styled-components";

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
    border: none;
    &:hover {
      background-color: #00897B;
    }
`;

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
        <FormContainer>
            <Label>Insert a city</Label>
            <div>
                <StyledInput ref={cityRef} type='text' placeholder='Ex: London'/>
                <Button onClick={handleClick}>Search</Button>
            </div>
        </FormContainer>
    );
}

export default Input;