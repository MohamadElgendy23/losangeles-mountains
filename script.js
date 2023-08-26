// useful variables
const firstDivHistoryAnchor = document.getElementById("history-link-first");
const firstDivTeamAnchor = document.getElementById("team-link-first");

// set the appropriate navigation for each link anchor
addEventListener("click", (e) => {
  if (e.target.id === firstDivHistoryAnchor.id) {
    firstDivHistoryAnchor.href = "#second-container";
  } else {
    firstDivTeamAnchor.href = "#third-container";
  }
});
