export const fetchWeather = async(city: string, units: string) => {
    const res = await fetch(`http://localhost:8000/api/weather?city=${city}&units=${units}`);
    if (!res.ok) throw new Error('Failed to fetch weather');
    return res.json();
};