import { View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import màn hình
import Home from '../../pages/Home/Home';
import GoiThanhVien from '../../pages/GoiThanhVien/GoiThanhVien';
import SearchPhim from '../../pages/SearchPhim/SearchPhim';
import NapTien from '../../pages/NapTien/NapTien';
import Account from '../../pages/Account/Account';

import styles from './BottomTabNavigatorStyles'
import HomeStack from '../../navigations/Stacks/HomeStack';
import AccoutStack from '../../navigations/Stacks/AccoutStack';
import WalletStack from '../../navigations/Stacks/WalletStack';
import SearchStack from '../../navigations/Stacks/SearchStack';
const Tab = createBottomTabNavigator();

function BottomTabNavigator(){
    return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
            fontSize: 15,
            fontWeight: '600',
            marginBottom: 0,
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#000',
          height: 90,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'GoiThanhVien':
              iconName = focused ? 'film' : 'ribbon-outline';
              break;
            case 'SearchPhim':
              iconName = 'search';
              break;
            case 'NapTien':
              iconName = focused ? 'wallet' : 'wallet-outline';
              break;
            case 'Account':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return (
            <View style={{ marginTop: -4 }}> {/* 👈 Đẩy icon lên trên */}
                <Icon
                name={iconName}
                size={route.name === 'SearchPhim' ? 45 : 35}
                color={color}
                />
            </View>
            );
        },
        tabBarActiveTintColor: '#ff2f2f',
        tabBarInactiveTintColor: '#ccc',
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ tabBarLabel: 'Trang Chủ' }} />
      <Tab.Screen name="GoiThanhVien" component={GoiThanhVien} options={{ tabBarLabel: 'GóiTV' }} /> 
      <Tab.Screen
        name="Tìm Kiếm"
        component={SearchStack}
        options={{
            tabBarIcon: () => (
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -30 }}>
                <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#ff2f2f',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                <Icon name="search" size={35} color="#fff" />
                </View>
                <Text style={{ color: '#fff', fontSize: 5, marginTop: 5 }}></Text>
            </View>
            ),
        }}
        />
      <Tab.Screen name="NapTien" component={WalletStack} options={{ tabBarLabel: 'Nạp Tiền' }} />
      <Tab.Screen name="Account" component={AccoutStack} options={{ tabBarLabel: 'Tài Khoản' }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;