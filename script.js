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

            if (page < 1) page = 1;
            if (page > totalPages) page = totalPages;

            pages.forEach(el => el.classList.add("hidden"));
            document
                .querySelector(`.page-content[data-page="${page}"]`)
                .classList.remove("hidden");

            pageButtons.forEach(el => el.classList.remove("active"));
            document
                .querySelector(`.page[data-page="${page}"]`)
                .classList.add("active");

            currentPage = page;

            window.scrollTo(0, 0);

            updateArrows();
        }

        function updateArrows() {
            if (!prevBtn || !nextBtn) return;

            prevBtn.style.visibility =
                currentPage === 1 ? "hidden" : "visible";

            nextBtn.style.visibility =
                currentPage === totalPages ? "hidden" : "visible";
        }

        pageButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                showPage(parseInt(btn.dataset.page));
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener("click", () => {
                showPage(currentPage - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", () => {
                showPage(currentPage + 1);
            });
        }

        showPage(1);
    }


    /* =========================
       フォントサイズ表示
    ========================== */

    const sizeDisplay = document.getElementById("fontSizeDisplay");
    const content = document.getElementById("specialContent");

    if (content && sizeDisplay) {
        const initialSize = parseInt(
            window.getComputedStyle(content).fontSize
        );
        sizeDisplay.textContent = initialSize + "px";
    }

});


/* =========================
   フォントサイズ（スライダー式）
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById("fontSizeSlider");
    const sizeDisplay = document.getElementById("fontSizeDisplay");
    const content = document.getElementById("specialContent");

    if (slider && content) {

        // 初期反映
        content.style.fontSize = slider.value + "px";
        if (sizeDisplay) {
            sizeDisplay.textContent = slider.value + "px";
        }

        slider.addEventListener("input", () => {
            content.style.fontSize = slider.value + "px";

            if (sizeDisplay) {
                sizeDisplay.textContent = slider.value + "px";
            }
        });
    }

});
