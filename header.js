const headerHTML = `
    <div class="container-fluid w-100 px-5">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
            <div class="logo-circle d-flex justify-content-center align-items-center me-3">
                <i class="bi bi-cup-hot"></i>
            </div>
            dement
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item px-1">
                    <a class="nav-link header-homepage" id="homePage" href="index.html" target="_self">首頁</a>
                </li>
                <li class="nav-item px-1">
                    <a class="nav-link header-news" href="news.html" target="_self">最新消息</a>
                </li>
                <li class="nav-item px-1">
                    <a class="nav-link header-info" href="info.html" target="_self">關於我們</a>
                </li>
                <li class="nav-item px-1">
                    <a class="nav-link header-product" href="product.html" target="_self">精選商品</a>
                </li>
                <li class="nav-item px-1">
                    <a class="nav-link header-contact" id="contact-info" href="#" target="">聯絡資訊</a>
                </li>
            </ul>
        </div>
        <a class="cart-icon position-relative" href="cart.html" target="_self" title="購物車">
            <i class="bi bi-cart3"></i>
            <span id="cart-badge" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="display:none; font-size:0.7rem;">0</span>
        </a>

        
    </div>
    `;
    
document.getElementById("head-area").innerHTML = headerHTML;