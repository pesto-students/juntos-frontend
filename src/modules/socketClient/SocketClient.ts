import { io, Socket } from "socket.io-client";

class SocketClient {

  socket: Socket
  isSocketConnected: boolean
  
  constructor() {
    this.isSocketConnected = false;
    this.socket = io("http://localhost:5000");
    
    this.checkSocketConnection().then(() => {
      this.isSocketConnected = this.socket.connected
    })
  }

  async checkSocketConnection(): Promise<any>{
    await new Promise((resolve, reject) => {
      this.socket.on('connect', () => {
        console.log('Socket Connected? ', this.socket.connected);
        resolve(this.socket.connected)
      });
    })
  }

  getSocket() : Socket {
    return this.socket;
  }
}

export default SocketClient;


/**
 * Required samples for reference
 * To be removed later
 */

// this.socket = io("http://localhost:5000", {
//     path: "/socket-init/"
// });
// this.socket = io("http://localhost:5000", {transports: ['websocket', 'polling', 'flashsocket']});