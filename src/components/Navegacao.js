import React from "react";
import { View, Text, Pressable, Image } from "react-native";

//importação dos estilos
import estilo from "../styles/NavegacaoStyle.js";

export default function Navegacao(props) {
    return (<View style={ estilo.navegacao }>
        <View style={ estilo.navegacaoTopo }> 
            <Image source={require("../../assets/data/icon.png")} style={estilo.iconSaude}/>
        </View>    
        <View style={ estilo.navegacaoBase }>
            <Pressable 
                style={ estilo.navegacaoBaseBotao }
                onPress={ () => props.navigation.navigate("Clinica")}>
                <Text style={ estilo.navegacaoBaseTexto }>
                    Clínica
                </Text>
            </Pressable>

            <Pressable
                style={ estilo.navegacaoBaseBotao }
                onPress={ () => props.navigation.navigate("Paciente")}>
                <Text style={ estilo.navegacaoBaseTexto }>
                    Paciente
                </Text>
            </Pressable>

            <Pressable
                style={ estilo.navegacaoBaseBotao }
                onPress={ () => props.navigation.navigate("Doutores")}>
                <Text style={ estilo.navegacaoBaseTexto }>
                    Doutores
                </Text>
            </Pressable>
        </View>
    </View>)
}