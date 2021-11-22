import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";


export default function App() {
    const MainNavigator = createStackNavigator();

    return (
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <MainNavigator.Navigator /*screenOptions={{ headerShown: false }}*/ initialRouteName="LoginScreen">
                    <MainNavigator.Screen name="HomeScreen" component={HomeScreen} />
                    <MainNavigator.Screen name="LoginScreen" component={LoginScreen} />
                    <MainNavigator.Screen name="CartScreen" component={CartScreen} />
                </MainNavigator.Navigator>
            </NavigationContainer>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


