export function getCurrentWeatherQueryURL(
  url: string,
  city: string,
  apiKey: string,
) {
  return `${url}?q=${city}&appid=${apiKey}`;
}

export async function getCurrentWeather(
  url: string,
): Promise<Record<string, unknown> | null> {
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const data: Record<string, unknown> = await response.json();

  return data;
}
