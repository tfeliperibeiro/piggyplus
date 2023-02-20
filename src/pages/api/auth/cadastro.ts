import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';

import { connectToDatabase } from '@/lib/database';
import { registerFormSchema } from '@/components/Forms/schemas/registerForm';
import { validateSchema } from '@/middlewares/validateSchema';
import { ValidationError } from 'yup';

const saltRounds = 10;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    try {
      const { db } = await connectToDatabase();
      const userAlreadyExists = await db.collection('users').findOne({ email });

      if (userAlreadyExists) {
        return res.status(400).json({ message: 'Usuário já cadastrado.' });
      }

      const passwordHash = await bcrypt.hash(password, saltRounds);
      const newUser = {
        name,
        email,
        password: passwordHash,
      };

      db.collection('users').insertOne(newUser);
      return res.status(200).json({ message: 'Usuário criado com sucesso.' });
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({
        message: 'Erro ao criar usuário, tente novamente mais tarde.',
      });
    }
  }

  return res.status(405).json({ message: 'Método não permitido!' });
}

export default validateSchema(registerFormSchema, handler);
