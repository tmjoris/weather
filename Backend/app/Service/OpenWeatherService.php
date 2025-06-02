<?php

namespace App\Service;

use Illuminate\Support\Facades\Http;

class OpenWeatherService
{
    public function getWeatherByCity(string $city, string $units)
    {
        $apiKey = config('services.openweather.key');
        $url = "https://api.openweathermap.org/data/2.5/weather?q={$city}&appid={$apiKey}&units={$units}";

        $response = Http::get($url);

        if($response->failed()) {
            return ['error' => 'Failed to fetch weather data'];
        }

        return $response->json();
    }
}