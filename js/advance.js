var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 1. Get current date and format it as YYYY-MM-DD
  const today = new date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  
  const formattedDate = `<img src="https://s3.us-east-1.amazonaws.com/twipe-images.advance.net/PugPig+Front+Pages/OR/PortlandAM-${year}-${month}-${day}.jpg"`;

  // 2. Find all elements with the class 'date-target'
  const dateElements = document.querySelectorAll('.date-target');

  // 3. Inject the formatted date into those elements
  dateElements.forEach(element => {
    element.textContent = formattedDate;
  });
});


function highlightActiveBookmark() {
  const currentHash = window.location.hash; // Extracts "#about", "#contact", etc.
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    // Check if the link's href attribute matches the current URL bookmark hash
    if (link.getAttribute('href') === currentHash) {
      link.style.color = '#2A2A2A';
      link.style.fontWeight = 'bold';
    } else {
      link.style.color = ''; // Reset others
      link.style.fontWeight = '';
    }
  });
}


    document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null, // Defaults to the browser viewport
    rootMargin: "-20% 0px -60% 0px", // Limits detection area to the top-middle part of the viewport
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
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
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


