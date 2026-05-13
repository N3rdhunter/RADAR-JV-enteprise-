const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/status',(req,res)=>{

  res.json({
    online:true,
    system:'RADAR JV',
    websocket:true,
    ai:true
  });

});

app.get('/api/trips',(req,res)=>{

  res.json([

    {
      id:'#226047',
      motorista:'Fernando AP.',
      status:'EMBARQUE'
    },

    {
      id:'#226048',
      motorista:'Adriana Conceição',
      status:'DESTINO'
    }

  ]);

});

app.listen(3001,()=>{
  console.log('RADAR JV API ONLINE');
});