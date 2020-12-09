export interface IForecastTransform {
    current: {
        temp_f: number
    },
    forecast: IForecastTransformItem[]
}

export interface IForecastTransformItem {
    time: string;
    temp_f: number;
}
