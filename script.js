var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img1").setAttribute('src', 'images/dice' + dice1 + '.png');
document.querySelector("img.img2").setAttribute('src', 'images/dice' + dice2 + '.png');

if (dice1 > dice2) {
	document.querySelector("h1").innerHTML = "player 1st wins !!";
}
else if (dice1 < dice2) {
	document.querySelector("h1").innerHTML = "player 2nd wins !!";
}
else {
	document.querySelector("h1").innerHTML = "Draw Both players wins !!";
}