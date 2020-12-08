import { Router } from "express";
import weatherRoute from "./weather/weather.route";

class MasterRoute {
    private _router = Router();
    private _weatherRouter = weatherRoute;

    get router() {
        return this._router;
    }

    constructor() {
        this._configure();
    }

    private _configure() {
        this.router.use('/weather', this._weatherRouter);
    }
}

export = new MasterRoute().router
