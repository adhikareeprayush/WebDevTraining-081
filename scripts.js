// let h2s = document.querySelectorAll("h2");
// for (let i = 0; i < h2s.length; i++) {
//   h2s[i].style.color = "green";
// }

let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
