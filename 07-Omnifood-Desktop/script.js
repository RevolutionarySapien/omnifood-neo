const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const h2 = document.querySelector(".header-title");
const summary = document.querySelector(".sumary-paragraph");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  console.log(h2);
  h2.style.opacity = 1;
  summary.style.opacity = 1;
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
    // h2.style.opacity = 1;
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
