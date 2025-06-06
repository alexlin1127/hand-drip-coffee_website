let products = [];

fetch("product.json")
    .then((res) => res.json())
    .then(data => {
        products = data;
        document.getElementById("prod-area").innerHTML = 
        products.map(product => 
                    `
                    <div class="col-12 col-md-6 col-lg-4 d-flex">
                        <div class="card flex-fill">
                            <div class="product-image d-flex justify-content-center align-items-center">
                                <i class="${product.img}"></i>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title"><strong>${product.name}</strong></h4>
                                <p class="card-text">
                                    <strong>產地：</strong>
                                    ${product.madePlace}
                                </p>
                                <p class="card-text">
                                    <strong>烘焙：</strong>
                                    ${product.roast}
                                </p>
                                <p class="card-text">${product.description}</p>
                                <div class="d-flex justify-content-between">
                                    <h5 class="pricetag">NTD$ ${product.price}</h5>
                                    <button class="btn " onclick="addToCart(${product.id})">
                                        <i class="fas fa-cart-plus"></i> 加入購物車
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
        ).join('')
    });

// 加入購物車
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find((p) => p.id === productId);

    cart.push({
        name: product.name,
        price: product.price,
        id: product.id,
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge(cart);
}