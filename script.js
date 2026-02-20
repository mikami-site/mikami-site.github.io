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

function showPage(num) {
    currentPage = num;

    for (let i = 1; i <= 5; i++) {
        document.getElementById("page" + i).style.display = "none";
        document.getElementById("num" + i).classList.remove("active");
    }

    document.getElementById("page" + num).style.display = "block";
    document.getElementById("num" + num).classList.add("active");

    window.scrollTo(0, 0);
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
}

function nextImage() {
    if (currentImg < images.length - 1) {
        showImage(currentImg + 1);
    }
}

function prevImage() {
    if (currentImg > 0) {
        showImage(currentImg - 1);
    }
}
