// useful variables
const homePageHistoryAnchor = document.getElementById("history-link-first");
const homePageTeamAnchor = document.getElementById("team-link-first");

// set the appropriate navigation for each link anchor
addEventListener("click", (e) => {
  if (e.target.id === homePageHistoryAnchor.id) {
    homePageHistoryAnchor.href = "#second-container";
  } else {
    homePageTeamAnchor.href = "#third-container";
  }
});
