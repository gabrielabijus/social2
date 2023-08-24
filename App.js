import 'react-native-gesture-handler';
import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import BuscasScreen from './screens/Buscas';
import InfoScreen from './screens/Info';

const Stack = createStackNavigator ()

  function App  (){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions = {{
          headerShown: false
        }}>
          <Stack.Screen name = "Home" Component = {HomeScreen}/>
          <Stack.Screen name = "Buscas" Component = {BuscasScreen}/>
          <Stack.Screen name = "Info" Component = {InfoScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

export default App ()
