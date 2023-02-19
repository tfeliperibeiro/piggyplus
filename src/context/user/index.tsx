import { UserContextType } from '@/@types/user';
import { createContext } from 'react';

type Props = {
  children: React.ReactNode;
};

const UserContext = createContext<UserContextType>(null);

const UserContextProvider = ({ children }: Props) => {
  const INITIAL_VALUE = null;

  return (
    <UserContext.Provider value={INITIAL_VALUE}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
