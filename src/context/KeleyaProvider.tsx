import React, {useState} from 'react';
import {KeleyaContext} from './KeleyaContext';
import {KeleyaContextType, KeleyaProviderProps} from '../Types/Types';
export const KeleyaProvider = ({ children }: KeleyaProviderProps) => {
 
  const setAuthentication = (status: boolean) => {
    setUserProfile(prevState => ({ ...prevState, authenticated: status }));
  };

  const setEmail = (email: string) => {
    setUserProfile(prevState => ({ ...prevState, userEmail: email }));
  };

  const setUsername = (username: string) => {
    setUserProfile(prevState => ({ ...prevState, name: username }));
  };

  const setWorkoutOption = (option: string) => {
    setUserProfile(prevState => ({ ...prevState, selectedWorkoutOption: option }));
  };

  const setSelectedDate = (date: Date) => {
    setUserProfile(prevState => ({ ...prevState, selectedDate: date }));
  };

  const [userProfile, setUserProfile] = useState<KeleyaContextType>({
    authenticated: false,
    userEmail: '',
    name: '',
    selectedWorkoutOption: '',
    selectedDate: new Date(),
    setAuthentication: setAuthentication,
    setEmail: setEmail,
    setUsername: setUsername,
    setWorkoutOption: setWorkoutOption,
    setSelectedDate: setSelectedDate,
  });

  return (
    <KeleyaContext.Provider value={userProfile}>
      {children}
    </KeleyaContext.Provider>
  );
};