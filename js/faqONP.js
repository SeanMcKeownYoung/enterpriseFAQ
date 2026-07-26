// Source - https://stackoverflow.com/a/77817374
// Posted by Unmitigated
// Retrieved 2026-07-25, License - CC BY-SA 4.0

document.addEventListener('click', e => {
  if (e.target.matches('button') && e.target.previousElementSibling?.matches('p'))
    navigator.clipboard.writeText(e.target.previousElementSibling.textContent)
      .then(() => console.log('copied text'), error => console.error('failed to copy', error));
        // Optional: Provide quick feedback to the user
  alert("Copied: " + p);
});


 // DROP NAV BREADCRUMBS WHEN DOTCOM BRANDING COMES TO VIEW ON UP SCROLL //
 
 let lastScrollTop = 0;
const movingBox = document.getElementById('movingFAQbox');
const triggerHeight = window.innerHeight * 0.90;
window.addEventListener('scroll', () => {
  // Get current vertical scroll position
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the user is scrolling UP
  if (currentScroll < lastScrollTop) {
    // Move the div down 50px from its original spot
    movingBox.style.paddingTop = '80px';
  } else {
    // Reset position when scrolling down
    movingBox.style.paddingTop = '0px';
  }

  // Update last scroll position, ensuring it doesn't go below 0
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});



// MAGNIFYING GLASS 2 //

window.addEventListener('scroll', function() {
  // Get how much the user scrolled
  let scrollTop = window.scrollY;
  
  // Get total scrollable height
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // Get scroll progress as a decimal (0 to 1)
  let scrollPercent = scrollTop / docHeight;
  
  // Choose maximum percentage to move up (e.g., 50%)
  let moveUpPercent = scrollPercent * 840;
  
  // Choose maximum percentage to move up (e.g., 50%)
  let moveUpDegrees = scrollPercent * 140;

  // Select the div and move it up
  let myDiv = document.getElementById('sectionFAQImg');
  myDiv.style.transform = 'translateY(-' + moveUpPercent + '%) rotate(' + moveUpDegrees + 'deg)';
});



// BREADCRUMBS SCROLL DOWN //

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


// BREADCRUMBS HORIZONTAL SCROLL SPY //

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
        navLinks.forEach((link) => link.classList.add("inactive"));

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


