export type KeleyaProviderProps = {
  children: React.ReactNode;
};

export type KeleyaContextType = {
  authenticated: boolean;
  setAuthentication: (status: boolean) => void;
  userEmail: string;
  setEmail: (email: string) => void;
  name: string;
  setUsername: (username: string) => void;
  selectedWorkoutOption: string;
  setWorkoutOption: (option: string) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};

export type AppStackParamList = {
  MainScreen: undefined;
  SignUpScreen: undefined;
  SignInScreen: undefined;
  NameScreen: undefined;
  DateScreen: undefined;
  WorkoutScreen: undefined;
  SuccessScreen: undefined;
};
