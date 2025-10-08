// Counter
var na = document.getElementById("na");
var nacount = 0;

function naa() {
    nacount++;
    na.innerText = nacount;
    console.log(nacount);
}

// GooLines messages
var gooLines = [
    "NA",
    "Soid bitte ned as problem sein",
    "Des miasatst scho seid da 1. Klasse Wissen",
    "Jo oba Wieso",
    "😁",
    "in ana Firma",
    "frogts mi ned", 
    "ned reden",
    "hob gsogt onfonga",
    "onfonga!"
];

var gooEl = document.getElementById("gooLines");

function showRandomLine() {
    // Pick a random line
    var line = gooLines[Math.floor(Math.random() * gooLines.length)];
    gooEl.innerText = line;
    // Fade in
    gooEl.style.opacity = 1;
    // Stay visible for 2.5 seconds, then fade out
    setTimeout(() => {
        gooEl.style.opacity = 0;
    }, 2500);
}

// Loop lines every ~3 seconds
setInterval(showRandomLine, 3000);

// Initial call
showRandomLine();
