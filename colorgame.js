var colors=colorGenerator(6);

var squares=document.querySelectorAll(".square");
for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
}


var playagain=document.querySelector(".playagain");
var header=document.querySelector("#header");
var tryagain=document.querySelector(".tryagain")
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

var pickedColor=randomF();
var value=document.querySelector(".value");
value.textContent=pickedColor;

hard.classList.add("selected");
for(var j=0;j<squares.length;j++){

	squares[j].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor==pickedColor){
			changeColors(pickedColor);
			tryagain.textContent="correct";
			playagain.textContent="play again";
		}
		else{
			this.style.background="black";
			// console.log(clickedColor);
			tryagain.textContent="try again";
			console.log("try again!!");

		}
	})
}


playagain.addEventListener("click",function(){	
	colors=colorGenerator(6);
	pickedColor=randomF();
	value.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}
	playagain.textContent="New Colours";
	tryagain.textContent="";
})






easy.addEventListener("click",function(){
	difficulty(3);
})




hard.addEventListener("click",function(){
	difficulty(6);
})


var color;
function changeColors(color){
	for(var j=0;j<squares.length;j++){
		squares[j].style.background=color;
		header.style.background=color;
	}
}


function randomF(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}



function colorGenerator(num){

	var arr=[];
	for(var i=0;i<num;i++){
		var rgb=randomColor();
		arr.push(rgb);
	}

	return arr;
}



function randomColor(){

	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	
	return "rgb("+ r + ", " + g +", " + b +")";
}

function difficulty(num){


	colors=colorGenerator(num);
	pickedColor=randomF();
	value.textContent=pickedColor;
	for(var i=0;i<colors.length;i++){
		squares[i].style.background=colors[i];
	}
	for(var i=5;i>=colors.length;i--){
		squares[i].style.background="black";
	}

	if(num===3){
		easy.classList.add("selected");
		hard.classList.remove("selected");

		remove();
		
	}
	if(num===6){
		hard.classList.add("selected");
		easy.classList.remove("selected");
		add();
	}
	tryagain.textContent="";
	playagain.textContent="New Colours";
	header.style.background="steelblue";
}

function remove(){
	for(var i=3;i<squares.length;i++){
		squares[i].remove();
	}
}


function remove(){
	for(var i=3;i<squares.length;i++){
		squares[i].style.display="none";
	}

}

function add(){
	for(var i=3;i<squares.length;i++){
		squares[i].style.display="block";
	}

}
