const main = document.getElementById("main")
const el = document.getElementsByClassName("notification")[0]
const y = el.getBoundingClientRect().y

const url_1 = "wallpaper1.webp"
const url_2 = "wallpaper2.png"

var which = 0


var listening = false
var mouse_y = 0


function change_wallpaper(){
	which += 1
	if(which == 2){
		which = 0
	}
	l = [url_1, url_2]
	main.style.backgroundImage = `url('assets/${l[which]}')`
}

el.addEventListener("mousedown", (event)=>{
	listening = true
	mouse_y = event.clientY
});

window.addEventListener("mouseup", (event)=>{
	if(listening){
		if(mouse_y > event.clientY){
			change_wallpaper()
		}
	}
	listening = false
});