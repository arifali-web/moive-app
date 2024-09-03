import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
                }}
            />
            <Tab.Screen name="Movie" component={View}
                options={{
                    tabBarIcon: () => <FontAwesome name="video-camera" size={24} color="black" />,

                }}
            />
            <Tab.Screen name="About" component={View}
                options={{
                    tabBarIcon: () => <FontAwesome name='user' size={24} color="black" />,

                }}
            />
            <Tab.Screen name="Contact" component={View}
                options={{
                    tabBarIcon: () => <FontAwesome name='mail-forward' size={24} color="black" />,

                }}
            />

        </Tab.Navigator>
    );
}