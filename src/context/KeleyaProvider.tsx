import React, {useState} from 'react';
import {KeleyaContext} from './KeleyaContext';
import {KeleyaProviderProps} from '../Types/Types';

const KeleyaProvider = ({children}: KeleyaProviderProps) => {
  const [name, setName] = useState<string>('');

  const setUsername = (name: string) => {
    setName(name);
  };

  return (
    <KeleyaContext.Provider value={{name, setUsername}}>
      {children}
    </KeleyaContext.Provider>
  );
};

export default KeleyaProvider;
