let cartData = [];

// 整理購物車內品項，將同品項數量加總
function loadCartData() {
    let cart = JSON.parse(localStorage.getItem("cart") || []);
    const productCount = {};

    cart.forEach((item) => {
        let key = item.name;
        if (productCount[key]) {
            productCount[key].quantity += 1;
        } else {
            productCount[key] = {
                name: item.name,
                price: item.price,
                id: item.id,
                quantity: 1,
                selected: true,
            };
        }
    });

    cartData = [];
    for (let key in productCount) {
        cartData.push(productCount[key]);
    }
}

// 儲存購物車資料
function saveCartData() {
    let cart = [];
    cartData.forEach((item) => {
        for (let i = 0; i < item.quantity; i++) {
            cart.push({
                name: item.name,
                price: item.price,
                id: item.id,
            });
        }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    if (typeof updateCartBadge === "function") {
        updateCartBadge(cart);
    }
    console.log("購物車已更新: ", cartData);
}

// 渲染購物車的內容
function renderCartItems() {
    const container = document.getElementById("cartItemsContainer");
    container.innerHTML = "";

    for (let i = 0; i < cartData.length; i++) {
        const item = cartData[i];
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML =
            '<div class="item-header">' + 
                '<input id=prod-' + (i+1) +' class="item-check" type="checkbox" ' + (item.selected ? "checked" : "") + ' onchange="handleItemToggle(' + i + ', this.checked)">' +
                '<label for=' + '"prod-' +  (i+1) + '" class="item-name">' +'<strong class="item-title">'+ item.name + '</strong>'+'</label>' +  
            "</div>" +
            '<div class="itemPrice">' + "價格: <span>$" + item.price.toLocaleString() + "</span>" +
            "</div>" +
            '<div class="item-controls">' +
                '<div class="quantity-controls">' +
                    '<button class="quantity-btn" onclick="changeQuantity(' + i + ', -1)" ' + (item.quantity <= 1 ? "disabled" : "") + ">-</button>" +
                    '<span style="margin: 0 10px;">' + item.quantity + "</span>" +
                    '<button class="quantity-btn" onclick="changeQuantity(' + i + ', 1)">+</button>' +
                "</div>" +
                "<div>" +
                    '<button class="delete-btn" onclick="removeItem(' + i + ')">刪除</button>' +
                "</div>" +
            "</div>";
        container.appendChild(div);
    }
}

// 全選商品
function selectAllItem() {
    const itemCheckBox = document.getElementsByClassName("item-check");
    for (let i = 0; i < itemCheckBox.length; i++) {
        console.log(typeof itemCheckBox[i].checked);
        if (itemCheckBox[i].checked == false) {
            itemCheckBox[i].checked = true;
        }
        cartData[i].selected = true;
    }
    updateTotal();
}

// 處理單項選擇
function handleItemToggle(index, checked) {
    cartData[index].selected = checked;
    updateTotal();
    saveCartData();
}

// 修改商品數量
function changeQuantity(index, change) {
    const item = cartData[index];
    const newQuantity = item.quantity + change;

    if (newQuantity >= 1) {
        item.quantity = newQuantity;
        renderCartItems();
        updateTotal();
        saveCartData();
    }
}

// 移除商品
function removeItem(index) {
    if (confirm("確定要刪除此商品嗎？")) {
        cartData.splice(index, 1);
        renderCartItems();
        updateTotal();
        saveCartData();
    }
}

// 更新總金額
function updateTotal() {
    let totalAmount = 0;
    let totalQuantity = 0;

    for (let i = 0; i < cartData.length; i++) {
        const item = cartData[i];
        if (item.selected) {
            totalAmount += item.price * item.quantity;
            totalQuantity += item.quantity;
        }
    }

    document.getElementById("totalPrice").textContent = totalAmount.toLocaleString();
    document.getElementById("itemCount").textContent = totalQuantity;
    document.getElementById("checkout-btn").disabled = totalQuantity === 0;
}

// 點選結帳按鈕後的顯示畫面，包含購買多少產品及總金額
function handleCheckout() {
    let totalAmount = 0;
    let totalQuantity = 0;

    for (let i = 0; i < cartData.length; i++) {
        const item = cartData[i];
        if (item.selected) {
            totalAmount += item.price * item.quantity;
            totalQuantity += item.quantity;
        }
    }

    if (totalQuantity > 0) {
        alert("準備結帳\n總共 " + totalQuantity + " 件商品\n金額：$" + totalAmount.toLocaleString());
    }
}

// 清除購物車
function removeAllItem() {
    localStorage.setItem("cart", JSON.stringify([])); // 設為空陣列
    cartData = [];
    renderCartItems();
    updateTotal();
    if (typeof updateCartBadge === "function") {
        updateCartBadge([]);
    }
}

// 頁面載入完成後執行
window.onload = () => {
    loadCartData();
    renderCartItems();
    updateTotal();
    let cart = JSON.parse(localStorage.getItem("cart") || []);
    updateCartBadge(cart);
};
