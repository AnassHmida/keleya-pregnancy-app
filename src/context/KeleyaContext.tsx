import {createContext} from 'react';
import {KeleyaContextType} from '../Types/Types';

export const KeleyaContext = createContext<KeleyaContextType | undefined>(
  undefined,
);
