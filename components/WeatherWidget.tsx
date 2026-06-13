"use client";
import { useState } from "react";

type WeatherState = {
  temp?: number;
  wind?: number;
  condition?: string;
  name?: string;
};

const geocode = async (city: string) => {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city
    )}&count=1`
  );
  if (!res.ok) throw new Error("Geocoding failed");
  const data = await res.json();
  return data.results?.[0] || null;
};

const getWeather = async (lat: number, lon: number) => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`
  );
  if (!res.ok) throw new Error("Weather fetch failed");
  const data = await res.json();
  return data.current_weather;
};

// simple weather emoji mapper
const getWeatherEmoji = (code: number) => {
  if ([0].includes(code)) return "☀️";
  if ([1, 2].includes(code)) return "🌤️";
  if ([3].includes(code)) return "☁️";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 61, 63, 65].includes(code)) return "🌧️";
  if ([71, 73, 75].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌡️";
};

export default function WeatherWidget({
  defaultCity = "New Delhi",
}: {
  defaultCity?: string;
}) {
  const [city, setCity] = useState(defaultCity);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async (c: string) => {
    if (!c.trim()) return;

    setError(null);
    setLoading(true);

    try {
      const geo = await geocode(c);
      if (!geo) throw new Error("Location not found");

      const w = await getWeather(geo.latitude, geo.longitude);

      setWeather({
        temp: w.temperature,
        wind: w.windspeed,
        condition: w.weathercode,
        name: geo.name,
      });
    } catch (err: any) {
      setError(err?.message || "Failed to load weather");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const weatherCode = (weather?.condition as any) || 0;

  return (
    <section className="py-10 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-xl mx-auto px-4">
        {/* Card */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-200 dark:border-slate-800 p-6">

          {/* Header */}
          <div className="mb-5">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              🌦️ Weather Dashboard
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Live weather updates powered by Open-Meteo
            </p>
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="flex-1 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => load(city)}
              disabled={loading}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 text-sm text-red-500 bg-red-50 dark:bg-red-950/20 p-2 rounded-lg">
              {error}
            </div>
          )}

          {/* Loading skeleton */}
          {loading && (
            <div className="mt-6 space-y-3 animate-pulse">
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
              <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3"></div>
            </div>
          )}

          {/* Weather result */}
          {weather && !loading && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-slate-800 dark:text-white">
                    {weather.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    Real-time weather status
                  </div>
                </div>

                <div className="text-4xl">
                  {getWeatherEmoji(Number(weather.condition))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <div className="text-sm text-slate-500">Temperature</div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    {Math.round(weather.temp || 0)}°C
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800">
                  <div className="text-sm text-slate-500">Wind Speed</div>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">
                    {weather.wind} km/h
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Weather code: {weather.condition}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}