import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()
const database = new DatabasePostgres()

server.post('/formlist', async (request, reply)=>{

    const {department, email, message, name, company_name, segment, solution, phone} = request.body

    await database.create({
        name,
        email,
        phone,
        company_name,
        department,
        segment,
        solution,
        message,
    })

    return reply.status(201).send() 
})

server.get('/formlist', async (request, reply)=>{
    const formlist = await database.list()

    return formlist
})

server.delete('/formlist/:id', async (request, reply)=>{ 
    const personID = request.params.id

    await database.delete(personID)

    return reply.status(204).send()
})

server.listen({
    port: 3333
})