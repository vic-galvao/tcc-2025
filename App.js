import React from 'react';

//importando biblioteca de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//importando as fontes
import { useFonts } from "expo-font";

//importando as telas
import Clinica from "./src/screens/Clinica.js"
import Paciente from "./src/screens/Paciente.js"
import Doutores from './src/screens/Doutores.js';

const Stack = createNativeStackNavigator() 

export default function App() {
  const [ fonteCarregada ] = useFonts({
    "Poppins": require("./assets/Poppins/Poppins-Regular.ttf")
  })
  if (fonteCarregada)
    return <NavigationContainer>
      <Stack.Navigator initialRouteName="Clinica" screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Clinica" component={ Clinica }/>
        <Stack.Screen name="Paciente" component={ Paciente }/>
        <Stack.Screen name="Doutores" component={ Doutores }/>
      </Stack.Navigator>
    </NavigationContainer>   
}

