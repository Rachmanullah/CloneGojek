import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../pages/Home';
import { Home3, ArchiveBook, DiscountShape, Message } from 'iconsax-react-native'

const Stack = createNativeStackNavigator();
const MaterialBottom = createMaterialBottomTabNavigator();

function MainApp() {
    return (
        <MaterialBottom.Navigator
            shifting={false}
            initialRouteName="Home"
            barStyle={{ backgroundColor: 'white', borderWidth: 3, borderColor: 'lightgrey' }}
            activeColor='#28bf50'
            inactiveColor='#4b4f4c'
        >
            <MaterialBottom.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                color == "#28bf50" ?
                                    <Home3 size="32" color="#28bf50" variant="Bold" /> :
                                    <Home3 size="32" color="#4b4f4c" variant="Bold" />
                            }
                        </View>
                    )
                }}
            />
            <MaterialBottom.Screen name="Promo" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                color == "#28bf50" ?
                                    <DiscountShape size="32" color="#28bf50" variant="Bold" /> :
                                    <DiscountShape size="32" color="#4b4f4c" variant="Bold" />
                            }
                        </View>
                    )
                }}
            />
            <MaterialBottom.Screen name="Pesanan" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                color == "#28bf50" ?
                                    <ArchiveBook size="32" color="#28bf50" variant="Bold" /> :
                                    <ArchiveBook size="32" color="#4b4f4c" variant="Bold" />
                            }
                        </View>
                    )
                }}
            />
            <MaterialBottom.Screen name="Chat" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View style={{ marginTop: -4 }}>
                            {
                                color == "#28bf50" ?
                                    <Message size="32" color="#28bf50" variant="Bold" /> :
                                    <Message size="32" color="#4b4f4c" variant="Bold" />
                            }
                        </View>
                    ),
                    tabBarBadge: 3,
                }}
            />
        </MaterialBottom.Navigator>
    );
}
function MyStack() {
    return (
        <Stack.Navigator initialRouteName='MainApp'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
const Routes = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}

export default Routes

const styles = StyleSheet.create({})