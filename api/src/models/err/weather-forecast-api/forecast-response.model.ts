export interface IForecastResponse {
    location: {
        lat: number,
        lon: number,
        localtime_epoch: number,
        name: string,
        region: string,
        country: string,
        tz_id: string,
        localtime: string
    },
    current: {
        condition: IForecastConditionResponse,
        last_updated: string,
        last_updated_epoch: number,
        temp_c: number,
        temp_f: number,
        is_day: number,
        wind_mph: number,
        wind_kph: number,
        wind_degree: number,
        wind_dir: number,
        pressure_mb: number,
        pressure_in: number,
        precip_mm: number,
        precip_in: number,
        humidity: number,
        cloud: number,
        feelslike_c: number,
        feelslike_f: number,
        vis_km: number,
        vis_miles: number,
        uv: number,
        gust_mph: number,
        gust_kph: number
    };
    forecast: {
        forecastday: IForecastDayResponse[]
    };
    alert: IForecastAlertResponse;
}

export interface IForecastConditionResponse {
    text: string,
    icon: string,
    code: number
}

export interface IForecastDayResponse {
    date: string;
    date_epoch: number;
    day: {
        maxtemp_c: number,
        maxtemp_f: number,
        mintemp_c: number,
        mintemp_f: number,
        avgtemp_c: number,
        avgtemp_f: number,
        maxwind_mph: number,
        maxwind_kph: number,
        totalprecip_mm: number,
        totalprecip_in: number,
        avgvis_km: number,
        avgvis_miles: number,
        avghumidity: number,
        daily_will_it_rain: number,
        daily_chance_of_rain: string,
        daily_will_it_snow: number,
        daily_chance_of_snow: string,
        condition: IForecastConditionResponse,
        uv: number
    },
    astro: {
        sunrise: string,
        sunset: string,
        moonrise: string,
        moonset: string,
        moon_phase: string,
        moon_illumination: string
    },
    hour: [
        {
            time_epoch: 1607490000,
            time: string,
            temp_c: -0.1,
            temp_f: 31.8,
            is_day: 0,
            condition: {
                text: string,
                icon: string,
                code: 1003
            }
        }
    ],
}

export interface IForecastAlertResponse {
    headline: string;
    msgtype: string;
    severity: string;
    urgency: string;
    areas: string;
    category: string;
    certainty: string;
    event: string;
    note: string;
    effective: string;
    expires: string;
    desc: string;
    instruction: string;
}
