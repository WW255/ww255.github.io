var input = document.getElementById("main_input");
var chat = document.getElementById("chat");

function addMsg(){
	var align_div = document.createElement('div')
	var container_div = document.createElement('div')
	var text_div = document.createElement('div')
	var p = document.createElement('p')
	p.textContent = input.value
	
	align_div.className = "my-msg"
	container_div.className = "msg-container"
	text_div.className = "msg-text"

	text_div.appendChild(p)
	container_div.appendChild(text_div)
	align_div.appendChild(container_div)

	chat.appendChild(align_div)
}