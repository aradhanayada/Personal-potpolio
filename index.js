  
const backToTopButton = document.querySelector(".backToTop");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

document.addEventListener('DOMContentLoaded', (event) => {
  const themeToggleBtn = document.getElementById('themeToggle');
  themeToggleBtn.addEventListener('change', function() {
      document.body.classList.toggle('darkTheme');
  });
});

function closeMenu() {
  // select all the links with the class name nav-link
  let navLinks = document.querySelectorAll(".nav-link");
  // loop through each link and add a click event listener
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // select the checkbox with the id check
      let checkbox = document.querySelector("#check");
      // uncheck the checkbox
      checkbox.checked = false;
    });
  });
}

// run the function after the page loads
document.addEventListener("DOMContentLoaded", closeMenu);
