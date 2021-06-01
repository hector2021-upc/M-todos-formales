import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Image,ImageBackground } from 'react-native';
import { State } from 'react-native-gesture-handler';
import styles from './styles';

const Consultar =  ({navigation})  => {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.cita/General/'
  useEffect(() => {
    fetch(url+global.usuarios)
      .then((response) => response.json())
      .then((json) => {console.log(json)
      setData(json)})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  },[]); 

  const Item = ({ item, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.Textoboton}>Idcita: #{item.idcita}  {item.dosis} dosis</Text>
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
        <Image 
                    style={styles.image2}
                    source={require('./Imagenes/1.png')}
                    />
    
     <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.idcita}
        extraData={selectedId}
      />
    </SafeAreaView>
        
   </ImageBackground> 
    
  );
};
export default Consultar
