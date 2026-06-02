console.log("Jai Bajrang Bali...");
let menuIcon = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
     sections.forEach((sec) => {
          let top = window.scrollY;
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute("id");

          if (top >= offset && top < offset + height) {
               navlinks.forEach((links) => {
                    links.classlist.remove("active");
                    document
                         .querySelector("header nav a  [href*=" + id + "]")
                         .classlist.add("active");
               });
          }
     });
};

menuIcon.onclick = () => {
     menuIcon.classList.toggle("bx-x");
     navbar.classList.toggle("active");
};

document.addEventListener('DOMContentLoaded', function () {
     // Your code that caused the error is placed here
     const element = document.getElementById('my-element');
     if (element) {
          element.onclick = function () {
               // ...
          };
     }
});

// Navbar
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
     mobileMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
     mobileMenu.classList.add('hidden');
});

// Menu Button Show
function showMenubar() {
     const menubar = document.querySelector(".menubar");
     menubar.style.display = "flex";
}

// Menu Button remove
function hideMenubar() {
     const menubar = document.querySelector(".menubar");
     menubar.style.display = "none";
}



