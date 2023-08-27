// useful variables
const homePageHistoryAnchor = document.getElementById("history-link-first");
const homePageTeamAnchor = document.getElementById("team-link-first");

const mountain1Button = document.getElementById("mountain-1-btn");
const mountain2Button = document.getElementById("mountain-2-btn");

// set the appropriate navigation for each link anchor on home page (topmost)
addEventListener("click", (e) => {
  if (e.target === homePageHistoryAnchor) {
    homePageHistoryAnchor.href = "#second-container";
  }
  if (e.target === homePageTeamAnchor) {
    homePageTeamAnchor.href = "#third-container";
  }
});

let activeButton = "Mountain 1";
addEventListener("click", (e) => {
  resetPrevActive(activeButton);

  if (e.target === mountain1Button && activeButton !== "Mountain 1") {
    activeButton = "Mountain 1";
    mountain1Button.style.color = "rgb(187, 187, 192)";
    mountain1Button.style.textDecoration = "underline";
  }
  if (e.target === mountain2Button && activeButton !== "Mountain 2") {
    activeButton = "Mountain 2";
    mountain2Button.style.color = "rgb(187, 187, 192)";
    mountain2Button.style.textDecoration = "underline";
  }
});

const resetPrevActive = (prevActiveButton) => {
  prevActiveButton === "Mountain 1"
    ? (mountain1Button.style.color = "rgb(110, 110, 116)")
    : (mountain2Button.style.color = "rgb(110, 110, 116)");
};
