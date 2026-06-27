const screen = document.getElementById("screen")
const content = document.getElementById("content")
const notification = document.getElementsByClassName("notification")[0]


let screen_width = screen.getBoundingClientRect().width
const boundary = 0.30*screen_width

const url_1 = "wallpaper1.webp"
const url_2 = "wallpaper2.png"

var which = 0

var listening_left = false
var listening_right = false

var mouse_x = false
var mouse_y = 0


function change_wallpaper(){
	which += 1
	if(which == 2){
		which = 0
	}
	l = [url_1, url_2]
	screen.style.backgroundImage = `url('assets/${l[which]}')`
}

function swipe_notification(difference){
	if(difference > boundary){
		notification.classList.add("swipe")
	}
	setTimeout(()=>{
		notification.remove()
	},1000);
}

content.addEventListener("mousedown", (event)=>{
	content.classList.add("zoom")
});

content.addEventListener("mouseup", (event)=>{
	content.classList.remove("zoom")
});

screen.addEventListener("mousedown", (event)=>{
	listening_left = true
	mouse_x = event.clientX
	//mouse_y = event.clientY
});

notification.addEventListener("mousedown", (event)=>{
	listening_right = true
	mouse_x = event.clientX
	//mouse_y = event.clientY
	event.stopPropagation()
});

window.addEventListener("mouseup", (event)=>{
	if(listening_left && mouse_x > event.clientX){
		change_wallpaper()
	}
	if(listening_right && mouse_x < event.clientX){
		swipe_notification(event.clientX-mouse_x)
	}
	listening_left = false
	listening_right = false
});

screen.style.opacity = "100"