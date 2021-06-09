import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Image, TouchableOpacity} from 'react-native';

import styles from './styles'
import Icon from 'react-native-ionicons'
import { NavigationHelpersContext } from '@react-navigation/core';


const Main = ({navigation}) => { 
    const Consulya= async() =>{
        navigation.navigate("Consultar")
    }
    const Consulya2= async() =>{
        navigation.navigate("Asignacion")
    }
    const Consulya3= async() =>{
        navigation.navigate("ConsultaAsignacion")
    }
    return (
      <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>

<Text style={styles.Titulo}>CECVACUNAAP</Text>
                <Image 
               style={styles.image2}
               source={require('./Imagenes/1.png')}
               />
            < TouchableOpacity style= {styles.button } onPress={Consulya} >
            <Image 
               style={styles.image1}
               source={require('./Imagenes/consulta.png')}
               />
               <Text style={styles.TituloTex}>Citas</Text>
               <Text  style={[styles.Texto,{ marginLeft:-45}]}>Puedes Consultar las Citas </Text>
              
            </ TouchableOpacity>  
            < TouchableOpacity style= {styles.button } onPress={Consulya2} >
            <Image 
               style={styles.image1}
               source={require('./Imagenes/AsignacionP.png')}
               />
               <Text style={styles.TituloTex}>Asignacion de personal</Text>
               <Text  style={[styles.Texto,{ marginLeft:-200}]}>Asignacion de personal a los clientes  </Text>
              
            </ TouchableOpacity>  

            < TouchableOpacity style= {styles.button } onPress={Consulya3} >
            <Image 
               style={styles.image1}
               source={require('./Imagenes/consulta.png')}
               />
               <Text style={styles.TituloTex}>Consulta de Asignacion</Text>
               <Text  style={[styles.Texto,{ marginLeft:-210}]}>Consulta la Asignacion de personal a los clientes  </Text>
              
            </ TouchableOpacity> 
               
           
    </ImageBackground>
    ) ; 
} 
export default Main