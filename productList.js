const products = [
    {
        id: 1,
        name: "安地斯晨霧 Andes Mist",
        madePlace: "哥倫比亞",
        roast: "中淺焙",
        description: "口感柔和、酸甜均衡，帶有柑橘與紅糖的尾韻，如晨霧中甦醒的高原風情。",
        price: 360,
        img: "https://picsum.photos/id/685/600/400",
    },
    {
        id: 2,
        name: "肯亞黃昏 Kenyan Dusk",
        madePlace: "肯亞",
        roast: "中焙",
        description: "濃郁莓果香氣與葡萄酒般的質感，帶來層次分明的酸度與甜美的結尾。",
        price: 420,
        img: "https://picsum.photos/id/685/600/400",
    },
    {
        id: 3,
        name: "衣索比亞花開 Ethiopian Blossom",
        madePlace: "衣索比亞 耶加雪菲",
        roast: "淺焙",
        description: "清新茉莉與柑橘香氣，如花園中綻放的晨光，適合追求輕盈風味的你。",
        price: 400,
        img: "https://picsum.photos/id/685/600/400",
    },
    {
        id: 4,
        name: "巴西暖陽 Brazilian Warmth",
        madePlace: "巴西 薩爾瓦多",
        roast: "中深焙",
        description: "厚實的榛果香與黑巧克力尾韻，為午後帶來陽光般的溫暖擁抱。",
        price: 340,
        img: "https://picsum.photos/id/685/600/400",
    },
    {
        id: 5,
        name: "瓜地馬拉回聲 Guatemalan Echo",
        madePlace: "瓜地馬拉 安提瓜",
        roast: "中焙",
        description: "滑順口感中帶有焦糖與香料氣息，如山谷中迴盪的細語。",
        price: 380,
        img: "https://picsum.photos/id/685/600/400",
    },
    {
        id: 6,
        name: "耶加雪菲暮光 Yirgacheffe Twilight",
        madePlace: "衣索比亞 耶加雪菲",
        roast: "淺焙",
        description: "散發花香與柑橘風味，搭配淡雅果酸，適合靜夜中細品回味。",
        price: 400,
        img: "https://picsum.photos/id/685/600/400",
    },
    {
        id: 7,
        name: "巴拿馬微風 Panama Breeze",
        madePlace: "巴拿馬 波奎特",
        roast: "淺中焙",
        description: "帶有熱帶水果與蜂蜜香氣，口感細緻滑順，如微風拂面。",
        price: 450,
        img: "https://picsum.photos/id/685/600/400",
    },
    {
        id: 8,
        name: "蘇門答臘深林 Sumatran Depth",
        madePlace: "印尼 蘇門答臘",
        roast: "深焙",
        description: "濃郁泥土與香草氣息，展現熱帶雨林的野性魅力與深邃風情。",
        price: 360,
        img: "https://picsum.photos/id/685/600/400",
    },
];

document.getElementById("prod-area").innerHTML = products
    .map(
        (product) =>
            `
            <div class="col-md-4 d-flex">
                <div class="card flex-fill">
                    <img src="${product.img}" alt="Andes Mist" class="card-img-top" />
                    <div class="card-body">
                        <h4 class="card-title">${product.name}</h4>
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
                            <h5>NTD$ ${product.price}</h5>
                            <button class="btn " onclick="addToCart(${product.id})">
                                <i class="fas fa-cart-plus"></i> 加入購物車
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `
    )
    .join("");

// 加入購物車
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find((p) => p.id === productId);

    cart.push({
        name: product.name,
        price: product.price,
        id: product.id
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge(cart);
}

