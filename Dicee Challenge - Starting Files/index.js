var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player one wins";
} else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player two wins";
} else {
  document.querySelector("h1").innerHTML = "EQUALS";
}
