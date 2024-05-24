import { useSelector } from "react-redux";
import { IState } from "../types/allTypes";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    const { currentWeather } = useSelector((state: IState) => state.weatherReducer);
    return(
        <Div>
            <h3>City name: {currentCity?.name}</h3>
            <P>Today</P>
                {currentWeather && currentWeather.length > 0 ? (
                    <Div2>
                        <Span>{currentWeather[0].date}</Span>
                        <Span>min: {currentWeather[0].temp_min} ºC</Span>
                        <Span>max: {currentWeather[0].temp_max} ºC</Span>
                        <Span>{currentWeather[0].main}</Span>
                    </Div2>
                    
                ) : (
                    <Span>No weather data available</Span>
                )}
        </Div>
    );
}

export default TodayWeather;