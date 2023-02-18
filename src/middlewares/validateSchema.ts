import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { ValidationError } from 'yup'
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object'

export function validateSchema(
  schema: OptionalObjectSchema<ObjectShape>,
  handler: NextApiHandler
) {
  return async function (request: NextApiRequest, response: NextApiResponse) {
    try {
      request.body = await schema.validate(request.body, { strict: true })
      return handler(request, response)
    } catch (error) {
      if (error instanceof ValidationError) {
        return response.status(400).json(error.message)
      }

      return response
        .status(400)
        .json({ message: 'Houve um erro ao cadastrar usuário.' })
    }
  }
}
