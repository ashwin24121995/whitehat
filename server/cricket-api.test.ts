import { describe, expect, it } from "vitest";
import axios from "axios";

describe("Cricket API Integration", () => {
  it("should successfully fetch current matches with valid API credentials", async () => {
    const apiKey = process.env.CRICKET_API_KEY;
    const apiUrl = process.env.CRICKET_API_URL;

    expect(apiKey).toBeDefined();
    expect(apiUrl).toBeDefined();

    // Test the Current Matches endpoint
    const response = await axios.get(`${apiUrl}currentMatches`, {
      params: {
        apikey: apiKey,
        offset: 0
      }
    });

    // Verify response structure
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("apikey");
    expect(response.data).toHaveProperty("data");
    expect(Array.isArray(response.data.data)).toBe(true);
    
    console.log(`✅ Cricket API test passed. Found ${response.data.data.length} matches.`);
  }, 10000); // 10 second timeout for API call
});
