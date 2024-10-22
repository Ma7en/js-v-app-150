// Active Link

let links = document.querySelectorAll(".link");

links.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    links.forEach((ele) => {
      ele.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  })
})

// Open Menu

let hum = document.querySelector(".open-hum");
let menu = document.querySelector(".nav-menu")
let closem = document.querySelector(".close-menu")

hum.addEventListener("click", () => {
  menu.classList.add("active-2")
})

closem.addEventListener("click", () => {
  menu.classList.remove("active-2")
})

// Light On Sections

let main1 = document.querySelectorAll(".wrap .container");
let links2 = document.querySelector(".links");
let link = document.querySelectorAll(".links .link");

function removeActive() {
  link.forEach((ele) => {
    ele.classList.remove("active-3");
    ele.classList.remove("active");
  });
}

window.addEventListener("scroll", () => {
  if (scrollY >= 0) {
    removeActive();
    link[0].classList.add("active-3");
  }
  if (scrollY >= main1[1].offsetTop - 42) {
    removeActive();
    link[1].classList.add("active-3");
  }
  if (scrollY >= main1[2].offsetTop - 42) {
    removeActive();
    link[2].classList.add("active-3");
  }
  if (window.scrollY >= main1[3].offsetTop - 42) {
    removeActive();
    link[3].classList.add("active-3");
  }
  if (scrollY >= main1[4].offsetTop - 42) {
    removeActive();
    link[4].classList.add("active-3");
  }
  if (scrollY >= main1[5].offsetTop - 42) {
    removeActive();
    link[5].classList.add("active-3");
  }
});

// Light On Sections

let main = document.querySelectorAll(".wrap .container");
let slide = document.querySelector(".point-slide");
let slideA = document.querySelectorAll(".point-slide a");

function removeActive2() {
  slideA.forEach((ele2) => {
    ele2.classList.remove("active-4");
  });
}

window.addEventListener("scroll", () => {
  if (scrollY >= 0) {
    removeActive2();
    slideA[0].classList.add("active-4");
  }
  if (scrollY >= main[1].offsetTop - 72) {
    removeActive2();
    slideA[1].classList.add("active-4");
  }
  if (scrollY >= main[2].offsetTop - 72) {
    removeActive2();
    slideA[2].classList.add("active-4");
  }
  if (window.scrollY >= main[3].offsetTop - 72) {
    removeActive2();
    slideA[3].classList.add("active-4");
  }
  if (scrollY >= main[4].offsetTop - 72) {
    removeActive2();
    slideA[4].classList.add("active-4");
  }
  if (scrollY >= main[5].offsetTop - 72) {
    removeActive2();
    slideA[5].classList.add("active-4");
  }
});

// Show Scroll

function scrollTop() {
  const scrollTop = document.getElementById("scroll-up");
  if (this.scrollY >= 650) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

function scrollTopWhats() {
  const scrollTop = document.getElementById("whats");
  if (this.scrollY >= 650) scrollTop.classList.add("show-whats");
  else scrollTop.classList.remove("show-whats");
}
window.addEventListener("scroll", scrollTopWhats);

// Animation Whats

let whats = document.querySelector(".whats");

setInterval(() => {
  whats.classList.toggle("wobble");
}, 1500);