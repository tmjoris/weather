<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Service\OpenWeatherService;

class WeatherController extends Controller
{
    public function show(Request $request, OpenWeatherService $weatherService)
    {
        $city = $request->query('city');
        $units = $request->query('units');

        $weather = $weatherService->getWeatherByCity($city, $units);

        return response()->json($weather);
    }
}