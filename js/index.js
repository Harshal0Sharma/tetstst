const navbarHTML = `
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="generator.html">Generator</a></li>
        <li><a href="cards.html">Cards</a></li>
        <li><a href="edit.html">Edit</a></li>
        <li><a href="download.html">Download</a></li>
    </ul>
</nav>
`;

const footerHTML = `
<footer>
    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
</footer>
`;

function showLandingPage() {
  document.querySelector(".loading").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".landing").style.display = "block";
    // Insert the navbar and footer
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  }, 500);
}

setTimeout(showLandingPage, 3000); // Adjust loading time as needed

document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    window.location.href = "/generator"; // Navigate without .html
  });
