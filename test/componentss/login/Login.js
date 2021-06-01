import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Image, TouchableOpacity} from 'react-native';

import styles from './styles'
import Icon from 'react-native-ionicons'
import Citas from '../citas/Citas'

const Login = ({navigation}) => { 
 
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')


  const [data, setData] = useState('');  // tiene la informacion de la base de datos solicitada 
 
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.usuario/' // es la URL principal para hacer la busqueda de la cita , solo falta agregarle el user a consultar 

  const ConsultaUsuario = async () => {
    {/* El if es para determinar si el usuario esta digitando la CEDULA par hacer la peticion al servidor, de esta manera evitamos sobrecarga
   el servidor si el usuario no digito nada en el campo  */}
    if (user !=  "") {
     {
       const response = await fetch(url+user,{   
       method:'GET',
       headers: {
         'Content-Type': 'application/json'
       }})
        .then((response) =>response.json())
        .then((responseJson) => {
            setData(responseJson)
           // console.log(responseJson) 
            if (responseJson.idcedula == user && responseJson.password == pass ) {
              navigation.navigate('CECVACUNAAP')  
              
              global.usuarios=user;
              setPass("")
              setUser("")
               
            }else{
              alert("Usuario o contraseña invalido ")
            }
          // console.log(responseJson) 
        })
        .catch((e)=>{
         // console.log(e)                                 // Nos muestra el error en consola 
          alert("Usuario o contraseña invalido  ") // saldra un aviso si la comunicacion con el servidor fallo 
        })
       
     }
    } else {
      alert("favor rellenar los campos solicitados")  // avisa al usuario de que digite su CEDULA en el campo para poder realizar la busqueda 
      
    }
   
    
  }

            const onPressCreate = () => {
                navigation.navigate('SignUp')   
                setUser("")
                setPass("")
            }

    return (
      <ImageBackground source={require ('./Fondos/6.png')} style={styles.container}>
{/* esta contenido en el brackgroud, funciona igual que el view con la diferencia que te deja agregar una imagen de fonod */}             
        <View style={{                                            //Control del tamaño y pocisionamiento del logo 
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: -70,
                marginVertical: 50,
                
              }}>
               <Image 
                  source                                                  //  ubicacion de la imagen del logo 
                  ={require ('./Fondos/3.png')} />                       
        </View>
            {/* son las casillas para que el usuario relllene la informacion solicitada */}
         
                 
             <View style= {styles.containesPasswor}>
             <Icon name="mail" style={styles.iconoEmailPas} />
                <TextInput
                  placeholder= "Email"                                        //En la barra aparecera el nombre que queramos, y de esta amnera nos ahorramos colocar un text en pantalla
                  style= {styles.inputText}
                  value = {user}
                  onChange={(e) => setUser(e.nativeEvent.text)}    
                             //para que al momento que el usuario agrege la infomacion se borre el titulo 
                />
                
            </View>

                  <View style= {styles.containesPasswor}>
                  <Icon name="lock" style={styles.iconoEmailPas} />
                      <TextInput secureTextEntry={true}
                      placeholder= "Password"
                      style= {styles.inputText}
                      value = {pass}
                      onChange={(e) => setPass(e.nativeEvent.text)}                   //para que al momento que el usuario agrege la infomacion se borre el titulo 
                    />  
                 </View>
<View style= {styles.containesPasswor}>
                  <Icon name="lock" style={styles.iconoEmailPas} />
                      <TextInput secureTextEntry={true}
                      placeholder= "Password"
                      style= {styles.inputText}
                      value = {pass}
                      onChange={(e) => setPass(e.nativeEvent.text)}                   //para que al momento que el usuario agrege la infomacion se borre el titulo 
                    />  
                 </View>
 

         
             {/* Con esto hacemos que los botones que creamos se puedan pulsar */}
            <TouchableOpacity style= {[styles.button , styles.loginButton]} onPress ={ConsultaUsuario}>
              <Text style={styles.textButton}>Login</Text>
            {/* //<Icon name="log-out" style={styles.icono} /> */}
            </TouchableOpacity>
            
            < TouchableOpacity style= {[styles.button , styles.signUpButton]} onPress ={onPressCreate} >
              <Text style={styles.textButton}>Create new user</Text>
            {/* <Icon name="person-add" style={styles.icono} /> */}
            </ TouchableOpacity>  
            
           
    </ImageBackground>
    ) ; 
} 
export default Login
