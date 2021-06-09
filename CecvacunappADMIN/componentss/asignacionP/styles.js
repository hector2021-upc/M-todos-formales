import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      
    }, 
    inputText: {   
      marginVertical:20, 
      height:50,
      width:350,
      backgroundColor: 'white',
      borderRadius: 35,                                    //barras para recibir datos solicitados
      paddingHorizontal:15,
    
    },
    button: {                                              // botones 
      
        width:300,
        height:50,
        backgroundColor:'#dfe4ea',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 35,
        marginTop:15,
        borderWidth: 1,
        borderColor:'black',
      
      
    },
    imput:{
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 35,
    }, 
    InformacionPantalla: {   
      marginVertical:20, 
      height:40,
      width:300,
      backgroundColor: 'white',
      borderRadius: 35,                                    //barras para recibir datos solicitados
      paddingHorizontal:15,
      alignItems: 'center',
    
    }, 
    inputInformacion: {    
      width:270,
      fontSize:15,                                //barras para recibir datos solicitados
      marginTop:-10,
      marginVertical:-10,
    },image2:{
      width:350,
      height:5,
      marginTop:20,
      marginVertical:30
      
    },Titulo:{
      marginTop:-10,
      fontSize:18,
      marginVertical:5,
      fontWeight:'bold'
    },
    Textoboton:{
      justifyContent:'center',
      alignItems:'center',
      fontSize:15,
    
    },image:{
      width:300,
      height:120,
      marginVertical:20
      
    },containerslect:{
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 35,
     backgroundColor:'#dfe4ea',
     borderWidth: 1,
     borderColor:'white',
     marginTop:20
    
    },picker:{
      marginLeft:10,
      alignItems:'center',
      width:250,
      textAlign:'center',
      
    },button2: {    
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
      marginVertical:10

    },Texto:{
      width:200,
      marginTop:50,
      fontSize:15,
    },
    TituloTex:{
      marginTop:20,
      fontSize:20,
      fontWeight:'bold'
    }, image1:{
      width:70,
      height:80,
      marginTop:20,
      marginHorizontal:20,
    },picker:{
      marginLeft:10,
      alignItems:'center',
      width:250,
      textAlign:'center'
    },
    containerslect:{
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 35,
     backgroundColor:'#dfe4ea',
     borderWidth: 1,
     borderColor:'white',
    
    }

});
export default styles