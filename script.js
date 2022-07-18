console.log('powered on')

// var OTLandingPageInstance = document.querySelector('landingPageOT')
// var OTLandingPageStyle = getComputedStyle(OTLandingPageInstance)
// console.log(OTLandingPageStyle)

// function startButtonToggleHS() {
//     var OTLandingPageInstance = document.querySelector('.landingPageOT')

//     var OTLandingPageStyle = getComputedStyle(OTLandingPageInstance)

//     console.log(OTLandingPageStyle)

//     var x = OTLandingPageStyle;
//      if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
//     console.log('worked')
// }



function startButtonToggleHS() {
    var x = document.getElementsByClassName("landingPageOT");
    if (x === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    console.log('worked')
}