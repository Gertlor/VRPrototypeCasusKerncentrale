let waterButton = document.getElementById("js--waterButton");
let pressureButton = document.getElementById("js--pressureButton");

let middleScreen = document.getElementById("js---middleScreen");
let leftScreen = document.getElementById("js--leftScreen");
let rightScreen = document.getElementById("js--rightScreen");

waterButton.onmouseenter = () => {
    coolCoreDown();
};


coolCoreDown = () => {
    middleScreen.setAttribute("material", "color: orange");
    middleScreen.setAttribute("text", "value: Pressure too LOW!");

    leftScreen.setAttribute("material", "color: orange");
    leftScreen.setAttribute("text", "value: Check Pressure!");

    rightScreen.setAttribute("material", "color: orange");
    rightScreen.setAttribute("text", "value: Check Pressure!");

    pressureButton.onmouseenter = () => {
        regulatePressure();
    }
};

regulatePressure = () => {

    middleScreen.setAttribute("material", "color: green");
    middleScreen.setAttribute("text", "value: SYSTEMS");

    leftScreen.setAttribute("material", "color: green");
    leftScreen.setAttribute("text", "value: ALL");

    rightScreen.setAttribute("material", "color: green");
    rightScreen.setAttribute("text", "value: WORKING");

    window.setTimeout(resetValues, 7000)

};

resetValues = () => {
    middleScreen.setAttribute("material", "color: red");
    middleScreen.setAttribute("text", "value: CORE TEMPERATURE 300 C!");

    leftScreen.setAttribute("material", "color: red");
    leftScreen.setAttribute("text", "value: WARNING");

    rightScreen.setAttribute("material", "color: red");
    rightScreen.setAttribute("text", "value: NEEDS COOLING");
};