module.exports = {
  preset: 'react-native', 
  setupFilesAfterEnv: ['<rootDir>/jest.setupFilesAfterEnv.ts'],
  transformIgnorePatterns: ["node_modules/(?!((jest-)?react-native|react-native-vector-icons|react-navigation|@react-navigation/.*|@react-native(-community)?)/)"], 
}