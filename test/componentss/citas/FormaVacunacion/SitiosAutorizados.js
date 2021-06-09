import React, {useState,useEffect} from 'react';
import {View, Text,TouchableOpacity,TextInput,ImageBackground,Alert,Image,ScrollView,FlatList,Platform,Button} from 'react-native';
import styles from './styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import { set } from 'react-native-reanimated';

const SitiosAutorizados =  ({navigation})  => {
     const [date, setDate] = useState(new Date());
     const [mode, setMode] = useState('date');
     const [show, setShow] = useState(false);
    const [lugar, setLugar] = useState('SL')
    const [ciudad, setCiudad] = useState('SL')
    const [pickerValue, setPikerValue] = useState('SL')
    const [direccion, setDireccion] = useState('SL')
    const [isLoading, setLoading] = useState(true);
    const [idcita, setIdcita] = useState("");
    const [etapa, setEtapa] = useState(global.Etapa)
    const urlp='http://192.168.68.103:8080/Servidor/webresources/entity.cita/Vacuna/'
    const urls='http://192.168.68.103:8080/Servidor/webresources/entity.cita/count'
    const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/'
    const url2='http://192.168.68.103:8080/Servidor/webresources/entity.stiosautorizados/'
    
   
    var Bogotaoptions =["Seleccione una opcion ","Hospital san jose","Cruz roja",];
    var Calioptions =["Seleccione una opcion ","Hospital Cañaveralejo","Hospital de San Juan De Dios"];
    var Medellinoptions =["Seleccione una opcion ","Hospital General de Medellín","Hospital Universitario San Vicente Fundación"];
    const ConsultaUsuario = async () => { 
    
     
     if (direccion != "" && ciudad != "SL" && pickerValue != "SL") {
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
                                lugar:lugar,
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
                                                      lugar:lugar,
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

   function Lugares(){
     
        if (ciudad =="bogota") {
          return(
               
               <Picker
                    style={styles.picker}
                    selectedValue={lugar}
                    onValueChange={(itemValue)=> setLugar(itemValue)}>
                    {Bogotaoptions.map((item, index) => {
                         return (<Picker.Item label={item} value={item} key={index} />
                              ) 
                    })}
                    </Picker>
                    
             )  
            
        }else{
          if (ciudad =="cali") {
               return(
                    
                    <Picker
                         style={styles.picker}
                         selectedValue={lugar}
                         onValueChange={(itemValue)=> setLugar(itemValue)}>
                         {Calioptions.map((item, index) => {
                              return (<Picker.Item label={item} value={item} key={index} />
                                   ) 
                         })}
                         </Picker>
                         
                  )  
                 
             }else{
               if (ciudad =="medellin") {
                    return(
                         
                         <Picker
                              style={styles.picker}
                              selectedValue={lugar}
                              onValueChange={(itemValue)=> setLugar(itemValue)}>
                              {Medellinoptions.map((item, index) => {
                                   return (<Picker.Item label={item} value={item} key={index} />
                                        ) 
                              })}
                              </Picker>
                              
                       )  
                      
                  }
             }
        }
       
        
        
   }
   function direcciones() {
     if (ciudad =="bogota") {
     
                    if (lugar == "Hospital san jose") {
                         return(
                              <Picker
                                   style={styles.picker}
                                   selectedValue={direccion}
                                   onValueChange={(itemValue)=> setDireccion(itemValue)}>
                                   <Picker.Item label ="Seleccione una opcion" value="SL"/>
                                   <Picker.Item label ="Cl. 10 #18-75" value="Cl. 10 #18-75"/>
                                   </Picker>

                         )
                    }else{
                         if (lugar == "Cruz roja") {
                              return(
                                   <Picker
                                        style={styles.picker}
                                        selectedValue={direccion}
                                        onValueChange={(itemValue)=> setDireccion(itemValue)}>
                                        <Picker.Item label ="Seleccione una opcion" value="SL"/>
                                        <Picker.Item label ="Cra. 23 #N° 73 - 19" value="Cra. 23 #N° 73 - 19"/>
                                        <Picker.Item label ="Ak 68 #68b-31" value="Ak 68 #68b-31"/>
                                        </Picker>
     
                              )
                         }
                    }
     }else{
          if (ciudad =="cali") {
     
               if (lugar == "Hospital Cañaveralejo") {
                    return(
                         <Picker
                              style={styles.picker}
                              selectedValue={direccion}
                              onValueChange={(itemValue)=> setDireccion(itemValue)}>
                              <Picker.Item label ="Seleccione una opcion" value="SL"/>
                              <Picker.Item label ="Cra. 44 #9c-178" value="Cra. 44 #9c-178"/>
                              </Picker>

                    )
               }else{
                    if (lugar == "Hospital de San Juan De Dios") {
                         return(
                              <Picker
                                   style={styles.picker}
                                   selectedValue={direccion}
                                   onValueChange={(itemValue)=> setDireccion(itemValue)}>
                                   <Picker.Item label ="Seleccione una opcion" value="SL"/>
                                   <Picker.Item label ="Cra. 4 #17-67" value="Cra. 4 #17-67"/>
                                   
                                   </Picker>

                         )
                    }
               }
          }else{
               if (ciudad =="medellin") {
     
                    if (lugar == "Hospital General de Medellín") {
                         return(
                              <Picker
                                   style={styles.picker}
                                   selectedValue={direccion}
                                   onValueChange={(itemValue)=> setDireccion(itemValue)}>
                                   <Picker.Item label ="Seleccione una opcion" value="SL"/>
                                   <Picker.Item label ="Cra. 48 #32 - 102" value="Cra. 48 #32 - 102"/>
                                   </Picker>
     
                         )
                    }else{
                         if (lugar == "Hospital Universitario San Vicente Fundación") {
                              return(
                                   <Picker
                                        style={styles.picker}
                                        selectedValue={direccion}
                                        onValueChange={(itemValue)=> setDireccion(itemValue)}>
                                        <Picker.Item label ="Seleccione una opcion" value="SL"/>
                                        <Picker.Item label ="Calle 64 # 51D - 154" value="Calle 64 # 51D - 154"/>
                                        
                                        </Picker>
     
                              )
                         }
                    }
               }
          }
     }
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
               <Picker.Item label ="Cali" value="cali"/>
               <Picker.Item label ="Medellin" value="medellin"/>
          </Picker>
     </View>
     <Text style={styles.TextoCon}>Lugar</Text>
     <View style={styles.containerslect} >
          {Lugares()}
     </View>
     <Text style={styles.TextoCon}>direccion</Text>
     <View style={styles.containerslect} >
          {direcciones()}
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
          display="default"
          onChange={onChange}
        />
      )}
    </View>
     < TouchableOpacity style= {styles.containerBoton } onPress={ConsultaUsuario}>
              <Text style={styles.Textoboton}>Solicitar Cita</Text>
           
            </ TouchableOpacity>  
            

     </ScrollView>
    </ImageBackground>
    ) ;
  
} 
export default SitiosAutorizados