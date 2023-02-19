import { jwtVerify, JWTVerifyResult, errors } from 'jose';

type JWTInvalid = errors.JWTInvalid;

export async function verify(
  token: string,
  secret: string
): Promise<JWTVerifyResult | JWTInvalid> {
  try {
    const payload = await jwtVerify(token, new TextEncoder().encode(secret));
    return payload;
  } catch (error) {
    return error as JWTInvalid;
  }
}
