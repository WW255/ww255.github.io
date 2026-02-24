var input = document.getElementById("main_input");
var chat = document.getElementById("chat");

function addMsg(){
	if(input.value.trim() == ""){
		return;
	}

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
	input.value = ""
	normal()
	updateColors()
}


/* Coisa q fiz vibe coded */
/* Sei sim como q interpola, mas não tava caindo a ficha em como q traduzo a matemática
pro código */

const startColor = { r: 240, g: 0,   b: 115 };  // rosa
const endColor   = { r: 55, g: 151, b: 240 };   // azul

function interpolateColor(start, end, factor) {
  return {
    r: Math.round(start.r + (end.r - start.r) * factor),
    g: Math.round(start.g + (end.g - start.g) * factor),
    b: Math.round(start.b + (end.b - start.b) * factor),
  };
}

function updateColors() {
  const messages = document.querySelectorAll('.msg-container');
  const screenHeight = window.innerHeight;

  messages.forEach(msg => {
    const rect = msg.getBoundingClientRect();
    
    // Normaliza a posição (0 = topo da tela, 1 = fundo)
    let factor = rect.top / screenHeight;

    // Limita entre 0 e 1
    factor = Math.max(0, Math.min(1, factor));

    const color = interpolateColor(startColor, endColor, factor);
    
    msg.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
  });
}

chat.addEventListener('scroll', updateColors);
window.addEventListener('resize', updateColors);

updateColors();