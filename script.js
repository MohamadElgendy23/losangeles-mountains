// useful variables
const homePageHistoryAnchor = document.getElementById("history-link-first");
const homePageTeamAnchor = document.getElementById("team-link-first");
const middlePageHistoryAnchor = document.getElementById("history-link-second");
const middlePageTeamAnchor = document.getElementById("team-link-second");

const footerPageContainer = document.getElementById("third-container");

const mountainButtonsContainer = document.querySelector(
  ".mountain-buttons-container"
);
const mountain1Button = document.getElementById("mountain-1-btn");
const mountain2Button = document.getElementById("mountain-2-btn");

// set the appropriate navigation for each link anchor on home page and middle page
addEventListener("click", (e) => {
  if (
    e.target === homePageHistoryAnchor ||
    e.target === middlePageHistoryAnchor
  ) {
    e.target.href = "#second-container";
  }
  if (e.target === homePageTeamAnchor || e.target === middlePageTeamAnchor) {
    e.target.href = "#third-container";
  }
});

let activeButton = "Mountain 1";
// when user clicks one of the 2 mountain buttons
mountainButtonsContainer.addEventListener("click", (e) => {
  resetPrevActive(activeButton);
  if (e.target === mountain1Button && activeButton !== "Mountain 1") {
    activeButton = "Mountain 1";
    mountain1Button.style.color = "rgb(187, 187, 192)";
    mountain1Button.style.textDecoration = "underline";
    displayMountain1Page();
  }
  if (e.target === mountain2Button && activeButton !== "Mountain 2") {
    activeButton = "Mountain 2";
    mountain2Button.style.color = "rgb(187, 187, 192)";
    mountain2Button.style.textDecoration = "underline";
    displayMountain2Page();
  }
});

const resetPrevActive = (prevActiveButton) => {
  if (prevActiveButton === "Mountain 1") {
    mountain1Button.style.color = "rgb(110, 110, 116)";
    mountain1Button.style.textDecoration = "none";
  } else {
    mountain2Button.style.color = "rgb(110, 110, 116)";
    mountain2Button.style.textDecoration = "none";
  }
};

const displayMountain1Page = () => {};

const displayMountain2Page = () => {};
