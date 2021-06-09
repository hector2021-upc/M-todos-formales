import React, {useState} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert,Image,} from 'react-native';
import styles from './styles'

import {Picker} from '@react-native-picker/picker';
import { floor } from 'react-native-reanimated';

const Citas =  ({navigation})  => {
  const [data, setData] = useState('');
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.usuario/'
    const casa = async () => {
        try {
          fetch(url+global.usuarios,{   
            method:'GET',
            headers: {
              'Content-Type': 'application/json'
            }})
             .then((response) =>response.json())
             .then((responseJson) => {
              global.Etapa=responseJson.etapa
                 //console.log(global.anos) 
             })
             .catch((e)=>{
              // console.log(e)                                 // Nos muestra el error en consola 
               alert("Usuario o contraseña invalido  ") // saldra un aviso si la comunicacion con el servidor fallo 
             })
          

         navigation.navigate('Casa')   
        } catch (e) {                                             // si el usuario no esta registardo o puso mal la informacion saldra una alerta para el usuario
          alert(e)                     
        }
    }

      const SitiosAutorizados = async () => {
        try {
       navigation.navigate('SitiosAutorizados')   
        } catch (e) {                                             // si el usuario no esta registardo o puso mal la informacion saldra una alerta para el usuario
          alert(e)                     
        }
      }
    console.log(global.usuarios)
    
    return (
     <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
    <Text>{global.usuarios}</Text>
    <Text style={styles.Texto}></Text>

                <Image 
                    style={styles.image2}
                    source={require('./Imagenes/1.png')}
                    />
               < TouchableOpacity style= {styles.button }  onPress ={casa} >
               <Image 
               style={styles.image1}
               source={require('./Imagenes/casa.png')}
               />
                    <Text style={[styles.TituloTex,{marginLeft:-20}]}>Casa</Text>
                    <Text  style={[styles.Texto,{ marginLeft:-30}]}>Puedes agendar tu Cita para la vacuna conta el COVID-19</Text>
              </ TouchableOpacity>  
             
               < TouchableOpacity style= {styles.button } onPress ={SitiosAutorizados}>
               <Image 
               style={styles.image1}
               source={require('./Imagenes/hospitales.png')}
               />
                    <Text style={[styles.TituloTex,{marginLeft:-20}]}> Sitios autorizados</Text>
                    <Text  style={[styles.Texto,{ marginLeft:-150}]}>Puedes agendar tu Cita para la vacuna conta el COVID-19</Text>
              </ TouchableOpacity>  

              <Image 
                    style={[styles.image2,{marginTop:60}]}
                    source={require('./Imagenes/1.png')}
                    />
                     <Image 
               style={styles.image}
               source={require('./Imagenes/Logoinferior.png')}
               />
    </ImageBackground>
    ) ;
  
} 
export default Citas