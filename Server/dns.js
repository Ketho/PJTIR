// https://github.com/song940/node-dns
const dns2 = require('dns2');

const { Packet } = dns2;

const server = dns2.createServer({
  udp: true,
  handle: (request, send, rinfo) => {
    const response = Packet.createResponseFromRequest(request);
    const [question] = request.questions;
    if (request.questions[0].name == "dns.pjtir6.net") {
      console.log("# DNS")
      const { name } = question;
      response.answers.push({
        name,
        // type: Packet.TYPE.A, // IPv4
        type: Packet.TYPE.AAAA, // IPv6
        class: Packet.CLASS.IN,
        ttl: 300,
        address: '2a02:a420:b:1a2::10'
      });
      send(response);
    }
    else if (request.questions[0].name == "hq-pc1") {
      console.log("# HQ-PC1")
      const { name } = question;
      response.answers.push({
        name,
        type: Packet.TYPE.AAAA,
        class: Packet.CLASS.IN,
        ttl: 300,
        address: '2a02:a420:b:1a2::10'
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
    address: "2a02:a420:b:1a2::10",
  },
});

// server.close();
