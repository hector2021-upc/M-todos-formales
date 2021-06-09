import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {                                              //Contenedor principal
    flex : 1, 
    alignItems:'center'
    
  },
  inputText: {    
    flex:1, 
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
    marginTop:60,
    borderWidth: 1,
    borderColor:'black',
  
  
},
  textButton: {   
    fontWeight:'bold',                                        // texto de los botones
    textAlign: 'center',
    fontSize: 20,
    
  },
  
    iconoEmailPas:{
    color:'#000',
    fontSize:20,
    paddingLeft:20,
    paddingHorizontal:5,
  },
  containesPasswor: {
    width:350,
    flexDirection: 'row',
    backgroundColor:'#a4b0be',
   justifyContent:'center',
    alignItems:'center',
    borderRadius: 35,
    marginHorizontal:20,
    marginTop:20
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
  }
});

export default styles