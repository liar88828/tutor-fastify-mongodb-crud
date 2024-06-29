const items = require('../items')

function itemRoute(fastify, option, done) {

	fastify.get("/items", (req, reply) => {
		//   reply.send(items);
		reply.send({test: "Hello"});
	});

	fastify.get("/items/:id", (req, reply) => {
		const {id} = req.params;

		reply.send(items.find((item) => {
			return item.id === id
		}));
		//   reply.send({ test: "Hello" });
		done()
	});

}

module.exports = itemRoute