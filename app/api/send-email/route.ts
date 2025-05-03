"use server"

import { NextResponse, NextRequest } from "next/server";
import * as z from "zod"
import { formSchema } from "./formSchema";
import {JSDOM} from "jsdom"
import DOMPurify from "dompurify"
import nodeMailer from "nodemailer"




const window = new JSDOM('').window
const purify = DOMPurify(window)

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
      return NextResponse.json(
        { error: 'Método no permitido' },
        { status: 405 }
      );
    }

    // const EMAIL_USER="jeanmontes95@gmail.com"
    // const EMAIL_PASS="loMejor97."

    const PRO_EMAIL_USER = process.env.EMAIL_USER
    const PRO_EMAIL_PASS = process.env.EMAIL_PASS
    console.log(PRO_EMAIL_PASS, PRO_EMAIL_USER)
    try{
      const body = await req.json();
      const validatedData = formSchema.parse(body)
      // Función de sanitización
      const sanitize = (input: string) => purify.sanitize(input,{ALLOWED_TAGS: ['br']})

      
      const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: PRO_EMAIL_USER,
            pass: PRO_EMAIL_PASS
        },
        logger: true,
        debug: true
      });
      //Enviar correo a la empresa
      const fromAddress = `"ABOGADO CARLOS RODRIGUEZ G" <${PRO_EMAIL_USER}>`;
      const empresaMsg ={
        from: fromAddress,
        to: PRO_EMAIL_USER,
        replyTo: validatedData.email,
        subject: `Nuevo mensaje de formulario: ${sanitize(validatedData.asunto)}`,
        html:
          `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1a365d;">Nuevo mensaje de contacto</h2>
              <p><strong>Nombre:</strong> ${sanitize(validatedData.nombre)}</p>
              <p><strong>Correo:</strong> <a href="mailto:${sanitize(validatedData.email)}">${sanitize(validatedData.email)}</a></p>
              <p><strong>Teléfono:</strong> ${sanitize(validatedData.telefono)}</p>
              <p><strong>Tema:</strong> ${sanitize(validatedData.asunto)}</p>
              <p><strong>Mensaje:</strong></p>
              <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px;">
                ${sanitize(validatedData.mensaje).replace(/\n/g, '<br/>')}
              </div>
            </div>
          `
      };
      //Email de confirmación
      const usuarioMsg = {
        from: fromAddress,
        to: validatedData.email,
        subject: `Confirmación de contacto: ${sanitize(validatedData.asunto)}`,
        html:
          `
            <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1a365d;">¡Gracias por contactarnos, ${sanitize(validatedData.nombre)}!</h2>
              <p style="font-size: 16px; line-height: 1.6;">Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
              <div style="margin-top: 25px; padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                <h3 style="color: #2d3748; margin-bottom: 10px;">Detalles de tu mensaje:</h3>
                <p><strong>Tema:</strong> ${sanitize(validatedData.asunto)}</p>
                <p><strong>Mensaje:</strong></p>
                <div style="background-color: #fff; padding: 10px; border-radius: 4px;">
                  ${sanitize(validatedData.mensaje).replace(/\n/g, '<br/>')}
                </div>
              </div>
              <hr style="margin: 30px 0; border-color: #e2e8f0;">
              <p style="color: #718096;">Atentamente,<br>El equipo de [${PRO_EMAIL_USER}]</p>
              </div>
              `
            };
      //Manejo de errores
      const errors = [];
      //Enviar correo a la empresa y al usuario
      try{
        console.log("Enviando correo a empresa...")
        const empresaResult = await transporter.sendMail(empresaMsg)
        console.log("Correo a empresa enviado:", empresaResult.messageId);
      }catch(e){
        console.log("Error al enviar correo:", e)
        errors.push('Error enviando el correo empresa');
      }
      try{
        console.log("Enviando correo a usuario...")
        const usuarioResult = await transporter.sendMail(usuarioMsg)
        console.log("Correo a usuario enviado:", usuarioResult.messageId);

      }catch(e){
        console.log("Error al enviar correo:", e)
        errors.push('Error enviando el correo empresa');
      }

      if(errors.length > 0) {
        throw new Error(errors.join(', '));
      }
      return NextResponse.json({
        success: true,
        message: "Mensaje enviado correctamente"
      })
    }catch (error){
      console.error("Error completo:", error);
      let errorMessage = 'Error interno del servidor';
      let statusCode = 500;

      if (error instanceof z.ZodError) {
        errorMessage = 'Complete todos los campos';
        statusCode = 400;
        return NextResponse.json(
          { error: errorMessage, details: error.errors },
          { status: statusCode }
        );
      }

      return NextResponse.json(
        { 
          error: error instanceof Error ? error.message : errorMessage
        },
        { status: statusCode }
      );
    }
}