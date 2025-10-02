import { useState, useEffect } from "react";
import type { WidgetData } from "@/types/dashboard";


export function useWidgetData() {
  const [data, setData] = useState<Partial<WidgetData> | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
       
        const ipRes = await fetch("https://ipapi.co/json/");
        const ipInfo = await ipRes.json();

        const { city, country_name, latitude, longitude, timezone } = ipInfo;

        
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const weather = await weatherRes.json();

        setData({
          location: `${city}, ${country_name}`,
          temperature: `${weather.current_weather.temperature}°C`,
          timezone: timezone,
        });
      } catch (error) {
        console.error("Failed to fetch widget data", error);
      }
    }

    fetchData();
  }, []);

  return data;
}
