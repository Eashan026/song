const text =
  "Dear Kittu, First press tap to play :) abhi i am learning this otherwise gaana apne aap play hojata....waise to ye birthday pe karna the but this was damn tricky bhai abhi bhu thorda unorganised tyoe hai utna bhaidya nahi hai but thik hai baki u can enjoy the song. aur kuch nahi hai likhne ko :). HOW's IT ?........  .";

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
