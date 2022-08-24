const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

//div se refere aos dois toogle do menu
for (const div of toggle) {
  div.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}
