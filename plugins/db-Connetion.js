const fastifyPlugin = require("fastify-plugin")
// const fastify = require("fastify");

const dbConnetion = async (fastify,option) => {
	fastify.register(require('fastify-mongodb'), {
		url: 'mongodb://localhost:27017/worktime'
	})
                  }
module.exports = fastifyPlugin(dbConnetion)