// --- Counter ---
var na = document.getElementById("na");
var nacount = 0;

function naa() {
  nacount++;
  na.innerText = nacount;
  console.log("NA count:", nacount);
}

// --- GooLines messages ---
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
  "onfonga!",
  "sessel kneackin aufhean"
];

var gooEl = document.getElementById("gooLines");

function showRandomLine() {
  var line = gooLines[Math.floor(Math.random() * gooLines.length)];
  gooEl.innerText = line;
  gooEl.style.opacity = 1;
  setTimeout(() => {
    gooEl.style.opacity = 0;
  }, 2500);
}

// Starte Schleife alle 3 Sekunden
setInterval(showRandomLine, 3000);
showRandomLine();
