import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import WeatherCard from '@/components/WeatherCard';
import { WeatherData } from '@/types/Weather';
import { fetchWeather } from '@/utils/fetchWeather';

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string, metrics: string) => {
    setError(null);
    try {
      const data = await fetchWeather(city, metrics);
      setWeather(data);
    } catch (err) {
      setError('Could not fetch weather data.');
    }
  };

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </main>
  );
}
