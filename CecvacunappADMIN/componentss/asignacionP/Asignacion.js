import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,TouchableOpacity,TextInput,SafeAreaView,ScrollView,Image,ImageBackground } from 'react-native';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';

class Asignacion extends React.Component  {
  
  state = {
    Listpersonal:[],
    personal:'',
    Listpaciente:[],
    paciente:''
    }

    createUser = async () => {
      fetch('http://192.168.68.103:8080/Servidor/webresources/entity.cita/'+this.state.paciente)
      .then(response => response.json())
      .then(json => {
        fetch('http://192.168.68.103:8080/Servidor/webresources/entity.cita/'+this.state.paciente, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              
                asignado: true,
                ciudad: json.ciudad,
                direccion: json.direccion,
                dosis: json.dosis,
                estado: json.estado,
                etapavacunacion: json.etapavacunacion,
                fecha: json.fecha,
                hora: json.hora,
                idcedula: json.idcedula,
                idcita: json.idcita,
                idvacuna: json.idvacuna,
                lugar: json.lugar
              
            })
          })
        console.log(json.asignado)
        console.log(json.idcita)

        if (json.asignado == false ) {
          fetch('http://192.168.68.103:8080/Servidor/webresources/entity.asignacion/count')
          .then(response => response.json())
          .then(json1 => {
            fetch('http://192.168.68.103:8080/Servidor/webresources/entity.asignacion', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
               idasignacion:json1+1,
               cedula:this.state.personal,
               idcita:this.state.paciente
              })
            })
          
          })
          
            
          
        
         }else{
          alert("f")
         }
        
        })
      
    }

  GetFakeData = () => {
    fetch('http://192.168.68.103:8080/Servidor/webresources/entity.personal')
    .then(response => response.json())
    .then(json => {
   
    this.setState({
      Listpersonal:json
    })
    })
    }
    Listpac = () => {
      fetch('http://192.168.68.103:8080/Servidor/webresources/entity.cita')
      .then(response => response.json())
      .then(json => {
     
      this.setState({
        Listpaciente:json
      })
      })
      }
    componentDidMount() {
      this.GetFakeData()
      this.Listpac()
      console.log(this.state.Listpersonal+"aa")
      }
      
  render() {
    let person = this.state.Listpersonal.map((myValue,myIndex)=>{
      return(
      <Picker.Item label={myValue.idcedula + ' - ' + myValue.nombre} value={myValue.idcedula} key={myValue.idcedula}/>
      )
      });
      let cliente = this.state.Listpaciente.map((myValue,myIndex)=>{
        return(
        <Picker.Item label={myValue.idcedula + ' - ' + myValue.dosis+ ' - '+'Asignado: ' + myValue.asignado } value={myValue.idcita} key={myValue.idcita}/>
        )
        });
    return (
          <View style={styles.container}>
            <Text style={[styles.Titulo,{marginTop:20}]}> Personal</Text>
            <View style={styles.containerslect}>
                <Picker style={styles.picker} selectedValue={this.state.personal} onValueChange={(value)=>this.setState({personal:value})} >
                {person}
                </Picker>
            </View>

            <Text style={[styles.Titulo,{marginTop:20}]}>Cliente</Text>

            <View style={styles.containerslect}>
                <Picker style={styles.picker} selectedValue={this.state.Listpaciente} onValueChange={(value)=>this.setState({paciente:value})} >
                {cliente}
                </Picker>
            </View>

            
          
          < TouchableOpacity style= {[styles.button,{marginVertical:40,marginTop:50}]} onPress={this.createUser} >
                    <Text >Asignar</Text>
          </TouchableOpacity> 
          </View>
    )
    }
    }
export default Asignacion