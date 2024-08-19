// server.js
import Fastify from 'fastify';
import FastifyCors from '@fastify/cors';
import { DatabasePostgres } from './database-postgres.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const server = Fastify();
const database = new DatabasePostgres();
dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

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

  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirmação de Recebimento do Formulário Magic',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; border: 2px solid #A211EB; border-radius: 8px;">
        <div style="background-color: #A211EB; padding: 20px; text-align: center;">
          <h1 style="color: #FFFFFF;">• Estúdio Magic •</h1>
        </div>
        <div style="padding: 20px;">
          <p style="font-size: 16px;">Prezado(a) <strong>${name}</strong>,</p>
          <p style="font-size: 16px;">
            Agradecemos por preencher o formulário de contato. Recebemos suas informações e nossa equipe analisará sua solicitação com a máxima atenção.
          </p>
          <p style="font-size: 16px;">
            Em breve, entraremos em contato para dar continuidade ao atendimento. Caso precise de mais informações ou queira fazer alterações nos dados fornecidos, por favor, responda a este e-mail ou entre em contato pelo nosso telefone.
          </p>
          <p style="font-size: 16px;">Atenciosamente,</p>
          <p style="font-size: 16px;"><strong>Estúdio Magic</strong></p>
          <p style="font-size: 16px;">(32) 9 9114 6046</p>
          <p style="font-size: 16px;">
            CRITT - Centro Regional de Inovação e Transferência de Tecnologia. Campus Universitário
          </p>
        </div>
        <div style="background-color: #A211EB; padding: 20px; text-align: center; height: 20px;"></div>
      </div>
    `,
  })
  .then((info) => {
      console.log(info);
      transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_ADMIN,
      subject: 'Novo Formulario recebido',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; border: 2px solid #431055; border-radius: 8px;">
          <div style="background-color: #431055; padding: 20px; text-align: center;">
            <h1 style="color: #FFFFFF;">• ADM Magic •</h1>
          </div>
          <div style="padding: 20px;">
            <p style="font-size: 16px;">Prezado(a) <strong>ADMIN</strong>,</p>
            <p style="font-size: 16px;">
              Um novo formulário foi preenchido no Estúdio Magic. Seguem os dados:
              <ul>
                <li><strong>Nome:</strong> ${name}</li>
                <li><strong>E-mail:</strong> ${email}</li>
                <li><strong>Telefone:</strong> ${phone}</li>
                <li><strong>Empresa:</strong> ${company_name}</li>
                <li><strong>Departamento:</strong> ${department}</li>
                <li><strong>Segmento:</strong> ${segment}</li>
                <li><strong>Solução:</strong> ${solution}</li>
                <li><strong>Mensagem:</strong> ${message}</li>
              </ul>
            </p>
            <p style="font-size: 16px;">
              Por favor, entre em contato com o cliente o mais rápido possível, e se precisar verifique o /admin do site original.
            </p>
          </div>
          <div style="background-color: #431055; padding: 20px; text-align: center; height: 20px;"></div>
        </div>`
      ,
    })
    .then((info) => {
      console.log(info);
    })
  }).catch((error) => {
    console.log(error);
  });

  return reply.status(201).send();
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
