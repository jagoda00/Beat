const stickySections = [...document.querySelectorAll(".sticky")];
let images = [
  "https://dr.savee-cdn.com/things/6/5/b9704069a7e5373c30edc6.gif",
  "https://dr.savee-cdn.com/things/6/5/b623de6ab5c80325049a11.png",
  "https://dr.savee-cdn.com/things/6/5/b9704069a7e5373c30edf9.gif",
  "https://dr.savee-cdn.com/things/6/5/b622947d3a82ff3e281b42.png",
];

images.forEach((img) => {
  stickySections.forEach((section) => {
    let image = document.createElement("img");
    image.src = img;
    section.querySelector(".scroll-section").appendChild(image);
  });
});

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".scroll-section");
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}

//Hamburger menu
$(document).ready(function () {
  /* Hamburger menu animation */
  $(".open-button").click(function () {
    $(this).toggleClass("open");
  });

  /* Menu fade/in out on mobile */
  $(".open-button").click(function (e) {
    e.preventDefault();
    $(".nav-links").toggleClass("open");
  });
});

$(document).ready(function () {
  $(".nav-links ul li").click(function () {
    $(".nav-links").toggleClass("open");
    $(".open-button").removeClass("open");
  });
});
