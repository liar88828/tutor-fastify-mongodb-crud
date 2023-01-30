import {fastify} from "fastify";

const app = fastify({logger: true})

app.get('/', async (require, reply) => {
	return {hello: ' world'}
})

app.listen(3000, (err, address) => {
	if (err) {
		app.log.error(err)
		process.exit(1)
	}
	app.log.info('server listening in ' + address)
})