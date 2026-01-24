const ctx = document.getElementById('chart');

async function getData() {
  const url = "https://www.codewars.com/api/v1/users/WW255";
  let response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  return result
}


async function create_chart(){
  info = {ranks: {languages: {javascript: {score: 30}, python: {score: 300}}}} //await getData()
  const javascript = info.ranks.languages.javascript
  const python = info.ranks.languages.python
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Javascript','Python','Average'],
      datasets: [{
        label: 'Pontuação no codewars',
        data: [javascript.score,python.score,(javascript.score+python.score)/2],
        borderWidth: 1,
        borderColor: '#fce803',
        backgroundColor: '#fcba03'
      }]
    },
    options: {
      scales: {
        r: {
          backgroundColor: "transparent",
          grid: {
            color: "#dbc2fc",
          },
          pointLabels: {
            color: "#fcba03",
            font: {
              size: 14,
              weight: "bold"
            }
          },
          ticks: {
            display: false
            //color: "#transparent",
            //backdropColor: "transparent"
          }
        }
      }
    }
  });
}

create_chart()

//olhar aq dps
//https://www.amcharts.com/demos/radar-chart/