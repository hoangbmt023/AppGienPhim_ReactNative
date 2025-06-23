
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Help from '../../pages/Authen/Help';
import LienHe from '../../pages/LienHe/LienHe';
import History from '../../pages/History/History';
import LichSuGiaoDich from '../../pages/LichSuGiaoDich/LichSuGiaoDich';
import InfoAccount from '../../pages/InfoAccount/InfoAccount';
import Account from '../../pages/Account/Account';


const Stack = createNativeStackNavigator();

export default function AccoutStack() {
    return (
        <Stack.Navigator initialRouteName="Account" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#434242' } }}>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="InfoAccount" component={InfoAccount} />
            <Stack.Screen name="History" component={History}></Stack.Screen>
            <Stack.Screen name="Help" component={Help} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="Contact" component={LienHe} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="LichSuGiaoDich" component={LichSuGiaoDich} />
        </Stack.Navigator>
    );
}
