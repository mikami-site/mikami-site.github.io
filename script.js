// 🎲 ガチャ
function drawNovel() {
  const novels = [
    "/novels/novel1.html",
    "/novels/novel2.html",
    "/novels/novel3.html",
    "/novels/novel4.html",
    "/novels/novel5.html"
  ];

  const random = Math.floor(Math.random() * novels.length);
  location.href = novels[random];
}


// 🔐 パスワード
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

function handleKey(e) {
  if (e.key === "Enter") checkPassword();
}

// 📖 特別小説制御
let currentPage = 1;
let pages = [];
let fontSize = 17;

document.addEventListener("DOMContentLoaded", function () {

  pages = Array.from(document.querySelectorAll(".page"));
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
  container.innerHTML = "";

  for (let i = 1; i <= pages.length; i++) {

    const span = document.createElement("span");
    span.textContent = i;

    if (i === currentPage) {
      span.classList.add("current-page");
    } else {
      span.classList.add("other-page");
    }

    span.addEventListener("click", function () {
      currentPage = i;
      loadPage();
    });

    container.appendChild(span);
  }
}

function setFont(type) {

  if (type === "gothic") {
    document.body.classList.remove("mincho");
    document.body.classList.add("gothic");
  } else {
    document.body.classList.remove("gothic");
    document.body.classList.add("mincho");
  }
}

function changeSize(amount) {

  fontSize += amount;

  if (fontSize < 12) fontSize = 12;
  if (fontSize > 24) fontSize = 24;

  pages.forEach(p => {
    p.style.fontSize = fontSize + "px";
  });
}

