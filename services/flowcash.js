const axios = require("axios");

async function sendSTK(msisdn, amount, reference) {
  const payload = {
    api_key: process.env.FLOWCASH_API_KEY,
    email: process.env.FLOWCASH_EMAIL,
    amount,
    msisdn,
    reference
  };

  const response = await axios.post(
    "https://flowcash.co.ke/v1/stkpush",
    payload,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response.data;
}

module.exports = { sendSTK };
