const testData = {
  name: "Test User Production",
  email: `test${Date.now()}@example.com`,
  phone: "9876543210",
  dateOfBirth: "1995-01-01",
  state: "Maharashtra",
  password: "TestPass123!"
};

console.log("Testing registration with:", { ...testData, password: "***" });

try {
  const response = await fetch('https://whitehatinfotech.com/api/trpc/auth.register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      json: testData
    })
  });

  const result = await response.text();
  console.log("\nResponse status:", response.status);
  console.log("Response body:", result);

  try {
    const parsed = JSON.parse(result);
    console.log("\nParsed response:", JSON.stringify(parsed, null, 2));
    
    if (parsed.result) {
      console.log("\n✅ SUCCESS! Registration worked!");
    } else if (parsed.error) {
      console.log("\n❌ ERROR:", parsed.error.json?.message || parsed.error);
    }
  } catch (e) {
    console.log("Could not parse as JSON");
  }
} catch (error) {
  console.error("Request failed:", error.message);
}
