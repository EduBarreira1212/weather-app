import { useSelector } from "react-redux";
import { IState } from "../types/allTypes";
import styled from "styled-components";

const Div = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
    padding-bottom: 3vh;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const H3 = styled.h3`
    margin: 1vh 0;
`;

const P = styled.p`
    font-weight: bold;
    font-size: medium;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;
`;

const Span = styled.span`
    font-size: medium;
    font-weight: 500;
`;

const TodayWeather = () => {
    const { currentCity } = useSelector((state: IState) => state.weatherReducer);
    const { currentTodayWeather } = useSelector((state: IState) => state.weatherReducer);

    return(
        <Div>
            <H3>City: {currentCity?.name}</H3>
            <H3>State: {currentCity?.state}</H3>
            <H3>Country: {currentCity?.country}</H3>
            <P>Today</P>
                {currentTodayWeather ? (
                    <Div2>
                        <Span>{currentTodayWeather.main.temp} ºC</Span>
                        <Span>min: {currentTodayWeather.main.temp_min} ºC</Span>
                        <Span>max: {currentTodayWeather.main.temp_max} ºC</Span>
                        <Span>{currentTodayWeather.weather[0].main}</Span>
                    </Div2>
                    
                ) : (
                    <Span>No weather data available</Span>
                )}
        </Div>
    );
}

export default TodayWeather;