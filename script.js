// =======================
// 🎲 ガチャ
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
// 🔐 パスワード
// =======================
function checkPassword() {

  const pass = "0719";
  const input = document.getElementById("passwordInput").value;

  if (input === pass) {
    localStorage.setItem("auth", "ok");
    location.href = "zzz-novel00.html";
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
// 📖 特別小説ページ
// =======================

let currentPage = 1;
let pages = [];
let fontSize = 17;

window.addEventListener("DOMContentLoaded", function () {

  // ★ 特別小説だけ認証
  if (window.location.pathname.includes("zzz-novel00.html")) {

    if (localStorage.getItem("auth") !== "ok") {
      location.href = "enter.html";
      return;
    }
  }

  // ページ分割がある場合だけ処理
  pages = Array.from(document.querySelectorAll(".page"));

  if (pages.length > 0) {
    pages.forEach(p => p.style.display = "none");
    loadPage();
  }
});


function loadPage() {

  pages.forEach(p => p.style.display = "none");

  if (pages[currentPage - 1]) {
    pages[currentPage - 1].style.display = "block";
  }

  updatePageNumbers();
  window.scrollTo(0, 0);
}


// =======================
// 🔢 ページ番号ナビ
// =======================
function updatePageNumbers() {

  const container = document.getElementById("pageDots");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 1; i <= pages.length; i++) {

    const num = document.createElement("span");
    num.textContent = i;
    num.classList.add("page-number");

    if (i === currentPage) {
      num.style.fontWeight = "bold";
    }

    num.addEventListener("click", function () {
      currentPage = i;
      loadPage();
    });

    container.appendChild(num);
  }
}


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
    p.style.fontFamily = (type === "gothic") ? "sans-serif" : "serif";
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
