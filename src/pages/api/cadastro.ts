import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@/lib/database'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Nome, email ou senha são obrigatórios.' })
    }

    try {
      const { db } = await connectToDatabase()
      const emailAlreadyRegistered = await db
        .collection('users')
        .findOne({ email })

      if (emailAlreadyRegistered?._id) {
        return res
          .status(400)
          .json({ message: 'Este usuário já está cadastrado.' })
      }

      await db.collection('users').insertOne({ name, email, password })

      return res.status(201).json({ message: 'Usuário cadastrado com sucesso' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message:
          'Erro ao cadastrar o usuário, tente novamente em alguns minutos',
      })
    }
  }

  return res.status(405).json({ message: 'Método não permitido!' })
}
