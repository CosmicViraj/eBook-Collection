// Download logic
function downloadFile(url) {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Search/filter books
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", function () {
  const searchValue = searchBar.value.toLowerCase();
  const books = document.querySelectorAll(".book-card");

  books.forEach(book => {
    const title = book.getAttribute("data-title").toLowerCase();
    if (title.includes(searchValue)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});
