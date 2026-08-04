document.getElementById('linkFAQlist').addEventListener('click', function(e) {
  e.preventDefault(); 
  const link = e.target.closest('a');
   if (!link) return;                                              
  const href = link.getAttribute('href');
  navigator.clipboard.writeText(href).then(() => {
  alert('Copied: ' + href);
  });
});
document.addEventListener('click', function (event) {
  const accordionContainer01 = document.querySelector('#accordianFAQtrack01');
  const isClickInside = accordionContainer01.contains(event.target);
  if (!isClickInside) {
    const openPanels = accordionContainer01.querySelectorAll('.collapse.show');
    openPanels.forEach(panel => {
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(panel);
      collapseInstance.hide();
    });
  }
});
document.addEventListener('click', function (event) {
  const accordionContainer02 = document.querySelector('#accordianFAQtrack02');
  const isClickInside = accordionContainer02.contains(event.target);
  if (!isClickInside) {
    const openPanels = accordionContainer02.querySelectorAll('.collapse.show');
    openPanels.forEach(panel => {
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(panel);
      collapseInstance.hide();
    });
  }
});
document.addEventListener('click', function (event) {
  const accordionContainer03 = document.querySelector('#accordianFAQtrack03');
  const isClickInside = accordionContainer03.contains(event.target);
  if (!isClickInside) {
    const openPanels = accordionContainer03.querySelectorAll('.collapse.show');
    openPanels.forEach(panel => {
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(panel);
      collapseInstance.hide();
    });
  }
});
document.addEventListener('click', function (event) {
  const accordionContainer04 = document.querySelector('#accordianFAQtrack04');
  const isClickInside = accordionContainer04.contains(event.target);
  if (!isClickInside) {
    const openPanels = accordionContainer04.querySelectorAll('.collapse.show');
    openPanels.forEach(panel => {
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(panel);
      collapseInstance.hide();
    });
  }
});
 
 let lastScrollTop = 0;
const movingBox = document.getElementById('movingFAQbox');
const triggerHeight = window.innerHeight * 0.90;
window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll < lastScrollTop) {
    movingBox.style.paddingTop = '80px';
  } else {
    movingBox.style.paddingTop = '0px';
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

const faqNavBar = document.getElementById('faqNavBar');
const triggerPoint = 1000 - faqNavBar.offsetHeight;
window.addEventListener('scroll', () => {
    if (window.scrollY >= triggerPoint) {
        faqNavBar.classList.remove('bottom-sticky');
        faqNavBar.classList.add('top-sticky');
    } else {
        faqNavBar.classList.remove('top-sticky');
        faqNavBar.classList.add('bottom-sticky');
    }
});
function highlightActiveBookmark() {
  const currentHash = window.location.hash; 
  const navLinks = document.querySelectorAll('.navFAQlink');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentHash) {
      link.style.color = '';
      link.style.fontWeight = '';
    } else {
      link.style.color = ''; 
      link.style.fontWeight = '';
    }
  });
}
    document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navFAQlink");
  const observerOptions = {
    root: null,
    rootMargin: "-10% 0px -60% 0px", 
    threshold: 0, 
  };
  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks.forEach((link) => link.classList.add("inactive"));
        const activeLink = document.querySelector(`.navFAQlink[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach((section) => observer.observe(section));
});
const faqBannerImage = document.getElementById('.faqBannerImage');
const trigger = 200 - faqBannerImage.offsetHeight;
window.addEventListener('scroll', () => {
    if (window.scrollY >= trigger) {
        faqNavBar.classList.remove('containerStart');
        faqNavBar.classList.add('containerEnd');
    } else {
        faqNavBar.classList.remove('containerEnd');
        faqNavBar.classList.add('containerStart');
    }
});