console.log('RADAR JV iniciado');

function atualizarHora(){

  const agora = new Date();

  const hora = agora.toLocaleTimeString('pt-BR');

  const elemento = document.getElementById('clock');

  if(elemento){
    elemento.innerHTML = hora;
  }

}

setInterval(atualizarHora,1000);