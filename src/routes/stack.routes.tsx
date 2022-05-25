import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Splash } from '../lotties/Splash';
import Login from '../screens/Login';
import AuthRoutes from './tab.routes';
import Usuarios from '../screens/Usuarios';
import NovoUsuario from '../screens/NovoUsuario';

const Stack = createNativeStackNavigator();

function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={AuthRoutes} />
            <Stack.Screen name="Usuarios" component={Usuarios} />
            <Stack.Screen name="NovoUsuario" component={NovoUsuario} />
            <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
    )
}
