const params = new URLSearchParams(
  window.location.search
);

const storyId = params.get("id");


const story = stories.find(
  item => item.id === storyId
);


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

} else {

  const author = authors[story.author];


  document.title =
    `${story.title} | SSガチャ`;


  document.getElementById(
    "story-title"
  ).textContent = story.title;


  document.getElementById(
    "story-theme"
  ).textContent = story.theme;


  const authorLink =
    document.getElementById(
      "story-author"
    );


  authorLink.textContent =
    author.name;

  authorLink.href =
    author.sns;


  document.getElementById(
    "story-body"
  ).innerHTML = story.body;

}


const retryButton =
  document.getElementById(
    "retry-button"
  );


if (retryButton) {

  retryButton.addEventListener(
    "click",
    function () {

      const randomIndex =
        Math.floor(
          Math.random()
          * stories.length
        );


      const selectedStory =
        stories[randomIndex];


      window.location.href =
        `story.html?id=${selectedStory.id}`;

    }
  );

}
