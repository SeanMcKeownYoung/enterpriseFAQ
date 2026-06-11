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
