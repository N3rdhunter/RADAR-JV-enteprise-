const kpi = document.getElementById('activeTrips');

let valor = 172;

setInterval(() => {

  valor += Math.floor(Math.random() * 3 - 1);

  if(valor < 150){
    valor = 150;
  }

  if(kpi){
    kpi.innerHTML = valor;
  }

},3000);