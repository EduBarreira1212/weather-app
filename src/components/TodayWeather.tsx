import { useSelector } from "react-redux";
import { IState } from "../types/allTypes";
import styled from "styled-components";
import weatherIcons from "./weatherIcons";

const Div = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
    padding-bottom: 3vh;
    border-radius: 8px;
    box-shadow: 5px 5px 8px black;
`;

const H3 = styled.h3`
    margin: 0.5vh 0;
`;

const P = styled.p`
    font-weight: bold;
    font-size: medium;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3vw;
`;

const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    margin-bottom: 2vh;
`;

const Span = styled.span`
    font-size: medium;
    font-weight: 500;
`;

const SpanTemp = styled.span`
    font-size: 3rem;
    font-weight: 500;
`;

const TodayWeather = () => {
    const { currentCity } = useSelector((state: IState) => state.weatherReducer);
    const { currentTodayWeather } = useSelector((state: IState) => state.weatherReducer);

    return(
        <Div>
            <H3>{currentCity?.name}, {currentCity?.state}, {currentCity?.country}</H3>
            <P>Today</P>
                {currentTodayWeather ? (
                <>
                    <Div3>
                        <SpanTemp>{currentTodayWeather.main.temp.toFixed(1)} ºC</SpanTemp>
                        <Span>{weatherIcons[currentTodayWeather.weather[0].main]}</Span>
                    </Div3>
                    <Div2>
                        <Span>{currentTodayWeather.main.temp_max.toFixed(1)} ºC</Span>
                        <Span>/</Span>
                        <Span>{currentTodayWeather.main.temp_min.toFixed(1)} ºC</Span>
                    </Div2>
                </>
                ) : (
                    <Span>No weather data available</Span>
                )}
        </Div>
    );
}

export default TodayWeather;