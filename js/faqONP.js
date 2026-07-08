var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var faqQcontainer = this.nextElementSibling;
    if (faqQcontainer.style.display === "block") {
      faqQcontainer.style.display = "none";
    } else {
      faqQcontainer.style.display = "block";
    }
  });
}




    // Select the faqNavBar element
const faqNavBar = document.getElementById('faqNavBar');

// Get the exact trigger threshold (height of the hero section minus faqNavBar height)
const triggerPoint = 1000 - faqNavBar.offsetHeight;

window.addEventListener('scroll', () => {
    // Check if user has scrolled past the calculated initial bottom placement
    if (window.scrollY >= triggerPoint) {
        faqNavBar.classList.remove('bottom-sticky');
        faqNavBar.classList.add('top-sticky');
    } else {
        faqNavBar.classList.remove('top-sticky');
        faqNavBar.classList.add('bottom-sticky');
    }
});

function highlightActiveBookmark() {
  const currentHash = window.location.hash; // Extracts "#about", "#contact", etc.
  const navLinks = document.querySelectorAll('.navFAQlink');

  navLinks.forEach(link => {
    // Check if the link's href attribute matches the current URL bookmark hash
    if (link.getAttribute('href') === currentHash) {
      link.style.color = '';
      link.style.fontWeight = '';
    } else {
      link.style.color = ''; // Reset others
      link.style.fontWeight = '';
    }
  });
}


    document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navFAQlink");

  const observerOptions = {
    root: null, // Defaults to the browser viewport
    rootMargin: "-10% 0px -60% 0px", // Limits detection area to the top-middle part of the viewport
    threshold: 0, // Triggers as soon as the element hits the margin target
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      // Check if the section has stepped into the specified viewport zone
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        // Clear existing active state from all links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active state to the matching link
        const activeLink = document.querySelector(`.navFAQlink[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Instruct the observer to start tracking all sections
  sections.forEach((section) => observer.observe(section));
});



    // Select the faqBannerImage element
const faqBannerImage = document.getElementById('.faqBannerImage');

// Get the exact trigger threshold (height of the hero section minus faqBannerImage height)
const trigger = 200 - faqBannerImage.offsetHeight;

window.addEventListener('scroll', () => {
    // Check if user has scrolled past the calculated initial bottom placement
    if (window.scrollY >= trigger) {
        faqNavBar.classList.remove('containerStart');
        faqNavBar.classList.add('containerEnd');
    } else {
        faqNavBar.classList.remove('containerEnd');
        faqNavBar.classList.add('containerStart');
    }
});