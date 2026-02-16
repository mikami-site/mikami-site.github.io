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

// ===== パスワード =====
function checkPassword() {
  const pass = "0719"; // ここを変更
  const input = document.getElementById("passwordInput").value;

  if (input === pass) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("novelContent").style.display = "block";
    loadPage();
  } else {
    alert("パスワードが違います");
  }
}

// ===== 特別小説ページ制御 =====
let currentPage = 1;
let fontSize = 16;

const pages = [
  "1ページ目本文...",
  "2ページ目本文...",
  "3ページ目本文...",
  "4ページ目本文...",
  "5ページ目本文..."
];

function loadPage() {
  document.getElementById("novelText").innerHTML =
    "<p>" + pages[currentPage - 1] + "</p>";

  updateDots();
  window.scrollTo(0, 0);
}

function updateDots() {
  const dotContainer = document.getElementById("pageDots");
  dotContainer.innerHTML = "";

  for (let i = 1; i <= pages.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    if (i === currentPage) {
      dot.classList.add("active");
    }

    dotContainer.appendChild(dot);
  }
}


function changePage(direction) {
  currentPage += direction;
  if (currentPage < 1) currentPage = 1;
  if (currentPage > 5) currentPage = 5;
  loadPage();
}

function setFont(type) {
  const text = document.getElementById("novelText");
  if (type === "gothic") {
    text.style.fontFamily = "sans-serif";
  } else {
    text.style.fontFamily = "serif";
  }
}

function changeSize(amount) {
  fontSize += amount;
  if (fontSize < 12) fontSize = 12;
  if (fontSize > 24) fontSize = 24;
  document.getElementById("novelText").style.fontSize =
    fontSize + "px";
}

/* ===== ページ丸 ===== */
.dots {
  display: inline-flex;
  gap: 8px;
  margin: 0 10px;
  vertical-align: middle;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ccc;
  transition: 0.2s;
}

.dot.active {
  background: #222;
}
