
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './componentss/login/Login';
import SignUp from './componentss/signUp/SignUp';
import Main from './componentss/main/Main';
import Citas from './componentss/citas/Citas';
import Emergencia from './componentss/emergencia/Emergencia';
import Consultar from './componentss/consultar/Consultar';
import SitiosAutorizados from './componentss/citas/FormaVacunacion/SitiosAutorizados'
import Casa from './componentss/citas/FormaVacunacion/Casa';
import ConCitas from './componentss/consultar/ConCitas';
import Modificar from './componentss/consultar/Modificar';
import ConsultarEtapa from './componentss/consultar/ConsultarEtapa';

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
                            backgroundColor: '#EDD9D9'
                        },
                        headerTitleAlign: 'center'
                   
                        }} name = "SignUp" component= {SignUp} />
                {/* <Stack.Screen options={{headerLeft:false}} name = "Main" component= {Main}/> */}
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
                        
                        }}  name = "Citas" component= {Citas}/>

                <Stack.Screen options={{
                     headerStyle: {
                            backgroundColor: '#EDD9D9'
                        },
                        headerTitleAlign: 'center',
                        
                        }}  name = "Emergencia" component= {Emergencia}/> 

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
                        
                        }}  name = "Casa" component= {Casa}/> 
            <Stack.Screen options={{
                     headerStyle: {
                            backgroundColor: '#EDD9D9'
                        },
                        headerTitleAlign: 'center',
                        
                        }}  name = "SitiosAutorizados" component= {SitiosAutorizados}/> 
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
                        
                        }}  name = "Modicacion" component= {Modificar}/> 
                 <Stack.Screen options={{
                     headerStyle: {
                            backgroundColor: '#EDD9D9'
                        },
                        headerTitleAlign: 'center',
                        
                        }}  name = "Etapa" component= {ConsultarEtapa}/> 

                </Stack.Navigator>
                
                

                
                
        </NavigationContainer>
    )
}



