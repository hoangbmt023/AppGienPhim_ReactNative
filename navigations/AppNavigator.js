import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import XemPhim from "../pages/XemPhim/XemPhim";
import Phim from "../pages/Phim/Phim";


const Stack = createNativeStackNavigator(); 

function AppNavigator () {
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false , contentStyle: { backgroundColor: '#434242' }} }>
            <Stack.Screen name="Home" component={Home}></Stack.Screen>
            <Stack.Screen name="XemPhim" component={XemPhim}></Stack.Screen>
            <Stack.Screen name="Phim" component={Phim}></Stack.Screen>
            <Stack.Screen name="NotFound" component={""}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AppNavigator;
