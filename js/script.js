// navbar toggle
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


const text = [
"Platform Engineering Enthusiast",
"Backup and Reliability Engineer",
"Cloud Automation Specialist",
"Troubleshooting Expert"
];

let count = 0;

setInterval(() => {

document.getElementById("typing").innerHTML =
text[count];

count++;

if(count >= text.length){
count = 0;
}

},2000);


// simple smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
  });
});