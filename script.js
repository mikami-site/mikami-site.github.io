// =======================
// 🎲 ガチャ機能
// =======================
function drawNovel() {
  const novels = [
    "novels/novel1.html",
    "novels/novel2.html",
    "novels/novel3.html",
    "novels/novel4.html",
    "novels/novel5.html"
  ];

  const random = Math.floor(Math.random() * novels.length);
  location.href = novels[random];
}


// =======================
// 🔐 パスワード機能
// =======================
function checkPassword() {
  const pass = "0719";  // ←ここ変更可
  const input = document.getElementById("passwordInput").value;

  if (input === pass) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("novelContent").style.display = "block";
    loadPage();
  } else {
    alert("パスワードが違います");
  }
}

function handleKey(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
}


// =======================
// 📖 特別小説ページ制御
// =======================
let currentPage = 1;
let pages = [];
let fontSize = 17;   // ← これが抜けていました（重要）

window.addEventListener("DOMContentLoaded", function () {

  const pageElements = document.querySelectorAll(".page");
  pages = Array.from(pageElements);

  pages.forEach(p => p.style.display = "none");

  if (pages.length > 0) {
    loadPage();
  }

});

function loadPage() {
  pages.forEach(p => p.style.display = "none");

  if (pages[currentPage - 1]) {
    pages[currentPage - 1].style.display = "block";
  }

  updateDots();
  window.scrollTo(0, 0);
}


// =======================
// ● ページ丸ナビ
// =======================
function updateDots() {

  const dotContainer = document.getElementById("pageDots");
  if (!dotContainer) return;

  dotContainer.innerHTML = "";

  for (let i = 1; i <= pages.length; i++) {

    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (i === currentPage) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", function () {
      currentPage = i;
      loadPage();
    });

    dotContainer.appendChild(dot);
  }
}


// =======================
// ← → ページ移動
// =======================
function changePage(direction) {

  currentPage += direction;

  if (currentPage < 1) currentPage = 1;
  if (currentPage > pages.length) currentPage = pages.length;

  loadPage();
}


// =======================
// 🔤 フォント切替
// =======================
function setFont(type) {

  pages.forEach(p => {
    if (type === "gothic") {
      p.style.fontFamily = "sans-serif";
    } else {
      p.style.fontFamily = "serif";
    }
  });

}


// =======================
// 🔎 サイズ変更
// =======================
function changeSize(amount) {

  fontSize += amount;

  if (fontSize < 12) fontSize = 12;
  if (fontSize > 24) fontSize = 24;

  pages.forEach(p => {
    p.style.fontSize = fontSize + "px";
  });

}
