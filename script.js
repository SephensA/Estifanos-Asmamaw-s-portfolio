// Scroll animation for profile picture
const profilePic = document.getElementById("profile-pic");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    profilePic.classList.add("scrolled");
  } else {
    profilePic.classList.remove("scrolled");
  }
});

// Update active nav link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});