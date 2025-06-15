import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


import AppNavigator from './navigations/AppNavigator';
import Header from './components/Header/Header';

export default function App() {
  return (
    <NavigationContainer>
        <Header/>
        <AppNavigator/>
    </NavigationContainer>
  );
}
