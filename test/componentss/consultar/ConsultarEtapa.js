import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Image,ImageBackground } from 'react-native';
import { State } from 'react-native-gesture-handler';
import styles from './styles';

const ConsultarEtapa =  ({navigation})  => {
 // console.log(global.id)
  const [data, setData] = useState([]);  // tiene la informacion de la base de datos solicitada
  const [etapaActual, setEtapaActual] = useState('Etapa 5');
  const [eta, setEta] = useState('');
  const [etaAc, setEtaAc] = useState('');
  const { buttonStyle, textStyle } = styles;
  const [isLoading, setLoading] = useState(true);
console.log(global.usuarios)
  
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.usuario/'
  useEffect(() => {
    fetch(url+global.usuarios)
      .then((response) => response.json())
      .then((json) => {console.log(json)
        setEta(json.etapa.split(' ')[1].trim())
        setEtaAc(etapaActual.split(' ')[1].trim())
      setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]);
  const redireccionar = () => {
    navigation.navigate('Citas')   
   
}
 function posibilidadVacuna (){
    
     
     if (etapaActual == data.etapa || eta < etaAc) {
         return(
             <TouchableOpacity style={styles.inputInformacion} onPress={redireccionar}>
                 <Text style={styles.inputInformacion}>se encuentra en su etapa de vacunacion Desea agendar una cita?</Text></TouchableOpacity>
             
         )
     }else{
         return(
            <Text style={styles.inputInformacion}>No se encuentra en su etapa de vacunacion</Text>
         )
        
     }
    
 }
  return (
    <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
        <Text style={[styles.inputInformacion,{marginTop:40}]}>Etapa actual en la que nos encontramos es: </Text>
        
                    <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {etapaActual}                                     //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
        <Text style={styles.inputInformacion}> Usted se encuentra en la etapa</Text>
        
                      <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.etapa}                                     //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                     />
                     {posibilidadVacuna ()}
       
   </ImageBackground>
    
  );
};
export default ConsultarEtapa