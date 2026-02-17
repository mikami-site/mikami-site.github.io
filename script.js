/* ===============================
   🎲 ガチャ機能（index.html）
================================ */

document.addEventListener("DOMContentLoaded", function () {

  const gachaBtn = document.getElementById("gachaBtn");

  if (gachaBtn) {

    gachaBtn.addEventListener("click", function () {

      const novels = [
        "/novels/novel1.html",
        "/novels/novel2.html",
        "/novels/novel3.html",
        "/novels/novel4.html",
        "/novels/novel5.html"
      ];

      const random = Math.floor(Math.random() * novels.length);
      window.location.href = novels[random];

    });

  }

});


/* ===============================
   🔐 パスワード機能（enter.html）
================================ */

function checkPassword() {

  const correct = "0719";
  const input = document.getElementById("passwordInput");

  if (!input) return;

  if (input.value === correct) {

    localStorage.setItem("auth", "ok");
    window.location.href = "/zzz-novel00.html";

  } else {
    alert("パスワードが違います");
  }
}

function handleKey(e) {
  if (e.key === "Enter") checkPassword();
}


/* ===============================
   📖 特別小説制御（zzz-novel00.html）
================================ */

let currentPage = 1;
let pages = [];
let fontSize = 17;

document.addEventListener("DOMContentLoaded", function () {

  pages = Array.from(document.querySelectorAll(".page"));

  if (pages.length === 0) return; // 小説ページ以外は何もしない

  pages.forEach(p => p.style.display = "none");

  loadPage();

});


function loadPage() {

  pages.forEach(p => p.style.display = "none");

  if (pages[currentPage - 1]) {
    pages[currentPage - 1].style.display = "block";
  }

  updateNumbers();
  window.scrollTo(0, 0);
}


function changePage(direction) {

  currentPage += direction;

  if (currentPage < 1) currentPage = 1;
  if (currentPage > pages.length) currentPage = pages.length;

  loadPage();
}


function updateNumbers() {

  const container = document.getElementById("pageNumbers");
  if (!container) return;

  container.innerHTML = "";
