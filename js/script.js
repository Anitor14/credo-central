const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".sidebar-close");
const navBtn = document.querySelector(".nav-btn");

//show Sidebar
navBtn.addEventListener("click", function () {
  //   sidebar.classList.add("show-sidebar");
  sidebar.style.display = "flex";
});
//remove Sidebar
closeBtn.addEventListener("click", function () {
  console.log("this should close the sidebar");
  //   sidebar.classList.remove("show-sidebar");
  sidebar.style.display = "none";
});
