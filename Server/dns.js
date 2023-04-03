// https://github.com/song940/node-dns
const dns2 = require('dns2');

const { Packet } = dns2;

const server = dns2.createServer({
  udp: true,
  handle: (request, send, rinfo) => {
    const response = Packet.createResponseFromRequest(request);
    const [question] = request.questions;
    if (request.questions[0].name == "hello.hatsune.miku") {
      console.log("# hello")
      const { name } = question;
      response.answers.push({
        name,
        // type: Packet.TYPE.A, // IPv4
        type: Packet.TYPE.AAAA, // IPv6
        class: Packet.CLASS.IN,
        ttl: 300,
        address: '2a02:a45a:4099:1:6eee:cfb9:599:c8bd'
      });
      send(response);
    }
    else if (request.questions[0].name == "kasane.kpn") {
      console.log("# kasane")
      const { name } = question;
      response.answers.push({
        name,
        type: Packet.TYPE.AAAA,
        class: Packet.CLASS.IN,
        ttl: 300,
        address: '2a02:a45a:4099:1:6eee:cfb9:599:c8bd'
      });
      send(response);
    }
  }
});

server.on('request', (request, response, rinfo) => {
  console.log('request', request.header.id, request.questions[0]);
});

server.on('requestError', (error) => {
  console.log('Client sent an invalid request', error);
});

server.on('listening', () => {
  console.log('listening', server.addresses());
});

server.on('close', () => {
  console.log('server closed');
});

server.listen({
  udp: {
    port: 53,
    address: "2a02:a45a:4099:1:6eee:cfb9:599:c8bd",
  },
});

// server.close();
