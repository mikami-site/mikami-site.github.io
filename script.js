document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ガチャ機能
    ========================== */
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


    /* =========================
       パスワード機能
    ========================== */
    const enterBtn = document.getElementById("enterBtn");
    const passwordInput = document.getElementById("passwordInput");

    function attemptLogin() {
        const pass = passwordInput.value;

        if (pass === "yourpassword") {
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


    /* =========================
       特別小説ページ制御
    ========================== */

    const pages = document.querySelectorAll(".page-content");
    const pageButtons = document.querySelectorAll(".page");
    const prevBtn = document.getElementById("prevPage");
    const nextBtn = document.getElementById("nextPage");

    let currentPage = 1;
    const totalPages = 5;

    if (pages.length > 0) {

        function showPage(page) {
