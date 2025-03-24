// 价格动态更新
function updatePrice() {
    let price = (Math.random() * 1000).toFixed(2);
    document.getElementById("marketPrice").innerText = `TADC Price: $${price}`;
}

setInterval(updatePrice, 3000);
