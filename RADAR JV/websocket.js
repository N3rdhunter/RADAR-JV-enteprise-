class RealtimeSocket {

  constructor(){
    this.connected = false;
  }

  connect(){

    console.log('Conectando WebSocket...');

    setTimeout(() => {

      this.connected = true;

      console.log('WebSocket conectado');

    },1500);

  }

}

const socket = new RealtimeSocket();

socket.connect();