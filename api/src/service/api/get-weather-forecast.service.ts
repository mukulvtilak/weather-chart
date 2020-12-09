import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IForecastDayResponse, IForecastResponse } from '../../models/err/weather-forecast-api/forecast-response.model';
import { IForecastTransform } from '../../models/err/weather-forecast-api/forecast-transform.model';
import CONFIG from '../../props';

export class GetWeatherForecast {
    getForecast(): Promise<IForecastTransform> {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `${CONFIG.weatherApi.baseUrl}/v1/forecast.json?key=${CONFIG.weatherApi.key}&q=20171&days=1`
        };
        return axios(options)
            .then((value: AxiosResponse<IForecastResponse>): IForecastTransform => {
                const data = value.data;
                const transformed: IForecastTransform = {
                    current: {
                        temp_f: data.current.temp_f
                    },
                    forecast: []
                };
                for (let i = 0; i < data.forecast.forecastday.length; i++) {
                    const element = data.forecast.forecastday[i].hour.map(i => {
                        return {
                            time: i.time,
                            temp_f: i.temp_f
                        }
                    });
                    transformed.forecast = [...transformed.forecast, ...element];
                }
                return transformed;
            })
            .catch((err: any) => {
                console.log(`axios error: `, err);
                return err;
            })
    }
}