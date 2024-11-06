// Redirect if the URL does not end in .html and is not the root path
if (
  !window.location.pathname.endsWith(".html") &&
  window.location.pathname !== "/"
) {
  // Append .html to the path
  const newPath = window.location.pathname + ".html";

  // Use fetch to check if the .html file exists
  fetch(newPath)
    .then((response) => {
      if (response.ok) {
        // Redirect to the .html file if it exists
        window.location.replace(newPath);
      }
    })
    .catch((error) => {
      console.error("Error loading .html page:", error);
    });
}
