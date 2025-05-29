const mobile_productHTML = document.getElementById("products").innerHTML;
const desktop_productHTML = `
    <section class="py-5" id="products">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mb-5">
                    <h2 class="display-4 mb-0">精選商品</h2>
                </div>
            </div>

            <div id="productCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row g-4">
                            <!-- product1 -->
                            <div class="col-md-4">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-cup-hot"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">經典美式咖啡</h5>
                                        <p class="card-text">香醇濃郁，回味無窮的經典選擇</p>
                                        <div class="price-tag">NT$ 120</div>
                                    </div>
                                </div>
                            </div>

                            <!-- product2 -->
                            <div class="col-md-4">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-cup-straw"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">香草拿鐵</h5>
                                        <p class="card-text">絲滑奶泡配上香草的甜美香氣</p>
                                        <div class="price-tag">NT$ 150</div>
                                    </div>
                                </div>
                            </div>

                            <!-- product3 -->
                            <div class="col-md-4">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-droplet"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">手沖單品咖啡</h5>
                                        <p class="card-text">精選產地豆，專業手沖技藝</p>
                                        <div class="price-tag">NT$ 200</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row g-4">
                            <!-- product4 -->
                            <div class="col-md-4">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-snow"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">冰淇淋咖啡</h5>
                                        <p class="card-text">夏日限定，清涼消暑的完美選擇</p>
                                        <div class="price-tag">NT$ 180</div>
                                    </div>
                                </div>
                            </div>

                            <!-- product5 -->
                            <div class="col-md-4">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-heart"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">焦糖瑪奇朵</h5>
                                        <p class="card-text">甜蜜焦糖與濃郁咖啡的完美結合</p>
                                        <div class="price-tag">NT$ 160</div>
                                    </div>
                                </div>
                            </div>

                            <!-- product6 -->
                            <div class="col-md-4">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-star"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">精品莊園豆</h5>
                                        <p class="card-text">單一產區精品豆，限量發售</p>
                                        <div class="price-tag">NT$ 280</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 輪播圖按鈕 -->
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#productCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    </section>
    `;

function updateProductArea() {
    const product_page = document.getElementById("products");

    if (window.innerWidth > 992) {
        product_page.outerHTML = desktop_productHTML;
    } else {
        product_page.outerHTML = mobile_productHTML;
    }
}

window.addEventListener("resize", updateProductArea);
window.addEventListener("DOMContentLoaded", updateProductArea);
