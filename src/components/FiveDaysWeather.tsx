import { useSelector } from "react-redux";
import { IState } from "../types/allTypes";
import { styled } from "styled-components";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin: 1.5vh 0;
`;

const Span = styled.span`
    font-size: medium;
    font-weight: 500;
`;

const FiveDaysWeather = () => {

    const { currentWeather } = useSelector((state: IState) => state.weatherReducer);

    return(
        <Div>
            <h4>Next 5 days</h4>
            {currentWeather ? (
                <div>
                    <Div2>
                        <Span>{currentWeather[1].date}</Span>
                        <Span>min: {currentWeather[1].temp_min} ºC</Span>
                        <Span>max: {currentWeather[1].temp_max} ºC</Span>
                        <Span>{currentWeather[1].main}</Span>
                    </Div2>
                    <Div2>
                        <Span>{currentWeather[2].date}</Span>
                        <Span>min: {currentWeather[2].temp_min} ºC</Span>
                        <Span>max: {currentWeather[2].temp_max} ºC</Span>
                        <Span>{currentWeather[2].main}</Span>
                    </Div2>
                    <Div2>
                        <Span>{currentWeather[3].date}</Span>
                        <Span>min: {currentWeather[3].temp_min} ºC</Span>
                        <Span>max: {currentWeather[3].temp_max} ºC</Span>
                        <Span>{currentWeather[3].main}</Span>
                    </Div2>
                    <Div2>
                        <Span>{currentWeather[4].date}</Span>
                        <Span>min: {currentWeather[4].temp_min} ºC</Span>
                        <Span>max: {currentWeather[4].temp_max} ºC</Span>
                        <Span>{currentWeather[4].main}</Span>
                    </Div2>
                    <Div2>
                        <Span>{currentWeather[5].date}</Span>
                        <Span>min: {currentWeather[5].temp_min} ºC</Span>
                        <Span>max: {currentWeather[5].temp_max} ºC</Span>
                        <Span>{currentWeather[5].main}</Span>
                    </Div2>
                </div>
            ) : (
                <Span>No weather data available</Span>
            )}
        </Div>
    );
}

export default FiveDaysWeather;