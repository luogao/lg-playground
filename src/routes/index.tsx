import React from 'react'
import isEqual from 'lodash.isequal'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import routesConfig from './config'

type Props = {}

const Stack = createNativeStackNavigator()

const Route: React.FC<Props> = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        {routesConfig.map((route) => (
          <Stack.Screen
            name={route.name}
            component={route.component}
            key={route.name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default React.memo(Route, isEqual)
