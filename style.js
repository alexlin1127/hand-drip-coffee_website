// 動態切換封面和主頁
function enterMainSite() {
    document.getElementById("welcomePage").classList.add("d-none");
    document.getElementById("mainSite").classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// 動態調整當視窗滑動時navbar的透明度
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-custom");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.95)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.7)";
    }
});

// 點選主頁選單首頁會重整主頁
document.getElementById('homePage').addEventListener('click', (e) => {
    e.preventDefault();
    enterMainSite();
})