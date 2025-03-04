document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll(".scroll-effect");

    function scrollHandler() {
        scrollElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                el.classList.add("show");
            }
        });
    }
    
    window.addEventListener("scroll", scrollHandler);
    scrollHandler(); // Initial check
});

var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabName){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function () {
let containers = document.querySelectorAll(".slideshow-container");

containers.forEach(container => {
    let slides = container.getElementsByClassName("slide");
    let slideIndex = 0;

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }

    if (slides.length > 0) {
        slides[0].style.display = "block"; // Show first slide initially
        setTimeout(showSlides, 3000);
    }
});
});

document.querySelector("form").addEventListener("submit", async function (event) {
event.preventDefault(); // Prevent page reload

let form = event.target;
let formData = new FormData(form);

let response = await fetch(form.action, {
method: form.method,
body: formData,
headers: {
  Accept: "application/json",
},
});

let result = await response.json();
let messageBox = document.getElementById("form-status");

if (result.success) {
messageBox.innerHTML = "<p style='color: green;'>Message sent successfully!</p>";
form.reset(); // Clear form after submission
} else {
messageBox.innerHTML = "<p style='color: red;'>Error sending message. Please try again.</p>";
}
});