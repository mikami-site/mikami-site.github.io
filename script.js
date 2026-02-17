// ===== ガチャ =====
const gachaBtn = document.getElementById("gachaBtn");
if (gachaBtn) {
    gachaBtn.addEventListener("click", () => {
        const novels = [
            "/novels/novel1.html",
            "/novels/novel2.html",
            "/novels/novel3.html",
            "/novels/novel4.html",
            "/novels/novel5.html"
        ];
        const random = novels[Math.floor(Math.random() * novels.length)];
        location.href = random;
    });
}

/* ===== パスワード ===== */
const enterBtn = document.getElementById("enterBtn");
const passwordInput = document.getElementById("passwordInput");

function attemptLogin() {
    const pass = passwordInput.value;

    if (pass === "0719") {
        location.href = "/zzz-novel00.html";
    } else {
        document.getElementById("errorMsg").textContent =
            "パスワードが違います";
    }
}

if (enterBtn) {
    enterBtn.addEventListener("click", attemptLogin);
}

if (passwordInput) {
    passwordInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            attemptLogin();
        }
    });
}


// ===== 特別小説ページ制御 =====
let currentPage = 1;

function showPage(page) {
    document.querySelectorAll(".page-content").forEach(el => {
        el.classList.add("hidden");
    });
    document.querySelector(`.page-content[data-page="${page}"]`).classList.remove("hidden");

    document.querySelectorAll(".page").forEach(el => {
        el.classList.remove("active");
    });
    document.querySelector(`.page[data-page="${page}"]`).classList.add("active");

    currentPage = page;
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
});

}

document.querySelectorAll(".page").forEach(el => {
    el.addEventListener("click", () => {
        showPage(parseInt(el.dataset.page));
    });
});

const prev = document.getElementById("prevPage");
const next = document.getElementById("nextPage");

if (prev && next) {
    prev.addEventListener("click", () => {
        if (currentPage > 1) showPage(currentPage - 1);
    });
    next.addEventListener("click", () => {
        if (currentPage < 5) showPage(currentPage + 1);
    });
}

// ===== フォント変更 =====

function changeSize(amount) {
    const content = document.getElementById("specialContent");
    let size = parseInt(window.getComputedStyle(content).fontSize);
    size += amount;
    if (size < 14) size = 14;
    if (size > 24) size = 24;
    content.style.fontSize = size + "px";
}
