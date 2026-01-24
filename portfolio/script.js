var elements = document.getElementsByClassName('item')
var space = document.getElementById('show_here')
var content

function click_event(ctn){
	ctn.style.display = "block"
	/*let clone = ctn.cloneNode(true);
	clone.style.display = 'block'
	space.innerHTML = ''
	space.appendChild(clone)*/
}


for(let element of elements){
	console.log(element, elements)
	element.onclick = () => {
		content = element.querySelector('div')
		click_event(content)		
	}
}