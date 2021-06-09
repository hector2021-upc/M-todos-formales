import { StyleSheet } from 'react-native';


//En esta clase se crean todos los estilos, esto quiere decir que aca se modifica los tamaños, colores y pocsiciones
const styles = StyleSheet.create({
    container: {                                              //Contenedor principal
      flex : 1, 
      justifyContent: 'center'
    },
    inputText: {    
      flex:1, 
      backgroundColor: 'white',
      borderRadius: 35,                                    //barras para recibir datos solicitados
      paddingHorizontal:15,
    
    },
    button: {                                              // botones 
      height:60,
      width:350,
      marginHorizontal:30,
      marginVertical:-20,
      justifyContent:'center',
      borderRadius: 35,
      marginTop:40,
      
    },
    textButton: {   
      fontWeight:'bold',                                        // texto de los botones
      textAlign: 'center',
      fontSize: 20,
      
    },
    loginButton :{                                               //color especifico del boton login
      backgroundColor:'#dfe4ea'
    },
    signUpButton: {                                               //color especifico del boton registrarse 
      backgroundColor: '#dfe4ea'
    },
      iconoEmailPas:{
      color:'#000',
      fontSize:20,
      paddingLeft:20,
      paddingHorizontal:5,
    },
    containesPasswor: {
      flexDirection: 'row',
      backgroundColor:'#a4b0be',
     justifyContent:'center',
      alignItems:'center',
      borderRadius: 35,
      marginHorizontal:20,
      marginTop:20
    }, containesPasswor2: {
      flexDirection: 'row',
      backgroundColor:'#a4b0be',
     justifyContent:'center',
      alignItems:'center',
      borderRadius: 35,
      marginHorizontal:20,
      marginTop:20asdasdasdasdasdasdasdasd
    }
   
});

export default styles
