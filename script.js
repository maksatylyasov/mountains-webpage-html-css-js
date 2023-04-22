var toggle = true;
const image1 = "/assets/carousel-image1.png";
const image2 = "/assets/carousel-image2.png";
const image3 = "/assets/carousel-image3.png";
const image4 = "/assets/carousel-image4.png";

window.onscroll = function () {
  stickyFunction();
};
var navbar = document.getElementById("navbar");
//   var sticky = navbar.offsetTop;

// let navPos = navbar.getBoundingClientRect().top;
var sticky = navbar.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function tab1Function() {
  document.getElementById("tab1").style.backgroundImage =
    "url('/assets/tab1-photo.png')";
  document.getElementById("schedule2").classList.add("hidden");
  document.getElementById("schedule2").style.display = "none";
  document.getElementById("schedule").style.display = "grid";
  document.getElementById("tab-button2").classList.remove("active");
  document.getElementById("tab-button1").classList.add("active");

  // document.getElementById("tab2").classList.add("hidden");
  // document.getElementById("tab1").classList.remove("hidden");
}
function tab2Function() {
  // document.getElementById("tab1").classList.add("hidden");
  // document.getElementById("tab2").classList.remove("hidden");
  // var tab = document.getElementsByClassName("climb");

  document.getElementById("tab1").style.backgroundImage =
    "url('/assets/tab2-photo.png')";

  document.getElementById("schedule").style.display = "none";
  document.getElementById("schedule2").style.display = "grid";
  document.getElementById("tab-button1").classList.remove("active");
  document.getElementById("tab-button2").classList.add("active");
  document.get;
}
function dotToggle(id) {
  if (id === "dot1") {
    document.getElementById("dot1").classList.add("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot3").classList.remove("active");
  } else if (id === "dot2") {
    document.getElementById("dot2").classList.add("active");
    document.getElementById("dot1").classList.remove("active");
    document.getElementById("dot3").classList.remove("active");
  } else {
    document.getElementById("dot3").classList.add("active");
    document.getElementById("dot2").classList.remove("active");
    document.getElementById("dot1").classList.remove("active");
  }
}

function carouselButton1() {
  dotToggle("dot1");
  document.getElementById("image1").src = image1;
  document.getElementById("image2").src = image2;
  document.getElementById("image3").src = image3;
  document.getElementById("image4").src = image4;
}
function carouselButton2() {
  dotToggle("dot2");
  document.getElementById("image1").src = image4;
  document.getElementById("image2").src = image1;
  document.getElementById("image3").src = image3;
  document.getElementById("image4").src = image2;
}
function carouselButton3() {
  dotToggle("dot3");
  document.getElementById("image1").src = image4;
  document.getElementById("image2").src = image3;
  document.getElementById("image3").src = image2;
  document.getElementById("image4").src = image1;
}

document.getElementById("mountain1").style.display = "none";
document.getElementById("mountain2").style.display = "none";

function tab1Mobile() {
  toggle = !toggle;
  toggle
    ? (document.getElementById("mountain1").style.display = "none")
    : (document.getElementById("mountain1").style.display = "block");
}
function tab2Mobile() {
  toggle = !toggle;
  toggle
    ? (document.getElementById("mountain2").style.display = "none")
    : (document.getElementById("mountain2").style.display = "block");
}
