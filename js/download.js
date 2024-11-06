// Load card information to display
const cardInfo = JSON.parse(localStorage.getItem("cardInfo"));
const cardPreview = document.getElementById("card-preview");
if (cardInfo) {
  cardPreview.style.backgroundColor = cardInfo.color;
  cardPreview.innerHTML = `<h2>${cardInfo.name}</h2><p>${cardInfo.jobTitle}</p>`;
}

// Download functionality (placeholder)
document.getElementById("download-png").addEventListener("click", () => {
  alert("Download as PNG is not implemented yet.");
});
document.getElementById("download-jpg").addEventListener("click", () => {
  alert("Download as JPG is not implemented yet.");
});
document.getElementById("download-pdf").addEventListener("click", () => {
  alert("Download as PDF is not implemented yet.");
});
