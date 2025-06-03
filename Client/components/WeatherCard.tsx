import { WeatherData } from "@/types/Weather";

export default function WeatherCard({ data }: { data:WeatherData }) {
    return (
        <div className="card bg-base-100 shadow-xl p-4 mt-4">
            <h2 className="card-title">{data.name}</h2>
            <div className="flex items-center gap-4">
                <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
                /> 
                <div>
                    <p className="text-2xl">{data.main.temp}</p>
                    <p>{data.weather[0].main}-{data.weather[0].description}</p>
                    <p>Humidity: {data.main.humidity}%</p>
                </div>  
            </div>
        </div>
    );
}