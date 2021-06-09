// up to top
const upElement = document.querySelector(".back-to-top");

window.onscroll = () => {
  if (window.pageYOffset !== 0) {
    upElement.classList.add("visible");
  } else {
    upElement.classList.remove("visible");
  }
};
upElement.onclick = () => {
  window.scrollTo(0, 0);
};
// // dropdown item
let save;
let itemEle = document.querySelectorAll(".topBanner_item");
itemEle.forEach((item, index, arr) => {
  item.addEventListener("click", function first(e) {
    var id = this.id;
    if (save !== this.id) {
      for (var i = 0; i < itemEle.length; i++) {
        itemEle[i].querySelector(".listItem").classList.remove("active");
        itemEle[i].classList.remove("addColor");
        itemEle[i].querySelector(".fa-chevron-down").classList.remove("remove");
        itemEle[i].querySelector(".fa-chevron-up").classList.add("remove");
      }
    }

    show(id);
  });
});

window.addEventListener("click", (e) => {
  console.log(e.target.matches(".topBanner_item"));
  if (
    !e.target.matches(".topBanner_item") &&
    !e.target.matches(".dropDown") &&
    !e.target.matches(".fa")
  ) {
    for (var i = 0; i < itemEle.length; i++) {
      itemEle[i].querySelector(".listItem").classList.remove("active");
      itemEle[i].classList.remove("addColor");
      itemEle[i].querySelector(".fa-chevron-down").classList.remove("remove");
      itemEle[i].querySelector(".fa-chevron-up").classList.add("remove");
    }
  }
});

function show(id) {
  document.getElementById(id).classList.toggle("addColor");
  document
    .getElementById(id)
    .querySelector(".fa-chevron-down")
    .classList.toggle("remove");
  document
    .getElementById(id)
    .querySelector(".fa-chevron-up")
    .classList.toggle("remove");
  document
    .getElementById(id)
    .querySelector(".listItem")
    .classList.toggle("active");
  save = id;
}