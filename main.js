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
// xu ly menu respon
var menuBtn = document.querySelector(".menuBtn");
var menuResponsive = document.querySelector(".menuResponsive");
var modal = document.querySelector(".modal");
var modal_overlay = document.querySelector(".modal_overlay");
var closeMenuResponsive = document.querySelector(".closeMenuResponsive");
menuBtn.onclick = (e) => {
  menuResponsive.style.left = 0;
  setTimeout(() => {
    modal.classList.add("active");
    modal_overlay.classList.add("active");
  }, 500);
};
modal.onclick = () => {
  modal_overlay.classList.remove("active");
  modal.classList.remove("active");
  listItemMenuResponsive.style.left = "100%";
  menuResponsive.style.left = "-100%";
  setTimeout(() => {
    primaryMenu.style.display = "block";
    socialIcon.style.display = "flex";
  }, 500);
};
closeMenuResponsive.onclick = () => {
  modal_overlay.classList.remove("active");
  modal.classList.remove("active"); 
  listItemMenuResponsive.style.left = "100%";
  menuResponsive.style.left = "-100%";
  setTimeout(() => {
    primaryMenu.style.display = "block";
    socialIcon.style.display = "flex";
  }, 500);
};

//xu ly click menu responsive
var menuResponsiveItem = document.querySelectorAll(
  ".menuResponsive .listItemMenuRespon~ul li"
);
var listItemMenuResponsive = document.querySelector(".listItemMenuRespon");
var primaryMenu = document.querySelector(
  ".menuResponsive .listItemMenuRespon~ul"
);
var socialIcon = document.querySelector(".social");
var backBtn = document.querySelector(".backBtn");
menuResponsiveItem.forEach((item) => {
  item.onclick = () => {
    listItemMenuResponsive.style.left = 0;
    listItemMenuResponsive.style.visibility = "visible";

    primaryMenu.style.display = "none";
    socialIcon.style.display = "none";
  };
});
backBtn.onclick = () => {
  listItemMenuResponsive.style.visibility = "hidden";
  listItemMenuResponsive.style.left = "100%";

  primaryMenu.style.display = "block";
  socialIcon.style.display = "flex";
};
