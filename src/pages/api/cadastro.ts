import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import { connectToDatabase } from '@/lib/database'
import { registerFormSchema } from '@/components/Forms/schemas/registerForm'
import { validateSchema } from '@/middlewares/validateSchema'

const saltRounds = 10

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    try {
      const { db } = await connectToDatabase()
      const userAlreadyExists = await db.collection('users').findOne({ email })

      if (userAlreadyExists) {
        return res.status(400).json({ message: 'Usuário já cadastrado.' })
      }

      const passwordHash = await bcrypt.hash(password, saltRounds)
      const newUser = {
        name,
        email,
        password: passwordHash,
      }

      db.collection('users').insertOne(newUser)
      return res.status(200).json({ message: 'Usuário criado com sucesso.' })
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao criar usuário.' })
    }
  }

  return res.status(405).json({ message: 'Método não permitido!' })
}

export default validateSchema(registerFormSchema, handler)
