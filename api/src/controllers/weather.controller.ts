import ErrorHandler from "../models/err/ErrorHandler";

export class WeatherController {
    default() {
        // return {
        //     text: `default endpoint in ${this.constructor.name}`
        // };
        throw new ErrorHandler(501, 'Method not implemented');
    }
}