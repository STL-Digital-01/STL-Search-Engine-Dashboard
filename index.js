const readline = require("readline");
const axios = require("axios");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const API_KEY = "AIzaSyD2K_TtEwz5d72lw9wrKe2zTZ1mZou1Feo";
const URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=" + API_KEY;

rl.question("Enter your prompt: ", async (prompt) => {
  const body = { contents: [{ parts: [{ text: prompt }] }] };
  try {
    const response = await axios.post(URL, body, { headers: { "Content-Type": "application/json" } });
    console.log("\nGemini says:\n", response.data.candidates[0].content.parts[0].text);
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
  rl.close();
});
