import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Image,ImageBackground } from 'react-native';
import { State } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import { set } from 'react-native-reanimated';
import styles from './styles';

const ConCitas =  ({navigation})  => {
 // console.log(global.id)
  const [data, setData] = useState([]);  // tiene la informacion de la base de datos solicitada
  const [user, setUser] = useState(global.usuarios);  // el usuario que debemos consultar en la base de datos 
  const [isLoading, setLoading] = useState(true);
  const [data2, setData2] = useState([]);  // tiene la informacion de la base de datos solicitada
  const [idvacuna, setIdvacuna] = useState('SL');  // tiene la informacion de la base de datos solicitada
  const [estado, setEstado] = useState("SL"); 
  const [idva, setIdva] = useState('0'); 
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/'
  const url2='http://192.168.68.103:8080/Servidor/webresources/entity.usuario/'
  useEffect(() => {
    fetch(url+global.id)
      .then((response) => response.json())
      .then((json) => {//console.log(json)
      setData(json)
      if (json.idvacuna != 0) {
        console.log("entra")
        console.log(json.idvacuna)
        setIdva(json.idvacuna)
      }
     
      fetch(url2+user)
      .then((response) => response.json())
      .then((json) => {//console.log(json)
      setData2(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
      
  },[]);

  function resultado (){
      return(
        <TextInput
                // En la barra aparecera el nombre que queramos, y de esta amnera nos ahorramos colocar un text en pantalla
        style= {styles.inputText}                                        // El estilo que deseamos en la aplicacion (visual)
        value = {user}  
        editable={false}                                                   // El Valor que toma el Imput(en pantalla)
        onChange={(e) => setUser(e.nativeEvent.text)}                    // Se guarda el valor que el usuario digita
      /> 
      )
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
          idvacuna:idvacuna,
          ciudad:data.ciudad,
          lugar:data.lugar,
          direccion:data.direccion,
          etapavacunacion:data.etapavacunacion,
          fecha:data.fecha,
          hora:data.hora,
          estado:estado
        })
      })
    alert("Se ha modificado correctamente")
    navigation.navigate("CECVACUNAAP")
    

}

 
  return (
    <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
        <ScrollView >
       
    <View style= {[styles.imput,{marginTop:30}]}>
    <Text style= {styles.inputInformacion} >Su numero de identifiacion es:</Text>
        {resultado()}
    </View>
    <View style={styles.container}>
             <Text style= {styles.inputInformacion} >Etapa de vacunacion </Text>
              {/* Etapa de vacunacion del usuario  */}
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.etapavacunacion}                                     //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
                         {/* ciudad */}
           <Text style= {styles.inputInformacion}   >Nombre</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data2.nombre}                                              //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
               {/* lugar */}
           <Text style= {styles.inputInformacion} >Apellido</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data2.apellido}                                               //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
            
               {/* fecha */}
           <Text style= {styles.inputInformacion} >Fecha</Text>
                   <TextInput
                       placeholder= "sin Asignar" 
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.fecha}                                               //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
               {/* hora */}
           <Text style= {styles.inputInformacion} >Hora</Text>
                   <TextInput
                       placeholder= "sin Asignar" 
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.hora}                                                //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
               {/* estado*/}
               <Text style= {styles.inputInformacion} >Id vacuna</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {idva.toString()}                                              //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                               //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
           <Text style= {styles.inputInformacion} >Estado</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.estado}                                              //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                           //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
                     <Text style= {styles.inputInformacion} >Ciudad</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.ciudad}                                              //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                           //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
                    <Text style= {styles.inputInformacion} >Lugar</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.lugar}                                              //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                           //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
                    <Text style= {styles.inputInformacion} >Direccion</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.direccion}                                              //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                           //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
                    <Text style= {styles.inputInformacion} >Estado de vacuancion</Text>
             <View style={[styles.containerslect,{marginTop:20}]}>
                <Picker style={styles.picker} selectedValue={estado} onValueChange={(itemValue)=> setEstado(itemValue)}>
                   <Picker.Item label ="Seleccione una opcion" value="SL"/>
                   <Picker.Item label ="Vacunado" value="Vacunado"/>
                   <Picker.Item label ="Sin Vacunar" value="Sin Vacunar"/>
  
          </Picker>
         
          </View>
          <Text style= {[styles.inputInformacion,{marginTop:20}]} >Tipo de vacuna</Text>
          <View style={[styles.containerslect,{marginTop:20}]}>
          
          <Picker style={[styles.picker]} selectedValue={idvacuna} onValueChange={(itemValue)=> setIdvacuna(itemValue)}>
             <Picker.Item label ="Seleccione una opcion" value="SL"/>
               <Picker.Item label ="Pizer" value="1"/>
               <Picker.Item label ="Covax" value="2"/>
               <Picker.Item label ="Moderna" value="3"/>
               <Picker.Item label ="Sinovac" value="4"/>
  
          </Picker>
          </View>
                    < TouchableOpacity style= {[styles.button,{marginVertical:40,marginTop:50}]} onPress={Editar} >
                    <Text >Modificar</Text>
              </ TouchableOpacity> 

    
    </View>
    </ScrollView>
   </ImageBackground>
    
  );
};
export default ConCitas