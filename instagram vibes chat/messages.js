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
	container_div.className = "msg-container my"
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

const startColor = { h: 329, s: 75, l: 56 };		// rosa
const endColor   = { h: 240, s: 100, l: 57 }; // azul

function interpolateColor(start, end, factor) {
  return {
    h: Math.round(start.h + (end.h - start.h) * factor),
    s: Math.round(start.s + (end.s - start.s) * factor),
    l: Math.round(start.l + (end.l - start.l) * factor),
  };
}

function updateColors() {
  const messages = document.querySelectorAll('.msg-container.my');
  const screenHeight = window.innerHeight;

  messages.forEach(msg => {
    const rect = msg.getBoundingClientRect();
    
    // Normaliza a posição (0 = topo da tela, 1 = fundo)
    let factor = rect.top / screenHeight;

    // Limita entre 0 e 1
    factor = Math.max(0, Math.min(1, factor));

    const color = interpolateColor(startColor, endColor, factor);
    
    msg.style.backgroundColor = `hsl(${color.h}, ${color.s}%, ${color.l}%)`;
  });
}

chat.addEventListener('scroll', updateColors);
window.addEventListener('resize', updateColors);

updateColors();