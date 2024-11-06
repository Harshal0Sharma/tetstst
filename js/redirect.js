if (
  !window.location.pathname.endsWith(".html") &&
  window.location.pathname !== "/"
) {
  const newPath = window.location.pathname + ".html";
  fetch(newPath)
    .then((response) => {
      if (response.ok) {
        window.location.replace(newPath);
      }
    })
    .catch((error) => {
      console.error("Error loading .html page:", error);
    });
}
