import React from 'react'
import {View,Image, Text, TouchableOpacity,Linking  } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { useNavigation,useRoute} from '@react-navigation/native'
import logo from '../../assets/logo.png'
import styles from './styles'
import * as MailComposer from 'expo-mail-composer'

export default function Details(){
    const navigate = useNavigation();
    const message = `Olá ${incident.name}, eu sou o herói que vai ajudar no caso "${incident.title}" com o valor de R$${
                                                                                                                        Intl.NumberFormat('pt-BR',{
                                                                                                                        style:'currency',
                                                                                                                        currency:'BRL'})
                                                                                                                        .format(incident.value)}`
    const route = useRoute();
    const incident = route.params.incident;

    function navigateBack(){
        navigate.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject:`Herói do Caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        });
    }
    function sendWhats(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    } 
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/>
               <TouchableOpacity>
                   <Feather name='arrow-left' onPress={navigateBack} size={28} color='#e02048' />
               </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG: </Text>
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                
                <Text style={styles.incidentProperty}>Caso: {incident.title} </Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>
                
                <Text style={styles.incidentProperty}>Valor</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL'})
                        .format(incident.value)}
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia</Text>
                <Text style={styles.heroTitle}>Seja o Herói desse caso</Text>
                <Text style={styles.heroDescription}>Entre em Contato:</Text>

                <View style={styles.actions}>
                   <TouchableOpacity style={styles.action} onPress={sendWhats}>
                       <Text style={styles.actionText}>Whatsapp</Text>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles.action}onPress={sendMail}>
                       <Text style={styles.actionText}>E-mail</Text>
                   </TouchableOpacity>

                </View>
                
            </View>
        </View>

    )
}