import React, {Component} from 'react';
import {View, Text,TouchableOpacity,ImageBackground,Image} from 'react-native';

import styles from './styles'

const Main=  ({navigation},user)  => {
    const citass = () => {
        navigation.navigate('Citas')   
    }
    const emergenciapagina = () => {
      navigation.navigate('Emergencia')   
  }
  const consultarpagina = () => {
    navigation.navigate('Consultar')   
}
    return (
        <ImageBackground source={require ('./Imagenes/fondo.png')} style={styles.container}>
           
                <Text style={styles.Titulo}>CECVACUNAAP</Text>
                <Image 
               style={styles.image2}
               source={require('./Imagenes/1.png')}
               />
            
               < TouchableOpacity style= {styles.button }onPress ={ citass} >
               <Image 
               style={styles.image1}
               source={require('./Imagenes/Citalog.png')}
               />
               <Text style={styles.TituloTex}>Citas</Text>
               <Text  style={[styles.Texto,{ marginLeft:-45}]}>Puedes agendar tu Cita para la vacuna conta el COVID-19</Text>
              
            </ TouchableOpacity>  
           
            < TouchableOpacity style= {styles.button }  onPress ={consultarpagina}>
               <Image 
               style={styles.image1}
               source={require('./Imagenes/SoliInfo.png')}
               />
                <Text style={[styles.TituloTex]}>Consultar estado</Text>
               <Text style={[styles.Texto,{ marginLeft:-150}]}>Averigurar el estado actual de su cita para la vacuna</Text>
            </ TouchableOpacity>  

            < TouchableOpacity style= {styles.button } onPress ={emergenciapagina} >
               <Image 
               style={styles.image1}
               source={require('./Imagenes/Emergencia.png')}
               />
                  <Text style={styles.Titulo}>Emergencia</Text>
               <Text  style={[styles.Texto,{ marginLeft:-105}]}>Solicitar ayuda con caracter urgente</Text>
            </ TouchableOpacity>  


            <View style={styles.lineas}> 
                <Image 
               style={styles.image2}
               source={require('./Imagenes/1.png')}
               /></View>
               
    </ImageBackground>
    ) ;
}
jkvbrjñfvek
jnfcjdlvlkejf
jflsk dcfnlb
dnklnfv kjf{gp
jkndb ljdfngñklfg
lknñlknflñckjgd
jjskndnflksdm
bflkns dlkndlf-b
             kñjvsdklñ dvd
             ksdlnkl sndlmd
             knldjnv lñkfmnv{ñdf
             jnkls ndvlkñdfjbn
             jlñjdvkjkldmv{
                 jnñlvnlkdfnvmd
                 jbsdkñnsv{pdf
                 nlkvdmfjpvoskp{vg
                 ndklofnvkdjmvbñ{ldfm
                 nklhfbjfvbskldjksnjld
                 jnvlksdgvknsd{v
                 jknvsnndfbknkdfkb
                 nkslñnvksfjvñ
                 knsdlñkvnsklvnsk{d
                 knvlksjkvlndfñblnd
                 +nljsnvklnfdblks
                                  knvsd{spkdmvñsv
                                  lknñlscnsklnvkdf
                                  klnmskvp{lf
export default Main
