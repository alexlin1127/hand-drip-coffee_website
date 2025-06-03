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
                            <div class="col-md-3">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-cup-hot"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">安地斯晨霧</h5>
                                        <h5 class="card-title pb-2">Andes Mist</h5>
                                        <p class="card-text">口感柔和、酸甜均衡，帶有柑橘與紅糖的尾韻，如晨霧中甦醒的高原風情</p>
                                        <div class="price-tag">NT$ 360</div>
                                    </div>
                                </div>
                            </div>

                            <!-- product2 -->
                            <div class="col-md-3">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-cup-straw"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">肯亞黃昏</h5>
                                        <h5 class="card-title pb-2">Kenyan Dusk</h5>
                                        <p class="card-text">濃郁莓果香氣與葡萄酒般的質感，帶來層次分明的酸度與甜美的結尾</p>
                                        <div class="price-tag">NT$ 420</div>
                                    </div>
                                </div>
                            </div>

                            <!-- product3 -->
                            <div class="col-md-3">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-droplet"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">衣索比亞花開</h5>
                                        <h5 class="card-title pb-2">Ethiopian Blossom</h5>
                                        <p class="card-text">清新茉莉與柑橘香氣，如花園中綻放的晨光，適合追求輕盈風味的你</p>
                                        <div class="price-tag">NT$ 400</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- product4 -->
                            <div class="col-md-3">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-droplet"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">巴西暖陽</h5>
                                        <h5 class="card-title pb-2">Brazilian Warmth</h5>
                                        <p class="card-text">厚實的榛果香與黑巧克力尾韻，為午後帶來陽光般的溫暖擁抱</p>
                                        <div class="price-tag">NT$ 340</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row g-4">
                            <!-- product5 -->
                            <div class="col-md-3">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-snow"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">瓜地馬拉回聲</h5>
                                        <h5 class="card-title pb-2">Guatemalan Echo</h5>
                                        <p class="card-text">滑順口感中帶有焦糖與香料氣息，如山谷中迴盪的細語</p>
                                        <div class="price-tag">NT$ 380</div>
                                    </div>
                                </div>
                            </div>

                            <!-- product6 -->
                            <div class="col-md-3">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-heart"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">耶加雪菲暮光</h5>
                                        <h5 class="card-title pb-2">Yirgacheffe Twilight</h5>
                                        <p class="card-text">散發花香與柑橘風味，搭配淡雅果酸，適合靜夜中細品回味</p>
                                        <div class="price-tag">NT$ 400</div>
                                    </div>
                                </div>
                            </div>

                            <!-- product7 -->
                            <div class="col-md-3">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-star"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">巴拿馬微風</h5>
                                        <h5 class="card-title pb-2">Panama Breeze</h5>
                                        <p class="card-text">帶有熱帶水果與蜂蜜香氣，口感細緻滑順，如微風拂面</p>
                                        <div class="price-tag">NT$ 450</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- product8 -->
                            <div class="col-md-3">
                                <div class="card product-card h-100">
                                    <div class="product-image d-flex justify-content-center align-items-center">
                                        <i class="bi bi-star"></i>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">蘇門答臘深林</h5>
                                        <h5 class="card-title pb-2">Sumatran Depth</h5>
                                        <p class="card-text">濃郁泥土與香草氣息，展現熱帶雨林的野性魅力與深邃風情</p>
                                        <div class="price-tag">NT$ 360</div>
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

            <div class="row buy_now">
                <button class="btn text-white py-3 text-end"><a href="product.html">查看更多</a></button>
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
