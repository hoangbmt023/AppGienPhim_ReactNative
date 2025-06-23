import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchPhim from '../../pages/SearchPhim/SearchPhim';
import SearchScreen from '../../pages/SearchScreen/SearchScreen';

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator initialRouteName="SearchScreen" screenOptions={{ headerShown: false , contentStyle: { backgroundColor: '#434242' }}}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SearchPhim" component={SearchPhim} />
    </Stack.Navigator>
  );
}
