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
import * as Linking from 'expo-linking';
import AppNavigator from './navigations/AppNavigator';

// Cấu hình linking
const linking = {
    prefixes: ['gienphim://'],
    config: {
        screens: {
            ResetPassword: 'reset-password', // khớp với màn hình đặt tên trong stack navigator
            // Các màn khác nếu có...
        },
    },
};

export default function App() {
    return (
        <NavigationContainer linking={linking}>
            <AppNavigator />
            <StatusBar style="auto" />
        </NavigationContainer>
    );
}