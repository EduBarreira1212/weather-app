import { useSelector } from "react-redux";
import { IState } from "../types/allTypes";
import { styled } from "styled-components";
import weatherIcons from "./weatherIcons";

const Div = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
    padding: 3vh 0;
    border-radius: 8px;
    box-shadow: 5px 5px 8px black;
`;

const H4 = styled.h4`
    margin-top: 0;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 3vw;
    margin: 1.5vh 0;
`;

const Span = styled.span`
    font-size: medium;
    font-weight: 500;
`;

const FiveDaysWeather = () => {

    const { currentWeather } = useSelector((state: IState) => state.weatherReducer);

    const date = new Date();

    return(
        <>
            {currentWeather ? (
                <Div>
                    <H4>Next days</H4>
                    {currentWeather
                    .filter(weather => weather.date !== date.toLocaleDateString("en-US", {weekday: "long"}))
                    .map((weather, index) => (
                    <Div2 key={index}>
                        <Span>{weather.date}</Span>
                        <Span>{weather.temp_max.toFixed(1)} ºC  /  {weather.temp_min.toFixed(1)} ºC</Span>
                        <Span>{weatherIcons[weather.main]}</Span>
                    </Div2>
                ))}
                </Div>
            ) : (
                <></>
            )}
        </>
    );
}

export default FiveDaysWeather;