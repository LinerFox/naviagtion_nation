const menuBars = document.getElementById("menu_bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
// Array of Nav Items
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Navigation Animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide_${direction1}_${i + 1}`,
      `slide_${direction2}_${i + 1}`
    );
  });
}

// ToggleNav Function
function toggleNav() {
  // Toggle MenuBars Open/Closed
  menuBars.classList.toggle("change");
  //   Toggle: Menu Active
  overlay.classList.toggle("overlay_active");
  if (overlay.classList.contains("overlay_active")) {
    // Animate In Overlay
    overlay.classList.replace("overlay_slide_left", "overlay_slide_right");
    // Animate In Items
    navAnimation("out", "in");
  } else {
    // Animate Out Overlay
    overlay.classList.replace("overlay_slide_right", "overlay_slide_left");
    // Animate Out Items
    navAnimation("in", "out");
  }
}
// EVENT LISTENERS
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
