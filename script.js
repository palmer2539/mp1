console.log('powered on')
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Hides Old Testament landing page
function OTstartButtonHideHS() {
    let x = document.getElementById("landingPageOT");
    let y = document.getElementById("question1OT");

    let xc1 = document.getElementById("otqac1")
    let xc2 = document.getElementById("otqac2")
    let xc3 = document.getElementById("otqac3")
    let xc4 = document.getElementById("otqac4")
    let xc5 = document.getElementById("otqac5")

    let yi1 = document.getElementById("otqai1")
    let yi2 = document.getElementById("otqai2")
    let yi3 = document.getElementById("otqai3")
    let yi4 = document.getElementById("otqai4")
    let yi5 = document.getElementById("otqai5")
    let yi6 = document.getElementById("otqai6")
    let yi7 = document.getElementById("otqai7")
    let yi8 = document.getElementById("otqai8")
    let yi9 = document.getElementById("otqai9")
    let yi10 = document.getElementById("otqai10")
    let yi11 = document.getElementById("otqai11")
    let yi12 = document.getElementById("otqai12")
    let yi13 = document.getElementById("otqai13")
    let yi14 = document.getElementById("otqai14")
    let yi15 = document.getElementById("otqai15")

    xc1.style.color = "#000000";
    xc2.style.color = "#000000";
    xc3.style.color = "#000000";
    xc4.style.color = "#000000";
    xc5.style.color = "#000000";

    yi1.style.color = "#000000";
    yi2.style.color = "#000000";
    yi3.style.color = "#000000";
    yi4.style.color = "#000000";
    yi5.style.color = "#000000";
    yi6.style.color = "#000000";
    yi7.style.color = "#000000";
    yi8.style.color = "#000000";
    yi9.style.color = "#000000";
    yi10.style.color = "#000000";
    yi11.style.color = "#000000";
    yi12.style.color = "#000000";
    yi13.style.color = "#000000";
    yi14.style.color = "#000000";
    yi15.style.color = "#000000";

    console.log('reset answer colors')

    if (x === "none", y ==="block") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    console.log('hiding landing page worked');
}
////////////////////////////////////
////////////////////////////////////
//On button click, shows 'next button 1'
function showNextButton1OT() {
    let x = document.getElementById("nextButton1OT");

    let xc = document.getElementById("otqac1")

    let yi0 = document.getElementById("otqai1")
    let yi1 = document.getElementById("otqai2")
    let yi2 = document.getElementById("otqai3")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')

    x.style.display = "block";
}
//On button click, shows 'next button 2'
function showNextButton2OT() {
    let x = document.getElementById("nextButton2OT");

    let xc = document.getElementById("otqac2")

    let yi0 = document.getElementById("otqai4")
    let yi1 = document.getElementById("otqai5")
    let yi2 = document.getElementById("otqai6")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')
    
    x.style.display = "block";
}
//On button click, shows 'next button 3'
function showNextButton3OT() {
    let x = document.getElementById("nextButton3OT");

    let xc = document.getElementById("otqac3")

    let yi0 = document.getElementById("otqai7")
    let yi1 = document.getElementById("otqai8")
    let yi2 = document.getElementById("otqai9")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')
    
    x.style.display = "block";
}
//On button click, shows 'next button 4'
function showNextButton4OT() {
    let x = document.getElementById("nextButton4OT");

    let xc = document.getElementById("otqac4")

    let yi0 = document.getElementById("otqai10")
    let yi1 = document.getElementById("otqai11")
    let yi2 = document.getElementById("otqai12")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')
    
    x.style.display = "block";
}
//On button click, shows 'next button 5'
function showNextButton5OT() {
    let x = document.getElementById("nextButton5OT");

    let xc = document.getElementById("otqac5")

    let yi0 = document.getElementById("otqai13")
    let yi1 = document.getElementById("otqai14")
    let yi2 = document.getElementById("otqai15")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')
    
    x.style.display = "block";
}
////////////////////////////////////
////////////////////////////////////
//hides next button, hides question 1, shows question 2
function hideNextButton1OT() {
    let x = document.getElementById("nextButton1OT");
    x.style.display = "none";
    let y = document.getElementById("question1OT");
    let z = document.getElementById("question2OT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 1, showed question 2');
}

//hides next button, hides question 2, shows question 3
function hideNextButton2OT() {
    let x = document.getElementById("nextButton2OT");
    x.style.display = "none";
    let y = document.getElementById("question2OT");
    let z = document.getElementById("question3OT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 2, showed question 3');
}

//hides next button, hides question 3, shows question 4
function hideNextButton3OT() {
    let x = document.getElementById("nextButton3OT");
    x.style.display = "none";
    let y = document.getElementById("question3OT");
    let z = document.getElementById("question4OT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 3, showed question 4');
}

//hides next button, hides question 4, shows question 5
function hideNextButton4OT() {
    let x = document.getElementById("nextButton4OT");
    x.style.display = "none";
    let y = document.getElementById("question4OT");
    let z = document.getElementById("question5OT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 4, showed question 5');
}

//hides next button, hides question 5, shows final screen
function hideNextButton5OT() {
    let x = document.getElementById("nextButton5OT");
    x.style.display = "none";
    let y = document.getElementById("question5OT");
    let z = document.getElementById("finalScreenOT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 4, showed question 5');
}

//Hides final screen and shows landing page
function hideFinalScreenOT() {
    let x = document.getElementById("finalScreenOT");
    let y = document.getElementById("landingPageOT");
    if (x === "none", y ==="block") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    console.log('hiding landing page worked');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Hides New Testament landing page
function NTstartButtonHideHS() {
    let x = document.getElementById("landingPageNT");
    let y = document.getElementById("question1NT");
    let xc1 = document.getElementById("ntqac1")
    let xc2 = document.getElementById("ntqac2")
    let xc3 = document.getElementById("ntqac3")
    let xc4 = document.getElementById("ntqac4")
    let xc5 = document.getElementById("ntqac5")

    let yi1 = document.getElementById("ntqai1")
    let yi2 = document.getElementById("ntqai2")
    let yi3 = document.getElementById("ntqai3")
    let yi4 = document.getElementById("ntqai4")
    let yi5 = document.getElementById("ntqai5")
    let yi6 = document.getElementById("ntqai6")
    let yi7 = document.getElementById("ntqai7")
    let yi8 = document.getElementById("ntqai8")
    let yi9 = document.getElementById("ntqai9")
    let yi10 = document.getElementById("ntqai10")
    let yi11 = document.getElementById("ntqai11")
    let yi12 = document.getElementById("ntqai12")
    let yi13 = document.getElementById("ntqai13")
    let yi14 = document.getElementById("ntqai14")
    let yi15 = document.getElementById("ntqai15")

    xc1.style.color = "#000000";
    xc2.style.color = "#000000";
    xc3.style.color = "#000000";
    xc4.style.color = "#000000";
    xc5.style.color = "#000000";

    yi1.style.color = "#000000";
    yi2.style.color = "#000000";
    yi3.style.color = "#000000";
    yi4.style.color = "#000000";
    yi5.style.color = "#000000";
    yi6.style.color = "#000000";
    yi7.style.color = "#000000";
    yi8.style.color = "#000000";
    yi9.style.color = "#000000";
    yi10.style.color = "#000000";
    yi11.style.color = "#000000";
    yi12.style.color = "#000000";
    yi13.style.color = "#000000";
    yi14.style.color = "#000000";
    yi15.style.color = "#000000";

    console.log('reset answer colors')

    if (x === "none", y ==="block") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    console.log('hiding landing page worked');
}
////////////////////////////////////
////////////////////////////////////
//On button click, shows 'next button 1'
function showNextButton1NT() {
    let x = document.getElementById("nextButton1NT");

    let xc = document.getElementById("ntqac1")

    let yi0 = document.getElementById("ntqai1")
    let yi1 = document.getElementById("ntqai2")
    let yi2 = document.getElementById("ntqai3")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')

    x.style.display = "block";
}
//On button click, shows 'next button 2'
function showNextButton2NT() {
    let x = document.getElementById("nextButton2NT");

    let xc = document.getElementById("ntqac2")

    let yi0 = document.getElementById("ntqai4")
    let yi1 = document.getElementById("ntqai5")
    let yi2 = document.getElementById("ntqai6")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')
    
    x.style.display = "block";
}
//On button click, shows 'next button 3'
function showNextButton3NT() {
    let x = document.getElementById("nextButton3NT");

    let xc = document.getElementById("ntqac3")

    let yi0 = document.getElementById("ntqai7")
    let yi1 = document.getElementById("ntqai8")
    let yi2 = document.getElementById("ntqai9")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')
    
    x.style.display = "block";
}
//On button click, shows 'next button 4'
function showNextButton4NT() {
    let x = document.getElementById("nextButton4NT");

    let xc = document.getElementById("ntqac4")

    let yi0 = document.getElementById("ntqai10")
    let yi1 = document.getElementById("ntqai11")
    let yi2 = document.getElementById("ntqai12")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    console.log('showed correct and incorrect')
    
    x.style.display = "block";
}
//On button click, shows 'next button 5'
function showNextButton5NT() {
    let x = document.getElementById("nextButton5NT");

    let xc = document.getElementById("ntqac5")

    let yi0 = document.getElementById("ntqai13")
    let yi1 = document.getElementById("ntqai14")
    let yi2 = document.getElementById("ntqai15")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    x.style.display = "block";
}
////////////////////////////////////
////////////////////////////////////
//hides next button, hides question 1, shows question 2
function hideNextButton1NT() {
    let x = document.getElementById("nextButton1NT");
    x.style.display = "none";
    let y = document.getElementById("question1NT");
    let z = document.getElementById("question2NT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 1, showed question 2');
}

//hides next button, hides question 2, shows question 3
function hideNextButton2NT() {
    let x = document.getElementById("nextButton2NT");
    x.style.display = "none";
    let y = document.getElementById("question2NT");
    let z = document.getElementById("question3NT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 2, showed question 3');
}

//hides next button, hides question 3, shows question 4
function hideNextButton3NT() {
    let x = document.getElementById("nextButton3NT");
    x.style.display = "none";
    let y = document.getElementById("question3NT");
    let z = document.getElementById("question4NT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 3, showed question 4');
}

//hides next button, hides question 4, shows question 5
function hideNextButton4NT() {
    let x = document.getElementById("nextButton4NT");
    x.style.display = "none";
    let y = document.getElementById("question4NT");
    let z = document.getElementById("question5NT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 4, showed question 5');
}

//hides next button, hides question 5, shows final screen
function hideNextButton5NT() {
    let x = document.getElementById("nextButton5NT");
    x.style.display = "none";
    let y = document.getElementById("question5NT");
    let z = document.getElementById("finalScreenNT");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 4, showed question 5');
}

//Hides final screen and shows landing page
function hideFinalScreenNT() {
    let x = document.getElementById("finalScreenNT");
    let y = document.getElementById("landingPageNT");
    if (x === "none", y ==="block") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    console.log('hiding landing page worked');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Hides Bible History landing page
function HBstartButtonHideHS() {
    let x = document.getElementById("landingPageHB");
    let y = document.getElementById("question1HB");
    let xc1 = document.getElementById("hbqac1")
    let xc2 = document.getElementById("hbqac2")
    let xc3 = document.getElementById("hbqac3")
    let xc4 = document.getElementById("hbqac4")
    let xc5 = document.getElementById("hbqac5")

    let yi1 = document.getElementById("hbqai1")
    let yi2 = document.getElementById("hbqai2")
    let yi3 = document.getElementById("hbqai3")
    let yi4 = document.getElementById("hbqai4")
    let yi5 = document.getElementById("hbqai5")
    let yi6 = document.getElementById("hbqai6")
    let yi7 = document.getElementById("hbqai7")
    let yi8 = document.getElementById("hbqai8")
    let yi9 = document.getElementById("hbqai9")
    let yi10 = document.getElementById("hbqai10")
    let yi11 = document.getElementById("hbqai11")
    let yi12 = document.getElementById("hbqai12")
    let yi13 = document.getElementById("hbqai13")
    let yi14 = document.getElementById("hbqai14")
    let yi15 = document.getElementById("hbqai15")

    xc1.style.color = "#000000";
    xc2.style.color = "#000000";
    xc3.style.color = "#000000";
    xc4.style.color = "#000000";
    xc5.style.color = "#000000";

    yi1.style.color = "#000000";
    yi2.style.color = "#000000";
    yi3.style.color = "#000000";
    yi4.style.color = "#000000";
    yi5.style.color = "#000000";
    yi6.style.color = "#000000";
    yi7.style.color = "#000000";
    yi8.style.color = "#000000";
    yi9.style.color = "#000000";
    yi10.style.color = "#000000";
    yi11.style.color = "#000000";
    yi12.style.color = "#000000";
    yi13.style.color = "#000000";
    yi14.style.color = "#000000";
    yi15.style.color = "#000000";

    console.log('reset answer colors')
    
    if (x === "none", y ==="block") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    console.log('hiding landing page worked');
}
////////////////////////////////////
////////////////////////////////////
//On button click, shows 'next button 1'
function showNextButton1HB() {
    let x = document.getElementById("nextButton1HB");

    let xc = document.getElementById("hbqac1")

    let yi0 = document.getElementById("hbqai1")
    let yi1 = document.getElementById("hbqai2")
    let yi2 = document.getElementById("hbqai3")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";


    x.style.display = "block";
}
//On button click, shows 'next button 2'
function showNextButton2HB() {
    let x = document.getElementById("nextButton2HB");

    let xc = document.getElementById("hbqac2")

    let yi0 = document.getElementById("hbqai4")
    let yi1 = document.getElementById("hbqai5")
    let yi2 = document.getElementById("hbqai6")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    x.style.display = "block";
}
//On button click, shows 'next button 3'
function showNextButton3HB() {
    let x = document.getElementById("nextButton3HB");

    let xc = document.getElementById("hbqac3")

    let yi0 = document.getElementById("hbqai7")
    let yi1 = document.getElementById("hbqai8")
    let yi2 = document.getElementById("hbqai9")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    x.style.display = "block";
}
//On button click, shows 'next button 4'
function showNextButton4HB() {
    let x = document.getElementById("nextButton4HB");

    let xc = document.getElementById("hbqac4")

    let yi0 = document.getElementById("hbqai10")
    let yi1 = document.getElementById("hbqai11")
    let yi2 = document.getElementById("hbqai12")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";

    x.style.display = "block";
}
//On button click, shows 'next button 5'
function showNextButton5HB() {
    let x = document.getElementById("nextButton5HB");
    
    let xc = document.getElementById("hbqac5")

    let yi0 = document.getElementById("hbqai13")
    let yi1 = document.getElementById("hbqai14")
    let yi2 = document.getElementById("hbqai15")

    xc.style.color = "#00FF00";
    yi0.style.color = "#FF0000";
    yi1.style.color = "#FF0000";
    yi2.style.color = "#FF0000";


    x.style.display = "block";
}
////////////////////////////////////
////////////////////////////////////
//hides next button, hides question 1, shows question 2
function hideNextButton1HB() {
    let x = document.getElementById("nextButton1HB");
    x.style.display = "none";
    let y = document.getElementById("question1HB");
    let z = document.getElementById("question2HB");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 1, showed question 2');
}

//hides next button, hides question 2, shows question 3
function hideNextButton2HB() {
    let x = document.getElementById("nextButton2HB");
    x.style.display = "none";
    let y = document.getElementById("question2HB");
    let z = document.getElementById("question3HB");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 2, showed question 3');
}

//hides next button, hides question 3, shows question 4
function hideNextButton3HB() {
    let x = document.getElementById("nextButton3HB");
    x.style.display = "none";
    let y = document.getElementById("question3HB");
    let z = document.getElementById("question4HB");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 3, showed question 4');
}

//hides next button, hides question 4, shows question 5
function hideNextButton4HB() {
    let x = document.getElementById("nextButton4HB");
    x.style.display = "none";
    let y = document.getElementById("question4HB");
    let z = document.getElementById("question5HB");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 4, showed question 5');
}

//hides next button, hides question 5, shows final screen
function hideNextButton5HB() {
    let x = document.getElementById("nextButton5HB");
    x.style.display = "none";
    let y = document.getElementById("question5HB");
    let z = document.getElementById("finalScreenHB");
    if (y === "none", z ==="block") {
        y.style.display = "block";
        z.style.display = "none";
    } else {
        y.style.display = "none";
        z.style.display = "block";
    }
    console.log('hid next button, hid question 4, showed question 5');
}

//Hides final screen and shows landing page
function hideFinalScreenHB() {
    let x = document.getElementById("finalScreenHB");
    let y = document.getElementById("landingPageHB");
    if (x === "none", y ==="block") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    console.log('hiding landing page worked');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////