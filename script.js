// Download logic + save to localStorage
function downloadFile(url, title) {
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Save downloaded book info in localStorage
  let downloadedBooks = JSON.parse(localStorage.getItem("downloadedBooks")) || [];
  if (!downloadedBooks.some(book => book.url === url)) {
    downloadedBooks.push({ title, url });
    localStorage.setItem("downloadedBooks", JSON.stringify(downloadedBooks));
  }
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

// Redirect to downloaded books
const downloadedBtn = document.getElementById("downloadedBtn");
downloadedBtn.addEventListener("click", function () {
  let downloadedBooks = JSON.parse(localStorage.getItem("downloadedBooks")) || [];
  
  const booksContainer = document.getElementById("booksContainer");
  booksContainer.innerHTML = ""; // clear current books

  if (downloadedBooks.length === 0) {
    booksContainer.innerHTML = "<p>No downloaded books yet.</p>";
    return;
  }

  downloadedBooks.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book-card");
    div.innerHTML = `
      <h3>${book.title}</h3>
      <a href="${book.url}" target="_blank">Open</a>
    `;
    booksContainer.appendChild(div);
  });
});
