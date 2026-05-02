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

/* Stars */
/* Given that A is the position of the first star, B is the middle of the screen,
C is the angle -5, D is the position of any other star, solve for X
A-B -> C
D-B -> X */
/* (D-B)*C = (A-B)*X */

const factor = 5

let stars = document.getElementById('stars');
let first_star = stars.children[0]

let body_rect = document.body.getBoundingClientRect()
let half_of_screen = body_rect.width/2



for(element of stars.children){
	var rect = element.getBoundingClientRect() 
	var relative_pos = rect.x - half_of_screen
	var multiple = relative_pos*factor
	var division = multiple/first_star.x
	element.style.setProperty('--hover-angle',String(division)+"deg")
}