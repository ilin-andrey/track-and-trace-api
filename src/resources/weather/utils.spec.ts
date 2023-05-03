import { getCurrentWeather, getCurrentWeatherQueryURL } from "./utils";

describe("utils", () => {
  describe("getCurrentWeatherQueryURL", () => {
    it("should return correct URL", () => {
      expect(
        getCurrentWeatherQueryURL("https://example.com", "12345", "api-key"),
      ).toEqual("https://example.com?q=12345&appid=api-key");
    });
  });

  describe("getCurrentWeather", () => {
    it("should return null for wrong url", async () => {
      const result = await getCurrentWeather("wrong-url");
      expect(result).toEqual(null);
    });

    it("should return null for unresponsive URL", async () => {
      const result = await getCurrentWeather("http://127.0.0.1");
      expect(result).toEqual(null);
    });
  });
});
