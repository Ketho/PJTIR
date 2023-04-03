// https://github.com/song940/node-dns
const dns2 = require('dns2');

const { Packet } = dns2;

const data = {
	// devices
	'hq-r1.pjtir6.net'   : '2a02:a420:b:110::f:0',
	'hq-r2.pjtir6.net'   : '2a02:a420:b:111::f:0',
	'hq-dls1.pjtir6.net' : '2a02:a420:b:120::f:0',
	'hq-dls2.pjtir6.net' : '2a02:a420:b:121::f:0',
	'hq-als1.pjtir6.net' : '2a02:a420:b:1a0::2',
	'hq-als2.pjtir6.net' : '2a02:a420:b:1a0::3',

	'isp.pjtir6.net'     : '2a02:a420:b:300::f:0',

	'br-r1.pjtir6.net'   : '2a02:a420:b:210::f:0',
	'br-dls1.pjtir6.net' : '2a02:a420:b:220::f:0',
	'br-als1.pjtir6.net' : '2a02:a420:b:2a0::2',

	// hosts
	'hq-pc1.pjtir6.net'  : '2a02:a420:b:1a1::10',
	'dns.pjtir6.net'     : '2a02:a420:b:1a2::10',
	'hq-pc2.pjtir6.net'  : '2a02:a420:b:1a3::10',

	'br-pc1.pjtir6.net'  : '2a02:a420:b:2a1::10',
	'br-pc2.pjtir6.net'  : '2a02:a420:b:2a2::10',
};

const server = dns2.createServer({
	udp: true,
	handle: (request, send, rinfo) => {
		const response = Packet.createResponseFromRequest(request);
		const [question] = request.questions;
		if (data[request.questions[0].name]) {
			console.log("# ", request.questions[0].name)
			const { name } = question;
			response.answers.push({
				name,
				type: Packet.TYPE.AAAA, // IPv6
				class: Packet.CLASS.IN,
				ttl: 300,
				address: data[request.questions[0].name]
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
