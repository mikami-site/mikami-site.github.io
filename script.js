// ======================
// 小説ガチャ
// ======================

function drawGacha() {
    const novels = [
        "novels/novel1.html",
        "novels/novel2.html",
        "novels/novel3.html"
    ];
    const random = Math.floor(Math.random() * novels.length);
    location.href = novels[random];
}

// ======================
// 小話ページ内ガチャ
// ======================

function redrawGacha() {
    const novels = [
        "novel1.html",
        "novel2.html",
        "novel3.html"
    ];

    const current = location.pathname.split("/").pop();

    // 今表示中のページを除外
    const filtered = novels.filter(n => n !== current);

    const random = Math.floor(Math.random() * filtered.length);

    location.href = filtered[random];
}

// ======================
// パスワード判定
// ======================

function checkPassword() {
    const pass = document.getElementById("password").value;
    if (pass === "0719") {
        location.href = "zzz-novel00.html";
    } else {
        alert("パスワードが違います");
    }
}

// ======================
// 文字サイズ変更
// ======================

let fontSize = 16;

function changeSize(diff) {
    fontSize += diff;
    if (fontSize < 12) fontSize = 12;
    if (fontSize > 24) fontSize = 24;
    document.getElementById("specialText").style.fontSize = fontSize + "px";
}

// ======================
// 特別小説ページ切替
// ======================

let currentPage = 1;
const totalPages = 5;

function showPage(num) {
    if (num < 1 || num > totalPages) return;

    currentPage = num;

    const pages = document.querySelectorAll(".page");
    pages.forEach(p => p.style.display = "none");

    document.getElementById("page" + num).style.display = "block";

    for (let i = 1; i <= totalPages; i++) {
        document.getElementById("num" + i).classList.remove("active");
    }
    document.getElementById("num" + num).classList.add("active");

    // ボタン表示制御
    document.getElementById("prevBtn").style.display =
        (num === 1) ? "none" : "inline-block";

    document.getElementById("nextBtn").style.display =
        (num === totalPages) ? "none" : "inline-block";

    window.scrollTo(0, 0);
}

function nextPage() {
    showPage(currentPage + 1);
}

function prevPage() {
    showPage(currentPage - 1);
}
// ======================
// 画像ビューアー
// ======================

let currentImg = 0;
const images = [
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/04.png"
];

function showImage(index) {
    if (index < 0 || index >= images.length) return;

    currentImg = index;
    document.getElementById("viewerImg").src = images[currentImg];

    // ボタン表示制御（ループなし）
    document.getElementById("leftBtn").style.display =
        (currentImg === images.length - 1) ? "none" : "inline-block";

    document.getElementById("rightBtn").style.display =
        (currentImg === 0) ? "none" : "inline-block";

    window.scrollTo(0, 0);
}

// ← で次へ進む
function nextImage() {
    showImage(currentImg + 1);
}

// → で前へ戻る
function prevImage() {
    showImage(currentImg - 1);
}
