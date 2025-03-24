document.getElementById("investBtn").addEventListener("click", function() {
    let results = ["🚀 To the Moon!", "📉 Market Crash!", "🤡 Clown Fiesta!", "🎪 Jackpot!"];
    let randomResult = results[Math.floor(Math.random() * results.length)];
    alert("You spun the wheel... " + randomResult);
});

document.getElementById("nftBtn").addEventListener("click", function() {
    alert("🚀 NFT Marketplace Coming Soon! Stay Tuned.");
});

// 模拟市场价格更新
function updatePrice() {
    let price = (Math.random() * 1000).toFixed(2);
    document.getElementById("marketPrice").innerText = `$TADC Price: $${price}`;
}

setInterval(updatePrice, 3000);