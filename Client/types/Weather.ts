export interface WeatherData {
    name: string;
    weather: {
        main: string; 
        description: string; 
        icon: string}[];
    main: {
        temp: number;
        feels_like: number; 
        humidity: number
    };
    wind: {
        speed: number;
    };
}