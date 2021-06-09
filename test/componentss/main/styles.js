import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
    }, 
     button: {    
      flexDirection: 'row',                                          // botones 
      height:120,
      width:350,
      marginHorizontal:30,
      marginVertical:-20,
      borderRadius: 35,
      marginTop:40,
     backgroundColor:'rgba(255,255,255,.15)',
     borderWidth: 1,
      borderColor:'black',

    },
    image1:{
      width:70,
      height:80,
      marginTop:20,
      marginHorizontal:30,
    },
    image2:{
      width:300,
      height:5,
      marginTop:1,
      
    },
    lineas:{
      marginBottom:-10,
      marginTop:160,
      marginHorizontal:-100
    },
    Titulo:{
      marginTop:20,
      fontSize:20,
      marginVertical:5,
      fontWeight:'bold'
    },
    Texto:{
      width:200,
      marginTop:50,
     
      fontSize:15,
    },
    TituloTex:{
      marginTop:20,
      fontSize:20,
      fontWeight:'bold'
    }, 
    image:{
      width:300,
      height:120,
      marginTop:40,
      
    }
    
});
export default styles