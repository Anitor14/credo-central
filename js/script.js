const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar-close");
const navBtn = document.querySelector(".nav-btn");
const navbar = document.querySelector(".navigation-pane");

// adding fixed class to navbar when
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

//show Sidebar
navBtn.addEventListener("click", function () {
  console.log("this should show the sidebar");
  // sidebar.classList.add("show-sidebar");
    sidebar.style.display = "flex";
});
//remove Sidebar
closeBtn.addEventListener("click", function () {
  console.log("this should close the sidebar");
  // sidebar.classList.remove("show-sidebar");
    sidebar.style.display = "none";
});

//see how f