const el = document.getElementsByClassName("notification")[0]
const y = el.getBoundingClientRect().y


var listening = false
var mouse_y = 0

el.addEventListener("mousedown", (event)=>{
	listening = true
	mouse_y = event.clientY
});

window.addEventListener("mouseup", (event)=>{
	if(listening){
		if(mouse_y > event.clientY){
			//
		}
	}
	listening = false
});