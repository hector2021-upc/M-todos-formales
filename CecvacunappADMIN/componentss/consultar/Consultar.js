import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Image,ImageBackground } from 'react-native';
import { State } from 'react-native-gesture-handler';
import styles from './styles';

const Consultar =  ({navigation})  => {
  const [user, setUser] = useState(global.usuarios);  // el usuario que debemos consultar en la base de datos 
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/General/'
  const consulta= async() =>{
    fetch(url+user)
      .then((response) => response.json())
      .then((json) => {//console.log(json)
      setData(json)
    global.usuarios=user})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.button2}>
       <Image 
               style={styles.image1}
               source={require('./Imagenes/Emergencia.png')}
               />
      <Text style={[styles.TituloTex,{marginLeft:10}]}>#De Cita: {item.idcita} </Text>
      <Text style={[styles.Texto,{marginLeft:-90}]}>{item.dosis} Informacion de su segunda dosis</Text>
    </TouchableOpacity>
  );
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.idcita)
        global.id=item.idcita
        navigation.navigate('ConCitas')  
        }}
       
      />
    );
  };

  return (
    <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
        <Text style= {[styles.inputInformacion,{marginTop:30}]} >Su numero de identifiacion es:</Text>
             <TextInput
                       style= {styles.InformacionPantalla}                                
                       value = {user}                                              
                       onChange={(e) => setUser(e.nativeEvent.text)}                                      
                    />
                    < TouchableOpacity style= {styles.button} onPress={consulta} >
                    <Text >Consultar</Text>
              </ TouchableOpacity>
               
    <SafeAreaView style={styles.container}>
     {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.idcita.toString()}
        extraData={selectedId}
      />
     )}
     
    </SafeAreaView>
     
   
   </ImageBackground>
    
  );
};
export default Consultar