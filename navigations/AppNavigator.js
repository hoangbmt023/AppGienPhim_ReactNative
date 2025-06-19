import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import Login from "../pages/Authen/Login";
import Register from "../pages/Authen/Register";
import ForgotPassword from "../pages/Authen/ForgotPassword";
import ResetPassword from "../pages/Authen/ResetPassword";
import Help from "../pages/Authen/Help";
import LienHe from "../pages/LienHe/LienHe";

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#434242' } }}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Help" component={Help} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Contact" component={LienHe} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: true }}></Stack.Screen>
            <Stack.Screen name="NotFound" component={""}></Stack.Screen>
        </Stack.Navigator >
    );
}

export default AppNavigator;
