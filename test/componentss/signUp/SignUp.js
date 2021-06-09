import React, {useState} from 'react';
import {View, Text, TextInput, ImageBackground, Image, TouchableOpacity,ScrollView} from 'react-native';
import styles from './styles'
import {Picker} from '@react-native-picker/picker';


const SignUp = ({navigation}) => { 
  const [cedula, setCedula] = useState('')                      //IDCEDULA BASE DE DATOS
  const [nombre, setNombre] = useState('')                      //NOMBRE BASE DE DATOS
  const [apellido, setApellido] = useState('')                  //APELLIDO BASE DE DATOS
  const [fNacimiento, setFNacimiento] = useState('')            //FECHA DE NACIMIENTO BASE DE DATOS
  const [email, setEmail] = useState('')                        //EMAIL BASE DE DATOS
  const [pass, setPass] = useState('')                          //PASSWORD BASE DE DATOS
  const [telefono, setTelefono] = useState('')                  //TELEFONO BASE DE DATOS
  const [condicion, setCondicion] = useState('')                  //TELEFONO BASE DE DATOS
  const [enfermedad, setEnfermedad] = useState('Ninguna')                  //TELEFONO BASE DE DATOS
  const [perteneceA, setPerteneceA] = useState('Ninguno')                  //TELEFONO BASE DE DATOS
            //TELEFONO BASE DE DATOS
  const url='http://192.168.68.103:8080/Servidor/webresources/entity.usuario/'    // URL REST BASE DE DATOS
  var enfermedades =["Seleccione una opcion ","Enfermedades hipertensivas","Diabetes (E10-E14)","Insuficiencia renal (N17-N19)","VIH (B20-B24)",
  "Cáncer (C00-D48)","Tuberculosis (A15-A19)","EPOC (J44)","Asma (J45)","Obesidad (E65-E68)", "Lista pendiente de trasplante de órganos"," Pacientes trasplantados de órganos vitales"];
  var cargos =["Ninguno","TL(Atencion de pacientes COVID-19)","TL(Profesionales de la salud)","Medicos tradiciones",
  "EST del area de la salud (en practica clinica)","TL(que apoya la respuesta a la pandemia )","TL(Atienden pacientes)",
  "Tl(bancos de sangre,organos y tejidos)","madres y padres identificados por ICBF",
  "directivos de apoyo escolar","Cuidadores pobl de especial proteccion",
  "Fuerza publica","Guardia indigena y guadia cimarrona","TL(Funerarias)","Unidad de busqueda de personas","personal de migracion Colombia",
  "Maxima autoridad (Policia y sanitaria)","Personal de la Fiscalia General de la Nacion"];
  
  //Crear usuario con peticion rest 
  //las variables que el sistema pide son 
  // cedula, nombre, apellido, fecha de nacimiento, telefono, email, password
            const createUser = async () => {
              etapa()
             
            if (cedula !="" && nombre !="" && apellido !="" && fNacimiento !="" && email !="" && pass !="" && telefono !="" ) {
              fetch(url+cedula)
            .then((response) => response.json())
            .then((json) =>{
              alert("error 400")
              navigation.navigate('Log')}
              )
            .catch ((e)=>{
              fetch(url, {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  idcedula:cedula,
                  nombre:nombre,
                  apellido:apellido,
                  fechanacimiento:fNacimiento,
                  email:email,
                  password:pass,
                  condicion:enfermedad,
                  pertenecea:perteneceA,
                  rol:"Cliente",
                  telefono:telefono,
                  fechanacimiento:new Date (fNacimiento),
                  etapa:global.etapa

                })
              })
              alert("Se ha registrado correctamente")
              navigation.navigate('Log') 
              ;
            })
            }else{
              alert("Porfavor rellene la infromacion solicitada")
            }
            }
            const createUser1 = async () => {
              etapa()
                console.log(perteneceA)
            console.log(global.etapa)
            console.log(enfermedad)
            }
           function condicionMedica(){
             if (condicion == "Si") {
               return(
                <Picker
                    style={styles.picker}
                    selectedValue={enfermedad}
                    onValueChange={(itemValue)=> setEnfermedad(itemValue)}>
                    {enfermedades.map((item, index) => {
                         return (<Picker.Item label={item} value={item} key={item} />
                              ) 
                    })}
                    </Picker>
               )
             }
            
            }
            function cargo(){
              return(
                <Picker
                    style={styles.picker}
                    selectedValue={perteneceA}
                    onValueChange={(itemValue)=> setPerteneceA(itemValue)}>
                    {cargos.map((item, index) => {
                         return (<Picker.Item label={item} value={item} key={index} />
                              ) 
                    })}
                    </Picker>
               )
            }
            function etapa(){
              let ahora =new Date();
              let fechaNa= new Date(fNacimiento)
              let anos= ahora.getFullYear()-fechaNa.getFullYear();
              if (ahora.getMonth() < fechaNa.getMonth()) {
                --anos;
              }
              if (perteneceA == "TL(Atencion de pacientes COVID-19)") {
                global.etapa="Etapa 1"
              }else{

              if (perteneceA == "TL(Profesionales de la salud)"||perteneceA == "Medicos tradiciones"||
                 perteneceA == "EST del area de la salud (en practica clinica)"||perteneceA == "TL(que apoya la respuesta a la pandemia )"||
                 perteneceA == "TL(Atienden pacientes)"||perteneceA == "Tl(bancos de sangre,organos y tejidos)") 
                   {
                    global.etapa="Etapa 2"
                
                   }else{
                            if (perteneceA == "madres y padres identificados por ICBF"||perteneceA == "directivos de apoyo escolar"||
                          perteneceA == "Cuidadores pobl de especial proteccion"||perteneceA == "Fuerza publica"||
                          perteneceA == "Guardia indigena y guadia cimarrona"||perteneceA == "TL(Funerarias)"||perteneceA == "Unidad de busqueda de personas"||
                          perteneceA == "personal de migracion Colombia"||perteneceA == "Maxima autoridad (Policia y sanitaria)"||perteneceA == "Personal de la Fiscalia General de la Nacion") 
                          {
                            global.etapa="Etapa 3"
                          
                          }else{
                            if (enfermedad !='Ninguna') {
                              global.etapa="Etapa 3"
                            }else{
                                if (anos > 80) {
                                  global.etapa="Etapa 1"
                                } else {
                                  if (anos > 60 && anos < 79 ) {
                                    global.etapa="Etapa 2"
                                  } else {
                                    if (anos > 16 && anos < 59) {
                                      global.etapa="Etapa 5"
                                    } else {
                                      
                                    }
                                  }
                                }
                            }
                          }
                        }
                }
            }
    return (
   <ImageBackground source={require ('../login/Fondos/6.png')} style={styles.container}>
           {/* Funcionamiento para crear el usuario, la base de datos solicita unos datos especificos 
                -cedula
                -nombre
                -apellido
                -fecha de nacimiento
                -telefono
                -password
                  */}
                  
      <ScrollView >
     
       <View style={styles.container}>

                 {/* CEDULA */}
                  <View style= {styles.containesPasswor}>
                        
                          <TextInput                                                  //INPUT
                          placeholder= "Cedula"                                       //NOMBRE DEL INPUT EN PANTALLA
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {cedula}                                            //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setCedula(e.nativeEvent.text)}             //SE GUARDA LA INFORMACION RESPECTO AL USUARIO         
                          />  
                 </View>

                 {/* NOMBRE */}
                 <View style= {styles.containesPasswor}>
                                  
                          <TextInput                                                  //INPUT
                            placeholder= "nombre"                                     //NOMBRE DEL INPUT EN PANTALLA                            
                            style= {styles.inputText}                                 //ESTILO DEL INPUT
                            value = {nombre}                                          //EL VALOR QUE TOMA EL INPUT
                            onChange={(e) => setNombre(e.nativeEvent.text)}           //SE GUARDA LA INFORMACION RESPECTO AL USUARIO         
                            />
                 </View>

                 {/* APELLIDO */}
                  <View style= {styles.containesPasswor}>
                                
                          <TextInput                                                  //INPUT
                          placeholder= "Apellido"                                     //NOMBRE DEL INPUT EN PANTALLA   
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {apellido}                                          //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setApellido(e.nativeEvent.text)}           //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                      
                         />  
                 </View>

                 {/* TELEFONO */}
                 <View style= {styles.containesPasswor}>
                                   
                          <TextInput                                                  //INPUT
                          placeholder= "Telefono"                                     //NOMBRE DEL INPUT EN PANTALLA   
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {telefono}                                          //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setTelefono(e.nativeEvent.text)}           //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                        
                           />  
                 </View>

                 {/* FECHA DE NACIMIENTO */}
                 <View style= {styles.containesPasswor}>
                               
                          <TextInput                                                  //INPUT
                          placeholder= "Fecha de nacimiento AAAA-MM-DD"               //NOMBRE DEL INPUT EN PANTALLA  
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {fNacimiento}                                       //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setFNacimiento(e.nativeEvent.text)}        //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                      
                          />  
                 </View>

                 {/* EMAIL */}
                 <View style= {styles.containesPasswor}>
                                    
                          <TextInput                                                  //INPUT
                          placeholder= "Email"                                        //NOMBRE DEL INPUT EN PANTALLA 
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {email}                                             //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setEmail(e.nativeEvent.text)}              //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                   
                          />  
                 </View>

                 {/* PASSWORD */}
                 <View style= {styles.containesPasswor}>
                                    
                          <TextInput secureTextEntry={true}                           //INPUT
                          placeholder= "password"                                     //NOMBRE DEL INPUT EN PANTALLA 
                          style= {styles.inputText}                                   //ESTILO DEL INPUT
                          value = {pass}                                              //EL VALOR QUE TOMA EL INPUT
                          onChange={(e) => setPass(e.nativeEvent.text)}               //SE GUARDA LA INFORMACION RESPECTO AL USUARIO                  
                          />  
                 </View>

                 <Text>Pertenece A</Text>
                <View style={styles.containerslect}>
                    {cargo()}
                </View>

                <Text>Sufre alguna condicion</Text>

              <View style={styles.containerslect}>

                <Picker style={styles.picker} selectedValue={condicion} onValueChange={(itemValue)=> setCondicion(itemValue)}>
                  <Picker.Item label ="Seleccione una opcion" value="SL"/>
                    <Picker.Item label ="Si" value="Si"/>
                    <Picker.Item label ="No" value="No"/>
                    
                </Picker>
             </View>

               
                <Text>Seleccione una </Text>
                <View style={styles.containerslect}>
                    {condicionMedica()}
                </View>
            < TouchableOpacity style= {styles.button } onPress ={createUser} >        
                   <Text style={styles.textButton}>Create new user</Text>            
            </ TouchableOpacity>  

        </View>
      </ScrollView>
     </ImageBackground>
    ) ; 
} 
export default SignUp