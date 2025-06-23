global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
global.FormData = global.originalFormData || global.FormData;

if (window.__FETCH_SUPPORT__) {
    window.__FETCH_SUPPORT__.blob = false;
}

global.Blob = global.Blob || function () { };
global.FileReader = global.FileReader || function () { };


import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

import AppNavigator from './navigations/AppNavigator';
import Header from "./components/Header/Header";


export default function App() {
    return (
        <NavigationContainer>
            <Header/>
            <AppNavigator />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}
