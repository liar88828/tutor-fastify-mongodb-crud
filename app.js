import {fastify} from "fastify";

const app = fastify({logger: true})

app.get('/get', async (require, reply) => {
	console.log('URL = ', require.url)
	return reply.code(201).send('Object Return')
			.then((reply) => {
				console.log('Response = ', reply)
			})
	// return 'hello world'
})


const opts = {
	schema: {
		body: {
			type: 'object',
			properties: {
				someKey: {type: 'boolean'},
				someOtherKey: {type: 'number'}
			}
		}
	}
}
app.post('/post', opts, async (req, reply) => {
	console.log(typeof req.body)
	console.log( req.body)

	return {hello: 'hello world'}
})


app.delete('/delete', async (require, reply) => {
	return 'hello world'
})
app.put('/put', async (require, reply) => {
	return 'hello world'
})

app.listen(3000, (err, address) => {
	if (err) {
		app.log.error(err)
		process.exit(1)
	}
	app.log.info('server listening in ' + address)
})