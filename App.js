global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
global.FormData = global.originalFormData || global.FormData;

if (window.__FETCH_SUPPORT__) {
    window.__FETCH_SUPPORT__.blob = false;
}

global.Blob = global.Blob || function () { };
global.FileReader = global.FileReader || function () { };

// Bây giờ mới import các thư viện khác
import axios from "axios";
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
