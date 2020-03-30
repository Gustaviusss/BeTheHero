import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import App from '../App';

import Incidents from './pages/incidents'
import Details from './pages/detail'

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Incidents' component={Incidents} />
                <AppStack.Screen name='Details' component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}