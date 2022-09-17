
const imgFirst = document.querySelector(".img1");
const imgSecond = document.querySelector(".img2");

var randomNumber1 = (Math.ceil(Math.random()*6));
console.log (randomNumber1);
var randomNumber2 = (Math.ceil(Math.random()*6)); //1-6
console.log (randomNumber2);


if (randomNumber1 === 1) {
    imgFirst.setAttribute("src","images/dice1.png");
} else if (randomNumber1 === 2) {
    imgFirst.setAttribute("src","images/dice2.png");
} else if (randomNumber1 === 3) {
    imgFirst.setAttribute("src","images/dice3.png");
} else if (randomNumber1 === 4) {
    imgFirst.setAttribute("src","images/dice4.png");
} else if (randomNumber1 === 5) {
    imgFirst.setAttribute("src","images/dice5.png");
} else if (randomNumber1 === 6) {
    imgFirst.setAttribute("src","images/dice6.png"); 
} 

if (randomNumber2 === 1) {
    imgSecond.setAttribute("src","images/dice1.png");
} else if (randomNumber2 === 2) {
    imgSecond.setAttribute("src","images/dice2.png");
} else if (randomNumber2 === 3) {
    imgSecond.setAttribute("src","images/dice3.png");
} else if (randomNumber2 === 4) {
    imgSecond.setAttribute("src","images/dice4.png");
} else if (randomNumber2 === 5) {
    imgSecond.setAttribute("src","images/dice5.png");
} else if (randomNumber2 === 6) {
    imgSecond.setAttribute("src","images/dice6.png");

}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "<h1>Ethan Win's</h1>"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "<h1>Ally Win's!</h1>"
} else {
    document.querySelector("h1").innerHTML = "<h1>Tie</h1>"
}
