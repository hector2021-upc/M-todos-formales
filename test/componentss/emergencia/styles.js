import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex : 1,
      alignItems: 'center',
      
    }, 

    containerBoton: {
      width:300,
      height:50,
      backgroundColor:'#dfe4ea',
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 35,
      marginTop:100,
      borderWidth: 1,
      borderColor:'black',
    },
    TextoCon:{
      justifyContent:'center',
      alignItems:'center',
      marginTop:20,
      fontSize:20,
      marginVertical:15,
      fontWeight:'bold'
    },
    containerslect:{
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 35,
     backgroundColor:'#dfe4ea',
     borderWidth: 1,
     borderColor:'white',
    
    },
    picker:{
      marginLeft:10,
      alignItems:'center',
      width:250,
      textAlign:'center'
    },
    Textoboton:{
      justifyContent:'center',
      alignItems:'center',
      fontSize:25,
      fontWeight:'bold'
      
    },

    textAreaContainer: {
      marginTop:50,
      width:300,
      borderColor:'white',
      borderRadius: 35,
      backgroundColor:'#dfe4ea',
      borderWidth: 1,
      padding: 5
    },
    textArea: {
      
      color:'black',
      height: 150,
      justifyContent: "flex-start"
    }
  

});
export default styles
