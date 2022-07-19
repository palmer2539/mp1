console.log('powered on')


function OTstartButtonToggleHS() {
    var x = document.getElementById("landingPageOT");
    if (x === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    console.log('worked')
}

function NTstartButtonToggleHS() {
  var x = document.getElementById("landingPageNT");
  if (x === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  console.log('worked')
}

function HBstartButtonToggleHS() {
  var x = document.getElementById("landingPageNT");
  if (x === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
  console.log('worked')
}

function OTgo() {
  window.location.href = "/triviaPages/old_testament.html";
  console.log('workedd')
}