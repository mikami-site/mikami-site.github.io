// URLから作品IDを取得
const params = new URLSearchParams(
  window.location.search
);

const storyId = params.get("id");


// IDに一致する作品を探す
const story = stories.find(
  item => item.id === storyId
);


// 作品が見つからなかった場合
if (!story) {

  document.querySelector(".story").innerHTML = `
    <p>
      作品が見つかりませんでした。
    </p>

    <p>
      <a href="index.html">
        ガチャへ戻る
      </a>
    </p>
  `;

}


// 作品が見つかった場合
else {

  const author = authors[story.author];


  // ブラウザのタブタイトル
  document.title =
    `${story.title} | SSガチャ`;


  // 作品タイトル
  document.getElementById(
    "story-title"
  ).textContent = story.title;


  // テーマ
  document.getElementById(
    "story-theme"
  ).textContent = story.theme;


  // 書き手
  const authorLink =
    document.getElementById(
      "story-author"
    );

  authorLink.textContent =
    author.name;

  authorLink.href =
    author.sns;


  // 本文
  document.getElementById(
    "story-body"
  ).innerHTML = story.body;

}


// ==============================
// 「もう一度引く」ボタン
// ==============================

const retryButton =
  document.getElementById(
    "retry-button"
  );


if (retryButton) {

  retryButton.addEventListener(
    "click",
    function () {

      // 現在表示している作品を除外
      const otherStories =
        stories.filter(
          item => item.id !== storyId
        );


      // 残った作品からランダム抽選
      const randomIndex =
        Math.floor(
          Math.random()
          * otherStories.length
        );


      const selectedStory =
        otherStories[randomIndex];


      // 新しい作品へ移動
      window.location.href =
        `story.html?id=${selectedStory.id}`;

    }
  );

}
