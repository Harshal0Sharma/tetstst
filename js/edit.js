// Load existing card information
const cardInfo = JSON.parse(localStorage.getItem("cardInfo"));
if (cardInfo) {
  document.getElementById("edit-name").value = cardInfo.name;
  document.getElementById("edit-job-title").value = cardInfo.jobTitle;
  document.getElementById("edit-color").value = cardInfo.color;
}

// Handle form submission
document.getElementById("edit-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  const updatedCardInfo = {
    name: document.getElementById("edit-name").value,
    jobTitle: document.getElementById("edit-job-title").value,
    color: document.getElementById("edit-color").value,
  };

  // Update card information in local storage
  localStorage.setItem("cardInfo", JSON.stringify(updatedCardInfo));
  // Redirect to download page
  window.location.href = "/download";
});
