
function pictureChange() {
  var randomNumber1 = Math.floor(Math.random() * 2) + 1;
  document.querySelector(".img").setAttribute("src", "images/cat" + randomNumber1 + ".png")
    var audio = new Audio('meow.mp3');
    audio.play();

  if (randomNumber1 === 1) {
    document.querySelector("h1").innerHTML = "GO Cat Go!";
  } else {
    document.querySelector("h1").innerHTML = "Not Today";
  }
}
function buttonAnimaiton() {
   document.querySelector(".btn").classList.add("pressed");
   setTimeout(function(){
      document.querySelector(".btn").classList.remove("pressed");
   }, 100);
}

