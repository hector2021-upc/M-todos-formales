import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Image,ImageBackground } from 'react-native';
import { State } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const Modificar =  ({navigation})  => {
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('SL')
    const [lugar, setLugar] = useState('SL')
    const [isLoading, setLoading] = useState(true);
     const [data, setData] = useState([]);
   
  
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/'
  useEffect(() => {
    fetch(url+global.id)
      .then((response) => response.json())
      .then((json) => {//console.log(json)
      setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]);
  function verificacion(){
      if (data.lugar == "casa") {
          return(
            <TextInput 
            style={styles.InformacionPantalla}
             placeholder= "Direccion"
             value = {direccion}
             onChange={(e) => setDireccion(e.nativeEvent.text)}                   //para que al momento que el usuario agrege la infomacion se borre el titulo 
           /> 
          )
      }else{
          if (ciudad == "Bogota") {
              return(
                <Picker style={styles.picker} selectedValue={lugar} onValueChange={(itemValue)=> setLugar(itemValue)}>
                <Picker.Item label ="Seleccione una opcion" value="SL"/>
                  <Picker.Item label ="Hospital central" value="1"/>
                  <Picker.Item label ="Cruz Roja" value="2"/>
                  <Picker.Item label ="Hospital del Norte" value="3"/>
             </Picker>

              )
           
          }else{

          }
      }
  }
const Editar= async() =>{
    fetch(url+global.id, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idcita:data.idcita,
          idcedula:data.idcedula,
          dosis:data.dosis,
          idvacuna:data.idvacuna,
          ciudad:ciudad, //modificado
          lugar:data.lugar,
          direccion:direccion,//modificado
          etapavacunacion:data.etapavacunacion,
          fecha:data.fecha,
          hora:data.hora,
          estado:data.estado,
          asignado:data.asignado
        })
      })
    alert("Se ha modificado correctamente")
    navigation.navigate("CECVACUNAAP")
    

}
  return (
    <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
         <View style={styles.container}>
        <Image style={styles.image2}
               source={require('./Imagenes/1.png')}/>
               
        <Text style={[styles.inputInformacion, {marginLeft:10}]}>Ciudad</Text>
        <View style={styles.containerslect}>
        
          <Picker style={styles.picker} selectedValue={ciudad} onValueChange={(itemValue)=> setCiudad(itemValue)}>
             <Picker.Item label ="Seleccione una opcion" value="SL"/>
               <Picker.Item label ="Bogota" value="Bogota"/>
               <Picker.Item label ="Cali" value="Cali"/>
               <Picker.Item label ="Medellin" value="Medellin"/>
          </Picker>
          
     </View>
     <Text style={[styles.inputInformacion, {marginLeft:10,marginTop:30}]}>Direccion</Text>
     
         {verificacion()}
 
      <TouchableOpacity style={styles.button} onPress={Editar}>
          <Text>Modificar</Text>
      </TouchableOpacity>
    
    </View>
    
   </ImageBackground>
    
  );
};
export default Modificar