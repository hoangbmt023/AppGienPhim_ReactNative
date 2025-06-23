
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NapTienScreen from '../../pages/NapTien/NapTien';
import PhuongThucThanhToan from '../../components/Layouts/PhuongThucThanhToan/PhuongThucThanhToan';
import ThanhToan from '../../components/Layouts/PhuongThucThanhToan/ThanhToan';
import LichSuGiaoDich from '../../pages/LichSuGiaoDich/LichSuGiaoDich';



const Stack = createNativeStackNavigator();

export default function WalletStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#434242' } }}>
            <Stack.Screen name="NapTien" component={NapTienScreen} />
            <Stack.Screen name="PhuongThucThanhToan" component={PhuongThucThanhToan} />
            <Stack.Screen name="ThanhToan" component={ThanhToan} />
            <Stack.Screen name="LichSuGiaoDich" component={LichSuGiaoDich} />


        </Stack.Navigator>
    );
}
