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
    if (pass === "yes") {
        location.href = "zzz-novel00.html";
    } else {
        alert("パスワードが違います");
    }
}

// ======================
// Enterキーで入室
// ======================

function handleEnter(event) {
    if (event.key === "Enter") {
        checkPassword();
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
// 画像ビューアー（ライトボックス）
// ======================

let currentImg = 0;
let startX = 0;
let endX = 0;

const images = [
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/04.png"
];

function openLightbox(index) {
    currentImg = index;
    document.getElementById("lightbox").style.display = "flex";
    updateLightbox();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function updateLightbox() {
    const img = document.getElementById("lightboxImg");
    img.src = images[currentImg];

    const lbPrev = document.getElementById("lbPrev");
    const lbNext = document.getElementById("lbNext");

    // ボタン表示（ループなし）
    lbPrev.style.display = (currentImg === images.length - 1) ? "none" : "inline";
    lbNext.style.display = (currentImg === 0) ? "none" : "inline";

    // 左右ボタンの動作
    lbPrev.onclick = function() { nextImage(); };
    lbNext.onclick = function() { prevImage(); };
}

// 次の画像
function nextImage() {
    if (currentImg < images.length - 1) {
        currentImg++;
        updateLightbox();
    }
}

// 前の画像
function prevImage() {
    if (currentImg > 0) {
        currentImg--;
        updateLightbox();
    }
}

// 左右クリックで進む/戻る
function nextPrevByClick(e) {
    const img = e.target;
    const rect = img.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width / 2) {
        // 左側クリック → 次の画像
        nextImage();
    } else {
        // 右側クリック → 前の画像
        prevImage();
    }
}

// ======================
// Escキーで閉じる
// ======================

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

// ======================
// スワイプ操作
// ======================

document.addEventListener("touchstart", function(e) {
    startX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", function(e) {
    endX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50;

    if (startX - endX > threshold) {
        prevImage();   // 左スワイプで戻る
    }

    if (endX - startX > threshold) {
        nextImage();   // 右スワイプで進む
    }
}
