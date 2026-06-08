const text = [
"Platform Engineering Enthusiast",
"DevOps Engineer",
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
