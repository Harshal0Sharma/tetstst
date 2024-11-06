// Get the card information from local storage
const cardInfo = JSON.parse(localStorage.getItem("cardInfo"));

// Display the card design
if (cardInfo) {
  const cardContainer = document.getElementById("card-container");
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = cardInfo.color;
  card.innerHTML = `<h2>${cardInfo.name}</h2><p>${cardInfo.jobTitle}</p>`;
  cardContainer.appendChild(card);

  // Button to edit the card
  const editButton = document.createElement("button");
  editButton.textContent = "Edit Card";
  editButton.addEventListener("click", () => {
    window.location.href = "/edit"; // Redirect to edit page
  });
  cardContainer.appendChild(editButton);
}
