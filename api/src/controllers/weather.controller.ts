import { NextFunction, Router, Request, Response } from "express";
import { GetWeatherForecast } from "../service/api/get-weather-forecast.service";

export class WeatherController {
    default(req: Request, res: Response, next: NextFunction) {
        const forecastApi = new GetWeatherForecast();
        return forecastApi.getForecast()
            .then(result => {
                console.log('controller', result);
                res.status(200).json(result)
            })
            .catch(err => {
                console.error('err', err);
            });
    }
}