const menuBars = document.getElementById("menu_bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

// ToggleNav Function
function toggleNav() {
  // Toggle MenuBars Open/Closed
  menuBars.classList.toggle("change");
  //   Toggle: Menu Active
  overlay.classList.toggle("overlay_active");
  if (overlay.classList.contains("overlay_active")) {
    // Animate In Overlay
    overlay.classList.remove("overlay_slide_left");
    overlay.classList.add("overlay_slide_right");
  } else {
    // Animate Out Overlay
    overlay.classList.remove("overlay_slide_right");
    overlay.classList.add("overlay_slide_left");
  }
}
// EVENT LISTENERS
menuBars.addEventListener("click", toggleNav);
nav1.addEventListener("click", toggleNav);
nav2.addEventListener("click", toggleNav);
nav3.addEventListener("click", toggleNav);
nav4.addEventListener("click", toggleNav);
nav5.addEventListener("click", toggleNav);
