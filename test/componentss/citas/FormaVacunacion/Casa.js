import React, {useState} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert,Image,ScrollView,Platform,Button} from 'react-native';
import styles from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

const Casa =  ({navigation})  => {
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('SL')
    const [pickerValue, setPikerValue] = useState('SL')
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');

    const [show, setShow] = useState(false);
    const urlp='http://192.168.68.103:8080/Servidor/webresources/entity.cita/Vacuna/'
    const urls='http://192.168.68.103:8080/Servidor/webresources/entity.cita/count'
    const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/'
    

    const ConsultaUsuario = async () => { 
    
     
    if (direccion != "" && ciudad != "SL" && pickerValue != "SL" ) {
     if (pickerValue == "PrimeraDosis") {
          fetch(urlp+global.usuarios+"/primera")
          .then((response) => response.json())    
          .then((json) =>{
                   console.log(json)
                   
                    if (json == "") {
                        fetch(urls)
                        .then((response) => response.json())
                        .then((json) =>{
                             
                           console.log(json)
                           fetch(url, {
                             method: 'POST',
                             headers: {
                               Accept: 'application/json',
                               'Content-Type': 'application/json'
                             },
                             body: JSON.stringify({
                              idcita:json+1,
                               idcedula:global.usuarios,
                               dosis:"primera",
                               ciudad:ciudad,
                               lugar:"casa",
                               direccion:direccion,
                               etapavacunacion:global.Etapa,
                               estado:"En proceso",
                               hora:date.toTimeString().split(":")[0].trim() +":"+date.toTimeString().split(":")[1].trim(),
                               fecha:new Date (date.getFullYear(),(date.getMonth()+1),date.getDate()),
                               idvacuna:0,
                               asignado:false
                             })
                           })
                           navigation.navigate('CECVACUNAAP')  
                           alert("se ha registardo correctamente ")
                           } )
                        .catch((error) => console.error(error))
    
                            }else{
                             alert("usted ya fue registrado para aplicarse la primera dosis ")
                            } 
                   
                      
                       
                    
                   } )
                .catch((error) => console.error(error))
         }else{
              
               if (pickerValue == "SegundaDosis") {
                    fetch(urlp+global.usuarios+"/primera")
                    .then((response) => response.json())
                    .then((json1) =>{
                         if (json1 != "") {
                              fetch(urlp+global.usuarios+"/segunda")
                              .then((response) => response.json())
                              .then((json) =>{
                                   console.log(json)
                                 
                                  if (json == "") {
                                      fetch(urls)
                                       .then((response) => response.json())
                                      .then((json) =>{
                                            
                                       console.log(json)
                                                fetch(url, {
                                                     method: 'POST',
                                                     headers: {
                                                     Accept: 'application/json',
                                                     'Content-Type': 'application/json'
                                                     },
                                                     body: JSON.stringify({
                                                     idcita:json+1,
                                                     idcedula:global.usuarios,
                                                     dosis:"segunda",
                                                     ciudad:ciudad,
                                                     lugar:"casa",
                                                     direccion:direccion,
                                                     etapavacunacion:global.Etapa,
                                                     estado:"En proceso",
                                                     hora:date.toTimeString().split(":")[0].trim() +":"+date.toTimeString().split(":")[1].trim(),
                                                     fecha:new Date (date.getFullYear(),(date.getMonth()+1),date.getDate()),
                                                     idvacuna:0,
                                                     asignado:false
                                                     })
                                                })
                                                navigation.navigate('CECVACUNAAP')  
                                               alert("se ha registardo correctamente ")
                                                } )
                                                .catch((error) => console.error(error))
                  
                                     }else{
                                      alert(json)
                                     
                                     }
                                 } )
                              .catch((error) => console.error(error))
                         }else{
                              alert("no puedes soliciatr segunda dosis, por que no has soliciatdo la primera")
                         }
                    })    
                    .catch((error1) => console.error(error1))

                   
                   }
            
              
         }
    }else{
         alert("porfavor rellene los datos solicitados")
    }

        
     
           

}
const ConsultaUsuario1 = async () => {
    
}

const onChange = (event, selectedDate) => {
    
     const currentDate = selectedDate || date;
     setShow(Platform.OS === 'ios');
     setDate(currentDate);
     
     //setHora(date.toTimeString().split(":")[0].trim() +":"+date.toTimeString().split(":")[1].trim())
     //setFecha(date.getFullYear() +"-"+(date.getMonth()+1)+"-"+date.getDate())

   };
 
   const showMode = (currentMode) => {
     setShow(true);
     setMode(currentMode);
    
     
   };
 
   const showDatepicker = () => {
     showMode('date');
   };
 
   const showTimepicker = () => {
     showMode('time');
   };



    return (
     <ImageBackground source={require ('../Imagenes/fondo.png')} style={styles.container}>
          <ScrollView >
    <Text>{global.usuarios}</Text>
    <Text style={styles.TextoCon}>Dosis de vacunacion</Text>
     <View style={styles.containerslect}>
          <Picker style={styles.picker} selectedValue={pickerValue} onValueChange={(itemValue)=> setPikerValue(itemValue)}>
             <Picker.Item label ="Seleccione una opcion" value="SL"/>
               <Picker.Item label ="Primera Dosis" value="PrimeraDosis"/>
               <Picker.Item label ="Segunda Dosis" value="SegundaDosis"/>
  
          </Picker>
          
     </View>
     <Text style={styles.TextoCon}>Ciudad</Text>
     <View style={styles.containerslect}>
          <Picker style={styles.picker} selectedValue={ciudad} onValueChange={(itemValue)=> setCiudad(itemValue)}>
             <Picker.Item label ="Seleccione una opcion" value="SL"/>
               <Picker.Item label ="Bogota" value="bogota"/>
               <Picker.Item label ="Pereira" value="pereira"/>
               <Picker.Item label ="Cali" value="cali"/>
               <Picker.Item label ="Medellin" value="medellin"/>
          </Picker>
     </View>
     <Text style={styles.TextoCon}>Direccion</Text>

     <View style={styles.containerslect}>
                     <TextInput 
                     style={styles.picker}
                      placeholder= "Direccion"
                      value = {direccion}
                      onChange={(e) => setDireccion(e.nativeEvent.text)}                   //para que al momento que el usuario agrege la infomacion se borre el titulo 
                    />  
     </View>
     <View style={styles.containerslect}>
     
     
        <Button onPress={showDatepicker} title="Fecha" />
         <Text>{date.getFullYear() +"-"+(date.getMonth()+1)+"-"+date.getDate()}</Text>
        <Button onPress={showTimepicker} title="Hora" />
        <Text>{date.toTimeString().split(":")[0].trim() +":"+date.toTimeString().split(":")[1].trim()}</Text>
        
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          minimumDate={new Date()}
          minuteInterval={30}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
    
       < TouchableOpacity style= {styles.containerBoton }onPress={ConsultaUsuario}>
              <Text style={styles.Textoboton}>Solicitar Cita</Text>
           
            </ TouchableOpacity>  
            

     </ScrollView>
    </ImageBackground>
    ) ;
  
} 
export default Casa