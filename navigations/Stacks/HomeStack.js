
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home/Home';
import Phim from '../../pages/Phim/Phim';
import XemPhim from '../../pages/XemPhim/XemPhim';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false , contentStyle: { backgroundColor: '#434242' }}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Phim" component={Phim} />
      <Stack.Screen name="XemPhim" component={XemPhim} />
    </Stack.Navigator>
  );
}
