import Cookies, { CookieSetOptions } from 'universal-cookie';

const cookies = new Cookies();

const get = (name: string) => cookies.get(name);

const set = <T = string>(
  name: string,
  value: T,
  options: CookieSetOptions = {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  }
) => {
  cookies.set(name, JSON.stringify(value), options);
};

const remove = (name: string, options?: CookieSetOptions) => {
  cookies.remove(name, options);
};

export const cookie = { get, set, remove };
