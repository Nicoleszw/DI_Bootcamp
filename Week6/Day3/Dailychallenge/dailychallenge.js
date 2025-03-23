const apiKey = 'YOUR_API_KEY_HERE';  

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultDisplay = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

async function loadCurrencies() {
  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
    const data = await response.json();

    if (data.result !== "success") {
      throw new Error("Failed to load currencies");
    }

    data.supported_codes.forEach(([code, name]) => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");

      option1.value = code;
      option1.textContent = `${code} - ${name}`;
      option2.value = code;
      option2.textContent = `${code} - ${name}`;

      fromCurrency.appendChild(option1);
      toCurrency.appendChild(option2);
    });

    fromCurrency.value = "USD";
    toCurrency.value = "ILS";
  } catch (error) {
    console.error("Currency load error:", error);
    resultDisplay.textContent = "Error loading currencies.";
    resultDisplay.style.color = "#FFD700";
  }
}

async function convertCurrency() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = amountInput.value;

  if (!amount || amount <= 0) {
    resultDisplay.textContent = "Enter a valid amount.";
    resultDisplay.style.color = "#FFD700";
    return;
  }

  try {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`);
    const data = await response.json();

    if (data.result === "success") {
      resultDisplay.textContent = `${data.conversion_result} ${to}`;
      resultDisplay.style.color = "#FFD700";
    } else {
      throw new Error("Conversion failed");
    }
  } catch (error) {
    console.error("Conversion error:", error);
    resultDisplay.textContent = "Error during conversion.";
    resultDisplay.style.color = "#FFD700";
  }
}

convertBtn.addEventListener("click", convertCurrency);

loadCurrencies();
