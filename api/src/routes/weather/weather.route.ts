import { NextFunction, Router, Request, Response } from "express";
import { WeatherController } from "../../controllers/weather.controller";

class WeatherRoute {
    private _router = Router();
    private _controller = new WeatherController();

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
            try {
                this._controller.default(req, res, next);
            } catch (err) {
                next(err);
            }
        })
    }
}

export = new WeatherRoute().router;
