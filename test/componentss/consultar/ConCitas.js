import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Image,ImageBackground } from 'react-native';
import { State } from 'react-native-gesture-handler';
import styles from './styles';

const ConCitas =  ({navigation})  => {
<<<<<<< HEAD
 // console.log(global.id)
  const [data, setData] = useState([]);  // tiene la informacion de la base de datos solicitada
  const [user, setUser] = useState(global.usuarios);  // el usuario que debemos consultar en la base de datos 
=======
  console.log(global.id)
  const [data, setData] = useState([]);  // TIENE LA INFORMACIÓN DE LA BASE DE DATOS SOLICITADA
  const [user, setUser] = useState(global.usuarios);  // EL USUARIO QUE DEBEMOS CONSULTAR EN LA BASE DE DATOS 
>>>>>>> 94809688bd4107585dfe8eed4f331fce140bf858
  const [isLoading, setLoading] = useState(true);
 
  
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/'
  useEffect(() => {
    fetch(url+global.id)
      .then((response) => response.json())
      .then((json) => {//console.log(json)
      setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]);  

  function resultado (nombre,valor,editable,fortmato){ 
      return(
        <TextInput
        placeholder= {nombre}               // En la barra aparecera el nombre que se solicita, y de esta amnera nos ahorramos colocar un text en pantalla
        style= {styles.inputText}                                        // El estilo que deseamos en la aplicacion (visual)
        value = {valor}  
        editable={false}                                                   // El Valor que toma el Imput(en pantalla)
        onChange={(e) => editable(e.nativeEvent.text)}                    // Se guarda el valor que el usuario digita
      /> 
      )
  }
  const modificar= async () =>{
      if (data.estado != "Vacunado") {
        navigation.navigate('Modicacion')  
      }else{
        alert("no se puede modificar")
    }
    
  }
  const Eliminar= async () =>{
      if (data.estado != "Vacunado") {
        fetch(url+global.id, {
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
          })
        alert("Se ha eliminado correctamente")
        navigation.navigate("CECVACUNAAP")
      }else{
          alert("no se puede eliminar")
      }
   
  }
  const Eliminar2= async () =>{
    if (data.estado != "Vacunado") {
      fetch(url+global.id, {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        })
    }else{
        alert("no se puede reagendar la cita")
    }
 
}
  const Reagendar= async () =>{
    Eliminar2()
    navigation.navigate("Citas")
  }
  return (
    <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
        <ScrollView >
        <Image 
                    style={styles.image2}
                    source={require('./Imagenes/1.png')}
                    />
    <View style= {[styles.imput]}>
    <Text style= {styles.inputInformacion} >Su numero de identifiacion es:</Text>
        {resultado("cedula",user,setUser,"")}
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
           <Text style= {styles.inputInformacion}   >Ciudad</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.ciudad}                                              //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
               {/* lugar */}
           <Text style= {styles.inputInformacion} >Lugar</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.lugar}                                               //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
             <Text style= {styles.inputInformacion} >Direccion</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.direccion}                                               //EL VALOR QUE TOMA EL INPUT
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
           <Text style= {styles.inputInformacion} >Estado</Text>
                   <TextInput
                       style= {styles.InformacionPantalla}                                //EL ESTILO DEL INPUT
                       value = {data.estado}                                              //EL VALOR QUE TOMA EL INPUT
                       editable={false}                                                   //PARA QUE EL USUARIO NO PUEDA EDITAR LA INFORMACION 
                    />
                    <Image 
                    style={styles.image2}
                    source={require('./Imagenes/1.png')}
                    />

                    < TouchableOpacity style= {styles.button} onPress={modificar} >
                    <Text >Cambiar Ubicacion</Text>
              </ TouchableOpacity> 

       < TouchableOpacity style= {[styles.button,{marginTop:10}]} onPress={Eliminar} >
             <Text >Eliminar</Text>
       </ TouchableOpacity> 
       < TouchableOpacity style= {[styles.button,{marginTop:10, marginVertical:30}]} onPress={Reagendar} >
             <Text >Reagendar cita</Text>
       </ TouchableOpacity> 
    </View>
    </ScrollView>
   </ImageBackground>
    
  );
};
export default ConCitas
