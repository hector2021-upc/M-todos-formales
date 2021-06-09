
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './componentss/login/Login';
import Main from './componentss/main/Main';
import ConCitas from './componentss/consultar/ConCitas'
import Consultar from './componentss/consultar/Consultar'
import Asignacion from './componentss/asignacionP/Asignacion'
import ConsultaAsignacion from './componentss/conAsignacion/ConsultaAsignacion'

const Stack = createStackNavigator()
export default function App() {

    return (
        //con esto podemos tener retroseder y tener un control de cada ventana 
        <NavigationContainer >
            
            <Stack.Navigator initialRouteName ="Login" >
                {/* Registramos cada una de las ventanas, y de esta manera poder tener un control al momenot de
                que el usuario quiera devolerse o queramos hacer colocar una barra de opciones dentro de la aplicación  */}
                <Stack.Screen options={{headerShown: false}} name = "Log" component= {Login}/>
              
                <Stack.Screen options={{
                     headerStyle: {
                            backgroundColor: '#EDD9D9',
                                                        
                        },
                        headerTitleAlign: 'center',
                        headerShown: false
                        }}  name = "CECVACUNAAP" component= {Main}/>
                

                <Stack.Screen options={{
                     headerStyle: {
                            backgroundColor: '#EDD9D9'
                        },
                        headerTitleAlign: 'center',
                        
                        }}  name = "ConCitas" component= {ConCitas}/> 

                    <Stack.Screen options={{
                     headerStyle: {
                            backgroundColor: '#EDD9D9'
                        },
                        headerTitleAlign: 'center',
                        
                        }}  name = "Consultar" component= {Consultar}/> 
                        <Stack.Screen options={{
                     headerStyle: {
                            backgroundColor: '#EDD9D9'
                        },
                        headerTitleAlign: 'center',
                        
                        }}  name = "Asignacion" component= {Asignacion}/> 

                    <Stack.Screen options={{
                     headerStyle: {
                            backgroundColor: '#EDD9D9'
                        },
                        headerTitleAlign: 'center',
                        
                        }}  name = "ConsultaAsignacion" component= {ConsultaAsignacion}/> 

                </Stack.Navigator>
                
                
        </NavigationContainer>
    )
}



