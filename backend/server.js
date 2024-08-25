import Fastify from 'fastify';
import FastifyCors from '@fastify/cors';
import { DatabasePostgres } from './database-postgres.js';
import { sendClientConfirmationEmail, sendAdminNotificationEmail } from './emailService.js';
import dotenv from 'dotenv';

const server = Fastify();
const database = new DatabasePostgres();
dotenv.config();

// Configurar CORS
server.register(FastifyCors, {
  origin: '*',
});

server.post('/formlist', async (request, reply) => {
  const { department, email, message, name, company_name, segment, solution, phone } = request.body;

  await database.create({
    name,
    email,
    phone,
    company_name,
    department,
    segment,
    solution,
    message,
  });

  try {
    // Enviar e-mails
    await sendClientConfirmationEmail({ name, email });
    await sendAdminNotificationEmail(request.body);
    return reply.status(201).send();
  } catch (error) {
    return reply.status(500).send('Erro ao enviar e-mail.');
  }
});

server.get('/formlist', async (request, reply) => {
  const formlist = await database.list();
  return formlist;
});

server.delete('/formlist/:id', async (request, reply) => {
  const formID = request.params.id;
  await database.delete(formID);
  return reply.status(204).send();
});

server.listen({ 
  port: process.env.PORT ?? 3333,
});
