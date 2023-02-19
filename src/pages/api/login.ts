import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

import { ValidationError } from 'yup';

import { SignJWT } from 'jose';

import { connectToDatabase } from '@/lib/database';
import { loginFormSchema } from '@/components/Forms/schemas/loginForm';
import { validateSchema } from '@/middlewares/validateSchema';

const KEY_SECRET = process.env.KEY_SECRET as string;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const { db } = await connectToDatabase();
      const userAlreadyExists = await db.collection('users').findOne({ email });

      if (userAlreadyExists === null) {
        return res.status(400).json({
          message: 'Você não tem uma conta com a gente.',
        });
      }

      const isMatchPassword = await bcrypt.compare(
        password,
        userAlreadyExists.password
      );

      if (!isMatchPassword) {
        return res
          .status(400)
          .json({ message: 'E-mail ou senha não conferem.' });
      }

      const iat = Math.floor(Date.now() / 1000);
      const expirationTime = iat + 60 * 60;

      const token = await new SignJWT({
        name: userAlreadyExists.name,
        email: userAlreadyExists.email,
      })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(expirationTime)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(KEY_SECRET));

      return res.status(200).json({ token });
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message });
      }
      return res
        .status(500)
        .json({ message: 'Erro ao fazer login, tente novamente mais tarde.' });
    }
  }

  return res.status(405).json({ message: 'Método não permitido!' });
}

export default validateSchema(loginFormSchema, handler);
