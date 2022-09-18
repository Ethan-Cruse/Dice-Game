
const imgFirst = document.querySelector(".img1");
const imgSecond = document.querySelector(".img2");

var randomNumber1 = (Math.ceil(Math.random()*6)); //1-6
console.log (randomNumber1);
var randomNumber2 = (Math.ceil(Math.random()*6)); //1-6
console.log (randomNumber2);

var randomImg1 = "dice" + randomNumber1 + ".png";
var randomImg2 = "dice" + randomNumber2 + ".png";

var imgSrc1 = "images/" + randomImg1;
var imgSrc2 = "images/" + randomImg2;

imgFirst.setAttribute("src", imgSrc1);
imgSecond.setAttribute("src", imgSrc2);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<h1>Ethan Win's</h1>"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "<h1>Ally Win's!</h1>"
} else {
    document.querySelector("h1").innerHTML = "<h1>Tie</h1>"
}
