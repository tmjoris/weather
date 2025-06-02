namespace App\Services;

use Illuminate\Support\Facades\Http;

class OpenWeatherService
{
    public function getWeatherByCity($city)
    {
        $apiKey= config('services.openweather.key');
        $url = "https://api.openweathermap.org/data/2.5/weather";

        $response = Http::get($url, [
            'q' => $city,
            'appid' => $apiKey,
            'units' => $units,        
        ]);

        if($response->failed()) {
            return response()->json(['error' => 'Failed to fetch data'], $response->statuse());
        }

        return $response->json();
    }
}