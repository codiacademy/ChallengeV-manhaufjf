// emailService.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

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

export const sendClientConfirmationEmail = async ({ name, email }) => {
    try {
        await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmação de Recebimento do Formulário Magic',
        html: `
            <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
              <head>
                <meta charset="UTF-8">
                <meta content="width=device-width, initial-scale=1" name="viewport">
                <meta name="x-apple-disable-message-reformatting">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta content="telephone=no" name="format-detection">
                <title></title>
              </head>
              <body class="body">
                <div dir="ltr" class="es-wrapper-color">
                  <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper">
                    <tbody>
                      <tr>
                        <td valign="top" class="esd-email-paddings">
                          <table cellpadding="0" cellspacing="0" align="center" class="esd-header-popover es-header">
                            <tbody>
                              <tr>
                                <td align="center" class="esd-stripe">
                                  <table align="center" cellpadding="0" cellspacing="0" width="600" class="es-header-body" style="background-color:transparent">
                                    <tbody>
                                      <tr>
                                        <td align="left" bgcolor="#bc92e1" class="esd-structure es-p20" style="border-radius:10px 10px 0px 0px;background-color:#bc92e1">
                                          <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                              <tr>
                                                <td width="560" valign="top" align="center" class="es-m-p0r esd-container-frame">
                                                  <table cellpadding="0" cellspacing="0" width="100%" style="border-radius:1px;border-collapse:separate">
                                                    <tbody>
                                                      <tr>
                                                        <td align="left" class="esd-block-text">
                                                          <p>
                                                            <br>
                                                          </p>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table cellspacing="0" cellpadding="0" align="center" class="es-content">
                            <tbody>
                              <tr>
                                <td align="center" class="esd-stripe">
                                  <table width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="border-left:1px solid #4c8aa7;border-right:1px solid #4c8aa7;background-color:#ffffff">
                                    <tbody>
                                      <tr>
                                        <td align="left" bgcolor="#ffffff" class="esd-structure es-p30t es-p20r es-p20l" style="background-color:#ffffff">
                                          <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                              <tr>
                                                <td width="558" align="left" class="esd-container-frame">
                                                  <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                      <tr>
                                                        <td align="center" class="esd-block-text es-m-txt-c es-p30t es-p20b">
                                                          <h1 style="color:#bc92e1;font-size:52px">
                                                            <strong>
                                                              Estúdio Magic&nbsp;
                                                            </strong>
                                                          </h1>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" class="esd-block-image es-p15r" style="font-size:0px">
                                                          <a target="_blank" href="https://viewstripo.email">
                                                            <img src="https://cdn-icons-png.flaticon.com/512/4144/4144781.png" alt="" height="245" class="adapt-img" style="display:block">
                                                          </a>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td width="558" valign="top" align="center" class="es-m-p0r esd-container-frame">
                                                  <table width="100%" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                      <tr>
                                                        <td align="center" class="esd-block-text es-m-txt-c es-p30t es-p20b">
                                                          <h1>
                                                            Prezado (a),
                                                            <br>
                                                          </h1>
                                                          <h1>
                                                            <strong>
                                                              ${name}
                                                            </strong>
                                                          </h1>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" class="esd-block-text es-p10t es-p20b es-p40r es-p40l">
                                                          <p>
                                                            Agradecemos por preencher o formulário de contato. Recebemos suas informações e nossa equipe analisará sua solicitação com a máxima atenção.
                                                          </p>
                                                          <p>
                                                            Em breve, entraremos em contato para dar continuidade ao atendimento. Caso precise de mais informações ou queira fazer alterações nos dados fornecidos, por favor, responda a este e-mail ou entre em contato pelo nosso telefone.
                                                            <br>
                                                          </p>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b es-m-txt-c" style="font-size:0">
                                                          <table border="0" width="50%" height="100%" cellpadding="0" cellspacing="0" style="display:inline-table;width:50% !important">
                                                            <tbody>
                                                              <tr>
                                                                <td style="border-bottom:4px solid #bc92e1;background:none;height:1px;width:100%;margin:0px"></td>
                                                              </tr>
                                                            </tbody>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td align="center" class="esd-block-text es-m-txt-c es-p5t es-p5b">
                                                          <p style="font-size:20px;color:#666666;line-height:200%">
                                                            <strong>
                                                              Att. Magic
                                                            </strong>
                                                          </p>
                                                          <p style="font-size:20px;color:#666666;line-height:200%">
                                                            <span style="font-size:14px">
                                                              (32)9 9114 6046
                                                            </span>
                                                            <br>
                                                            <span style="font-size:12px">
                                                              CRITT - Centro Regional de Inovação e Transferência de Tecnologia. Campus Universitário
                                                            </span>
                                                          </p>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table cellpadding="0" cellspacing="0" align="center" class="es-footer">
                            <tbody>
                              <tr>
                                <td align="center" class="esd-stripe">
                                  <table align="center" cellpadding="0" cellspacing="0" width="600" class="es-footer-body" style="background-color:transparent">
                                    <tbody>
                                      <tr>
                                        <td align="left" bgcolor="#bc92e1" class="esd-structure es-p25b es-p20l" style="border-radius:0px 0px 10px 10px;background-color:#bc92e1">
                                          <table cellpadding="0" cellspacing="0" width="100%">
                                            <tbody>
                                              <tr>
                                                <td width="580" align="left" class="esd-container-frame">
                                                  <table cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                      <tr>
                                                        <td align="left" class="esd-block-text">
                                                          <p>
                                                            <br>
                                                          </p>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </body>
        </html>
        `,
    });
    } catch (error) {
        console.error('Erro ao enviar e-mail de confirmação para o cliente:', error);
        throw error;
    }
};

export const sendAdminNotificationEmail = async (formData) => {
    const { name, email, phone, company_name, department, segment, solution, message } = formData;
    try {
    await transporter.sendMail({
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
            </div>
        `,
    });
    } catch (error) {
        console.error('Erro ao enviar e-mail de notificação para o admin:', error);
        throw error;
    }
};
