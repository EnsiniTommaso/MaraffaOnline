import {Server} from 'socket.io'
const io = new Server(3000);

console.log('PARTITI')


io.on('connection', (socket)=>{
  socket.emit('hello','world');
  socket.on('howdy',(arg)=>{
    console.log(arg);
  })
})