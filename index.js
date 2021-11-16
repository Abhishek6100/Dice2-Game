var randomNumber1 = Math.floor(Math.random() * 6) + 1; // images 1 //Random Number between 1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png.jpg"; // images 1 //dice1.png.jpg - dice6.png.jpg

var randomImageSource1 = "images/" + randomDiceImage1; // images 1 //images/dice1.png.jpg - images/dice6.png.jpg


var image1 = document.querySelectorAll("img")[0];  // images 1 random numbers
    image1.setAttribute("src", randomImageSource1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // images 2 //Random Number between 1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png.jpg"; // images 2 //dice1.png.jpg - dice6.png.jpg

var randomImageSource2= "images/" + randomDiceImage2; // image 2 //images/dice1.png.jpg - images/dice6.png.jpg


var image2 = document.querySelectorAll("img")[1]; // images 2 random numbers
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2){

    var heading = document.querySelector("h1");
    heading.innerHTML = "🚩Player 1 Wins!";

}

else if(randomNumber1 < randomNumber2) {

    var heading = document.querySelector("h1");
    heading.innerHTML = "Player 2 Wins!🚩";

}

else{
    var heading=document.querySelector("h1");
    heading.innerHTML= " Draw";
}
