const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {

const value = searchBar.value.toLowerCase();

document.querySelectorAll(".book-card").forEach(card=>{

const title = card.dataset.title.toLowerCase();

card.style.display =
title.includes(value) ? "block" : "none";

});

});
