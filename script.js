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
  const pass = "0719";
  const input = document.getElementById("passwordInput").value;

  if (input === pass) {
    location.href = "zzz-novel00.html";
  } else {
    alert("パスワードが違います");
  }
}



// =======================
// 📖 特別小説ページ制御
// =======================
let currentPage = 1;
let pages = [];
let fontSize = 17;

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
// ● ページ切り替え
// =======================
function updateDots() {

  const container = document.getElementById("pageDots");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 1; i <= pages.length; i++) {

    const number = document.createElement("span");
    number.textContent = i;
    number.classList.add("page-number");

    if (i === currentPage) {
      number.classList.add("active");
    }

    number.addEventListener("click", function () {
      currentPage = i;
      loadPage();
    });

    container.appendChild(number);
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
