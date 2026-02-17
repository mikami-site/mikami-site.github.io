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

    if (enterBtn) {
        enterBtn.addEventListener("click", () => {
            const pass = document.getElementById("passwordInput").value;

            if (pass === "yourpassword") {
                location.href = "/zzz-novel00.html";
            } else {
                document.getElementById("errorMsg").textContent =
                    "パスワードが違います";
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

            // 範囲制御
            if (page < 1) page = 1;
            if (page > totalPages) page = totalPages;

            // 本文切替
            pages.forEach(el => el.classList.add("hidden"));
            document
                .querySelector(`.page-content[data-page="${page}"]`)
                .classList.remove("hidden");

            // ページ番号ハイライト
            pageButtons.forEach(el => el.classList.remove("active"));
            document
                .querySelector(`.page[data-page="${page}"]`)
                .classList.add("active");

            currentPage = page;

            // スクロールを一瞬でトップへ
            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

            updateArrows();
        }

        function updateArrows() {
            if (!prevBtn || !nextBtn) return;

            prevBtn.style.visibility =
                currentPage === 1 ? "hidden" : "visible";

            nextBtn.style.visibility =
                currentPage === totalPages ? "hidden" : "visible";
        }

        // ページ番号クリック
        pageButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const page = parseInt(btn.dataset.page);
                showPage(page);
            });
        });

        // ← →
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

        // 初期化
        showPage(1);
    }

});


/* =========================
   フォント変更（特別小説用）
========================== */

function changeFont(type) {
    const content = document.getElementById("specialContent");
    if (!content) return;

    if (type === "gothic") {
        content.style.fontFamily = "sans-serif";
    } else {
        content.style.fontFamily =
            '"Hiragino Mincho ProN", "Yu Mincho", serif';
    }
}


function changeSize(amount) {
    const content = document.getElementById("specialContent");
    if (!content) return;

    let size = parseInt(
        window.getComputedStyle(content).fontSize
    );

    size += amount;

    if (size < 12) size = 12;
    if (size > 24) size = 24;

    content.style.fontSize = size + "px";
}
