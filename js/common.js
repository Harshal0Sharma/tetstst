function insertNavbar() {
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
  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
}

function insertFooter() {
  const footerHTML = `
    <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    </footer>
    `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);
}
