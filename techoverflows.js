const text =
  "Dear Kittu, waise toh yhan pe message likhna tha kyuki mere pe kuch hai nahi toh phele play the song, so ye toh ek birthday ppe karne ke liye socha tha but this was damn tricky and mujhe itna aata bhi nahi toh jhan se idea liya tha uski video dekh dekh ke seekh ke kar raha hu ek baat to hai kuch to baat hai hi mere mein :). HOW's IT ?..........  .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
