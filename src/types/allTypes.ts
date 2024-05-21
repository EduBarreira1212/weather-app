export interface IAction {
    type: string
    payload: any
}

export interface ICity {
    country: string
    lat: number
    local_names: {}
    lon: number
    name: string
    state: string
}

export type ICityList = ICity[] | any

export interface IState {
    weatherReducer: {
        currentCity: ICity
    }
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
  
export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
}

export interface Forecast {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: { all: number };
    wind: { speed: number; deg: number; gust: number };
    visibility: number;
    pop: number;
    rain?: { '3h': number };
    sys: { pod: string };
    dt_txt: string;
}

export interface ApiResponse {
    cod: string;
    message: number;
    cnt: number;
    list: Forecast[];
    city: {
        id: number;
        name: string;
        coord: { lat: number; lon: number };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    };
}


export interface FilteredForecast {
    date: string;
    temp_min: number;
    temp_max: number;
    main: string;
}