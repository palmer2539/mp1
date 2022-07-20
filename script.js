console.log('powered on')

//Old Testament start button hide
function OTstartButtonToggleHS() {
    var x = document.getElementById("landingPageOT");
    if (x === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    console.log('worked')
}

//New Testament start button hide
function NTstartButtonToggleHS() {
  var x = document.getElementById("landingPageNT");
  if (x === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  console.log('worked')
}

//Bible History start button hide
function HBstartButtonToggleHS() {
  var x = document.getElementById("landingPageHB");
  if (x === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  console.log('worked')
}

// //function mapping button to trivia selection page
// function OTgo() {
//   window.location.href = "/triviaPages/old_testament.html";
//   console.log('workedd')
// }

//functions delaying element loading on initial welcome page
const loadingDelay0 = document.getElementById('h2page0');

const loadingDelay1 = document.getElementById('h2page01');

const loadingDelay2 = document.getElementById('h2page02');

const loadingDelayEnterButton = document.getElementById('enterButton')

setTimeout(() => {
    loadingDelay0.style.visibility = 'visible';
}, 1000);

setTimeout(() => {
    loadingDelay1.style.visibility = 'visible';
}, 2500);

setTimeout(() => {
    loadingDelay2.style.visibility = 'visible';
}, 4000);

setTimeout(() => {
    loadingDelayEnterButton.style.visibility = 'visible';
}, 5500);