const headerHTML = `
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
            <div class="logo-circle d-flex justify-content-center align-items-center me-2">
                <i class="bi bi-cup-hot"></i>
            </div>
            dement
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" id="homePage" href="">首頁</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="info.html" target="_self">關於我們</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="product.html" target="_self">產品</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html" target="_self">聯絡資訊</a>
                </li>
            </ul>
        </div>
        <a class="member-icon" href="member.html" target="_blank">
            <i class="bi bi-person-circle"></i>
        </a>
        <a class="cart-icon" href="cart.html" target="_blank">
            <i class="bi bi-cart3"></i>
        </a>
    </div>
    `;
    
document.getElementById("head-area").innerHTML = headerHTML;
