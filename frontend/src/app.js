import {io } from "socket.io-client"
const socket = io('ws://localhost3000')

console.log('PARTITI')

socket.on('hello', (arg)=>{
  console.log(arg)
})

socket.emit('howdy', 'stranger');