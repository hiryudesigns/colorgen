
// <!-- FLAT COLORS -->
var boxOne = document.querySelectorAll(".square");
var pressOne = document.querySelector(".butt-one");
var textOne = document.querySelectorAll(".coded");

// <!-- GRADIENT COLORS -->
var boxTwo = document.querySelectorAll(".square-two");
var pressTwo = document.querySelector(".butt-two");
var textTwo = document.querySelectorAll(".coded-two");

// the array
var colors = generateRandomColors(9);
var colorsTwo = generateRandomColorsTwo(9);

// 1.
pressOne.addEventListener("click", function(){
	colors = generateRandomColors(9);
	for(var i = 0; i < boxOne.length; i++){
	boxOne[i].style.background = colors[i];
	textOne[i].textContent = colors[i];
}
});

pressTwo.addEventListener("click", function(){
	colorsTwo = generateRandomColorsTwo(9);
	for(var i = 0; i < boxTwo.length; i++){
	boxTwo[i].style.background = colorsTwo[i];
	textTwo[i].textContent = colorsTwo[i]+");";
	}
});


// 1.
for(var i = 0; i < boxOne.length; i++){
	boxOne[i].style.background = colors[i];
	textOne[i].textContent = colors[i];
	}

// 2.
for(var i = 0; i < boxTwo.length; i++){
		boxTwo[i].style.background = colorsTwo[i];
		textTwo[i].textContent = colorsTwo[i]+");";
	}

// <!-- FUNCTIONS -->
// 1.
function changeColors(color){
	for(var i = 0; i < boxOne.length; i++){
		boxOne[i].style.background = color;
	}
}

function changeColorsTwo(colorTwo){
	for(var i = 0; i < boxTwo.length; i++){
		boxTwo[i].style.background = colorTwo;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function pickColorTwo(){
	var randomTwo = Math.floor(Math.random() * colorsTwo.length);
	return colorsTwo[randomTwo];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}

// <!-- GRADIENT COLORS -->
function generateRandomColorsTwo(num2){
	var arrTwo = [];
	for (var i = 0; i < num2; i++){
		arrTwo.push(randomColorTwo());
	}
	return arrTwo;
}

function randomColorTwo(){
	var deg = Math.floor(Math.random() * 361);
	var rgb = randomColor();
	var rgb2 = randomColor();
	return "linear-gradient(-"+deg+"deg, "+rgb+", "+rgb2;
	
}