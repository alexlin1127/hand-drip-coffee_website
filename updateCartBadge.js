// 更新header中，購物車內的產品數量顯示
function updateCartBadge(cart) {
    const badge = document.getElementById("cart-badge");
    if (badge) {
        badge.textContent = cart.length;
        badge.style.display = cart.length > 0 ? "inline-block" : "none";
    }
}

// 頁面刷新時，保留購物車內資料
window.onload = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartBadge(cart);
};
