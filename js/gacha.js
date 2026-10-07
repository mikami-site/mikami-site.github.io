const gachaButton = document.getElementById("gacha-button");

gachaButton.addEventListener("click", function () {

  const randomIndex = Math.floor(
    Math.random() * stories.length
  );

  const selectedStory = stories[randomIndex];

  window.location.href =
    `story.html?id=${selectedStory.id}`;

});
