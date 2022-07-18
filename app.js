const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content");
const tabBtn = document.querySelectorAll(".tab-btn");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabBtn.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
