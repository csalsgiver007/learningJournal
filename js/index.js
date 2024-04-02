const moreArticlesArray = document.getElementsByClassName("more-article");
const viewMoreBtn = document.getElementById("view-more-btn");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("view-more-btn")) {
    for (let article of moreArticlesArray) {
      article.style.display = "flex";
    }

    viewMoreBtn.style.display = "none";
  }
});
