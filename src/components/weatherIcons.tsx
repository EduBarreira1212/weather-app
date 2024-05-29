import { faCloud, faCloudRain, faSnowflake, faSun, faThunderstorm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface WeatherIcons {
    [key: string]: JSX.Element;
}

const ClearIcon = () => <FontAwesomeIcon icon={faSun} size="2x"/>;
const RainIcon = () => <FontAwesomeIcon icon={faCloudRain} size="2x"/>;
const SnowIcon = () => <FontAwesomeIcon icon={faSnowflake} size="2x"/>;
const CloudsIcon = () => <FontAwesomeIcon icon={faCloud} size="2x"/>;
const ThunderstormIcon = () => <FontAwesomeIcon icon={faThunderstorm} size="2x"/>;

const weatherIcons: WeatherIcons = {
    Clear: <ClearIcon/>,
    Rain: <RainIcon/>,
    Clouds: <CloudsIcon/>,
    Snow: <SnowIcon/>,
    Thunderstorm: <ThunderstormIcon/>
}

export default weatherIcons;