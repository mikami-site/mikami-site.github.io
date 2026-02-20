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
// 画像ビューアー（強化版ライトボックス）
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
    document.getElementById("lightboxImg").src = images[currentImg];

    document.getElementById("lbPrev").style.display =
        (currentImg === 0) ? "none" : "inline";

    document.getElementById("lbNext").style.display =
        (currentImg === images.length - 1) ? "none" : "inline";
}

// ←で進む
function nextImage() {
    if (currentImg < images.length - 1) {
        currentImg++;
        updateLightbox();
    }
}

// →で戻る
function prevImage() {
    if (currentImg > 0) {
        currentImg--;
        updateLightbox();
    }
}

/* ======================
   Escキーで閉じる
====================== */

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

/* ======================
   スワイプ操作
====================== */

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
