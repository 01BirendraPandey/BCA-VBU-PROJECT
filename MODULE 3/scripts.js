document.addEventListener("DOMContentLoaded", function() {
  const table = document.getElementById("cryptoTable");

  // Function to fetch and update crypto rates
  function fetchCryptoRates() {
    // API URL for CoinGecko
    const apiUrl = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cusdcoin%2Ctron%2Clitecoin%2Cethereum%2Csolana%2Ccardano%2Cdogecoin%2Captos%2Ccronos%2Cdai%2Cmonero%2Ceos%2Cfrax%2Cstellar%2Ccronos%2Cuniswap%2Cokb%2CChainlink%2CArbitrum%2CAave&vs_currencies=usd";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Clear existing rows
        while (table.rows.length > 1) {
          table.deleteRow(1);
        }

        // Add new rows with crypto rates
        for (const crypto in data) {
          const row = table.insertRow();
          const currencyCell = row.insertCell(0);
          const rateCell = row.insertCell(1);

          currencyCell.innerHTML = crypto;
          rateCell.innerHTML = "$" + data[crypto].usd;
        }
      })
      .catch(error => {
        console.log("Error fetching crypto rates:", error);
      });
  }

  // Fetch crypto rates initially and set interval for periodic updates
  fetchCryptoRates();
  setInterval(fetchCryptoRates, 5000); // Update rates every 5 seconds
});
