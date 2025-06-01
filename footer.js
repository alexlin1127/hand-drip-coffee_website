const footerHTML = `
    <div class="container text-center">
        <div class="row justify-content-center">
            <!-- 地址 -->
            <div class="col-md-4 d-flex flex-column align-items-center">
                <div class="d-flex align-items-center gap-3">
                    <i class="bi bi-geo-alt display-6 text-primary-custom py-3"></i>
                    <h4 class="mb-1">地址</h4>
                </div>
                <h5>台北市大安區咖啡街123號</h5>
            </div>

            <!-- 聯絡電話 -->
            <div class="col-md-4 d-flex flex-column align-items-center">
                <div class="d-flex align-items-center gap-3">
                    <i class="bi bi-telephone display-6 text-primary-custom py-3"></i>
                    <h4 class="mb-1">聯絡電話</h4>
                </div>
                <h5>(02) 1234-5678</h5>
            </div>

            <!-- 營業時間 -->
            <div class="col-md-4 d-flex flex-column align-items-center">
                <div class="d-flex align-items-center gap-3">
                    <i class="bi bi-clock display-6 text-primary-custom py-3"></i>
                    <h4    class="mb-1">營業時間</h4>
                </div>
                <h5>週一至週日 07:00 - 22:00</h5>
            </div>
        </div>
    </div>
    `;

document.getElementById("footer-area").innerHTML = footerHTML;