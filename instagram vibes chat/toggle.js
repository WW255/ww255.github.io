var input = document.getElementById("main_input");
var left_side = document.getElementById("left_side");
var right_side = document.getElementById("right_side");

function typing(){
	left_side.className = "magnifying_glass";
	left_side.children[0].src = "assets/magnifying_glass.svg";
	right_side.children[0].style.display = "none";
	right_side.children[1].style.display = "flex";
	right_side.children[1].children[0].children[0].style.animation = "spin 0.1s linear"	
}

function normal(){
	left_side.className = "camera";
	left_side.children[0].src = "assets/camera.svg";
	right_side.children[0].style.display = "flex";
	right_side.children[1].style.display = "none";
}

input.addEventListener("input",()=>{
	typing()
});


input.addEventListener('input', (e) => {
    if (e.target.value.trim() === '') {
    	normal()
    }
});

input.addEventListener('keydown', function(e) {
    if (event.key === 'Enter') {
    	addMsg()
    }
});