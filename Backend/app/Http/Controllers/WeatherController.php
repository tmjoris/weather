<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\OpenWeatherService;

class WeatherController extends Controller
{
    protected $weatherService;

    public function _construct(OpenWeatherService $weatherService)
    {
        $this->weatherService = $weatherService;
    }

    public function getWeather(Request $request)
    {
        $city = $request->query('city');
        $units = $request->query('units');
        if(!city) {
            return response()->json(['error'=>'City is required'], 400);
        }

        $data = $this->weatherService->getWeatherByCity($city, $units);

        return response()->json($data);
    }
}
