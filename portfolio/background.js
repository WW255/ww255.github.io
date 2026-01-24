//setTimeout(() => {
//      alert('Alert');
//}, 3000)

//<circle cx="50" cy="50" r="20" fill="red" stroke="black" stroke-width="2" />

const svg_NS = "http://www.w3.org/2000/svg";

var count = 0 
svg_canvas = document.getElementById("svg")

var cached = [100,100,100]

function randomize(){
      new_value = Math.floor(Math.random() * 1000);
      cached.shift()
      cached.push(new_value)
}

randomize()
randomize()
randomize()

let x,y,radius,star //,bloom

while(count < 100){
      x = cached[0]
      y = cached[1]
      radius = cached[2]/250

      if(x < 333){
            x -= x*0.2
            y += y*0.5
      }

      if(x > 333  && x < 666){
            x += x*0.2
      }

      if(x > 666){
            x += x*0.3
            y += 20
      }

      /*if(x+y >= 900){
            bloom = document.createElementNS(svg_NS,"circle")
            bloom.setAttribute("cx",x)
            bloom.setAttribute("cy",y)
            bloom.setAttribute("r",radius*1.5)
            bloom.setAttribute("class","bloom")
            svg_canvas.appendChild(bloom)        
      }*/

      star = document.createElementNS(svg_NS,"circle")
      star.setAttribute("cx",x)
      star.setAttribute("cy",y)
      star.setAttribute("r",radius)

      svg_canvas.appendChild(star)
      count += 1
      randomize()
}