

var randomNumber1 = Math.floor(Math.random() * 2) +1;
document.querySelector(".img").setAttribute("src","images/cat" + randomNumber1 + ".png")

if (randomNumber1 === 1 ) {
document.querySelector("h1").innerHTML = "GO Cat Go!!!";
}
else {
document.querySelector("h1").innerHTML = "Not Today";
}
