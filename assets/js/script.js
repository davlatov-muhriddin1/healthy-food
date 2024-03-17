// header
const burgerBtn = document.querySelector(".burger__menu"),
  navList = document.querySelector(".nav__list");

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// click nav link active

const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    navLink.forEach((navItem) => {
      navItem.classList.remove("active");
    });
    item.classList.add("active");
    navList.classList.remove("active");
  });
});
