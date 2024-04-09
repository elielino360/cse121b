async function fetchCurrencyOptions() {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await response.json();
    const currencies = Object.keys(data.rates);
    currencies.forEach(currency => {
      const option1 = new Option(currency, currency);
      const option2 = new Option(currency, currency);
      document.getElementById('fromCurrency').add(option1);
      document.getElementById('toCurrency').add(option2);
    });
  }

  // Function to perform currency conversion
  async function convertCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = (amount * exchangeRate).toFixed(2);

    document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  }

  // Fetch currency options when the page loads
  window.onload = function() {
    fetchCurrencyOptions();
  };