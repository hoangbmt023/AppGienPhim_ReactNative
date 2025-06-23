import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import XemPhim from "../pages/XemPhim/XemPhim";
import Phim from "../pages/Phim/Phim";
import Login from "../pages/Authen/Login";
import Register from "../pages/Authen/Register";
import ForgotPassword from "../pages/Authen/ForgotPassword";
import ResetPassword from "../pages/Authen/ResetPassword";
import Help from "../pages/Authen/Help";
import LienHe from "../pages/LienHe/LienHe";
import GoiThanhVien from "../pages/GoiThanhVien/GoiThanhVien"
import SearchPhim from "../pages/SearchPhim/SearchPhim";
import History from "../pages/History/History";
import BottomTabNavigator from "../components/Footer/BottomTabNavigator";
import InfoAccount from "../pages/Account/Account";
import NapTienScreen from "../pages/NapTien/NapTien";
import PhuongThucThanhToan from "../components/Layouts/PhuongThucThanhToan/PhuongThucThanhToan";
import ThanhToan from "../components/Layouts/PhuongThucThanhToan/ThanhToan";
import LichSuGiaoDich from "../pages/LichSuGiaoDich/LichSuGiaoDich";
import HomeStack from "./Stacks/HomeStack";
import AccoutStack from "./Stacks/AccoutStack";
import WalletStack from "./Stacks/WalletStack";

const Stack = createNativeStackNavigator();
function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Footer" screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#434242' } }}>

            <Stack.Screen name="Footer" component={BottomTabNavigator} />

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }}></Stack.Screen>

        </Stack.Navigator >
    );
}

export default AppNavigator;
