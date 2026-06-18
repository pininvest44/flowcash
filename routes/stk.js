const express = require("express");
const router = express.Router();

const { sendSTK } = require("../services/flowcash");
const { logTransaction } = require("../utils/logger");

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

router.post("/bulk", async (req, res) => {
  const { numbers, amount, reference } = req.body;

  const results = [];

  for (const msisdn of numbers) {
    try {
      const response =
        await sendSTK(msisdn, amount, reference);

      results.push({
        msisdn,
        success: true,
        response
      });

      logTransaction({
        msisdn,
        status: "SUCCESS",
        response
      });
    } catch (err) {
      results.push({
        msisdn,
        success: false,
        error: err.message
      });

      logTransaction({
        msisdn,
        status: "FAILED",
        error: err.message
      });
    }

    await delay(2000);
  }

  res.json({
    total: results.length,
    results
  });
});

module.exports = router;
