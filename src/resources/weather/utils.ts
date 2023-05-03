export function getCurrentWeatherQueryURL(
  url: string,
  zipCode: string,
  apiKey: string,
) {
  return `${url}?q=${zipCode}&appid=${apiKey}`;
}

export async function getCurrentWeather(
  url: string,
): Promise<Record<string, unknown> | null> {
  let response: Response;

  try {
    response = await fetch(url);

    if (!response.ok) {
      console.error("Fetch failed with status:", response.status);
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }

  const data: Record<string, unknown> = await response.json();
  if (data) return data;

  return null;
}
