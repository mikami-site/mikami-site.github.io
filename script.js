// =========================
// 小説ガチャ
// =========================
function drawNovel() {
    const novels = [
        "novels/novel1.html",
        "novels/novel2.html",
        "novels/novel3.html"
    ];
    const random = Math.floor(Math.random() * novels.length);
    location.href = novels[random];
}

// =========================
// パスワード
// =========================
function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === "moon") {  // ←好きなパスに変更
        location.href = "zzz-novel00.html";
    } else {
        alert("パスワードが違います");
    }
}

// =========================
// 特別小説ページ管理
// =========================
let currentPage = 1;
let fontSize = 16;
const totalPages = 5;

function changeFontSize(delta) {
    fontSize += delta;
    if (fontSize < 12) fontSize = 12;
    if (fontSize > 24) fontSize = 24;
    document.getElementById("special-text").style.fontSize = fontSize + "px";
}

function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;

    document.querySelectorAll(".page-content").forEach((el, index) => {
        el.style.display = (index === page - 1) ? "block" : "none";
    });

    document.querySelectorAll(".page-numbers span").forEach((el, index) => {
        el.classList.toggle("active", index === page - 1);
    });

    window.scrollTo(0, 0);
}

function nextPage() {
    if (currentPage < totalPages) goToPage(currentPage + 1);
}

function prevPage() {
    if (currentPage > 1) goToPage(currentPage - 1);
}

// =========================
// 画像ビューアー
// =========================
let imageIndex = 0;
const images = [
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/04.png"
];

function showImage(index) {
    if (index < 0 || index >= images.length) return;
    imageIndex = index;
    document.getElementById("viewer-img").src = images[index];
}

function nextImage() {
    if (imageIndex < images.length - 1) {
        showImage(imageIndex + 1);
    }
}

function prevImage() {
    if (imageIndex > 0) {
        showImage(imageIndex - 1);
    }
}
