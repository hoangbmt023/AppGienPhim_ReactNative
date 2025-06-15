import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';


import AppNavigator from './navigations/AppNavigator';

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
