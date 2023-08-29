import React, { useState } from 'react';
import { KeleyaContext } from './KeleyaContext';
import { KeleyaContextType, KeleyaProviderProps } from '../Types/Types';

const KeleyaProvider = ({ children }: KeleyaProviderProps) => {
  const [userProfile, setUserProfile] = useState<KeleyaContextType>({
    authenticated: false,
    userEmail: '',
    name: '',
    selectedWorkoutOption: '',
    selectedDate: new Date(), 
    setAuthentication: (status) => setAuthentication(status),
    setEmail: (email) => setEmail(email),
    setUsername: (username) => setUsername(username),
    setWorkoutOption: (option) => setWorkoutOption(option),
    setSelectedDate: (date) => setSelectedDate(date), // Add setSelectedDate
  });

  const setAuthentication = (status: boolean) => {
    setUserProfile({ ...userProfile, authenticated: status });
  };

  const setEmail = (email: string) => {
    setUserProfile({ ...userProfile, userEmail: email });
  };

  const setUsername = (username: string) => {
    setUserProfile({ ...userProfile, name: username });
  };

  const setWorkoutOption = (option: string) => {
    setUserProfile({ ...userProfile, selectedWorkoutOption: option });
  };

  const setSelectedDate = (date: Date) => {
    setUserProfile({ ...userProfile, selectedDate: date });
  };

  return (
    <KeleyaContext.Provider value={userProfile}>
      {children}
    </KeleyaContext.Provider>
  );
};

export default KeleyaProvider;
