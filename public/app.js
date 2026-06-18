async function sendBulk() {
  const numbers =
    document
      .getElementById("numbers")
      .value
      .split("\n")
      .map(n => n.trim())
      .filter(Boolean);

  const amount =
    document.getElementById("amount").value;

  const reference =
    document.getElementById("reference").value;

  const response = await fetch(
    "/api/stk/bulk",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        numbers,
        amount,
        reference
      })
    }
  );

  const data = await response.json();

  document.getElementById("output")
    .textContent =
    JSON.stringify(data, null, 2);
}
