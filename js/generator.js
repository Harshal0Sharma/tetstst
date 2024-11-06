document.addEventListener("DOMContentLoaded", () => {
  insertNavbar();
  insertFooter();

  document.getElementById("card-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const jobTitle = document.getElementById("job-title").value;
    const color = document.getElementById("color").value;
    localStorage.setItem("cardInfo", JSON.stringify({ name, jobTitle, color }));
    window.location.href = "/cards";
  });
});
