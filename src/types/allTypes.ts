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