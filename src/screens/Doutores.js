import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Image, Pressable } from "react-native";

//importando os componentes
import Tela from "../components/Tela.js";
import Janela from "../components/Janela.js";
import Navegacao from "../components/Navegacao.js";
import estilo from "../styles/InfoStyle.js"

export default function Doutores({ navigation }) {
    const [ resultados, definirResultados] = useState({})

    return ( <Tela>
        <StatusBar 
            barStyle="dark-content"
            backgroundColor="#fff"/>

        <Navegacao navigation={ navigation }/>
            <Text style={estilo.textoTopoMedicos}>Nossos Doutores</Text>

        <Janela>
            <Image source={require("../../assets/data/doutor1.jpg")}/>
            <Text style={estilo.nomeMedico}>Doutor: Alfredo</Text>
            <Text style={estilo.textoMedico}>Especialista: Cardiologista</Text>
            <Pressable>
                <Text style={estilo.botaoMedico}>
                    Agendar Data <Image source={require("../../assets/data/calendario.png")} style={estilo.calendario}/>
                </Text>
            </Pressable>
        </Janela>

        <Janela>
            <Image source={require("../../assets/data/doutora.png")} style={estilo.fotoMedicos}/>
            <Text style={estilo.nomeMedico}>Doutora: Anna</Text>
            <Text style={estilo.textoMedico}>Especialista: Ortopedista & Pediatra</Text>
            <Pressable>
                <Text style={estilo.botaoMedico}>
                    Agendar Data <Image source={require("../../assets/data/calendario.png")} style={estilo.calendario}/>
                </Text>
            </Pressable>
        </Janela>

        <Janela>
            <Image source={require("../../assets/data/doutoramoca.png")} style={estilo.fotoMedicos}/>
            <Text style={estilo.nomeMedico}>doutora: Natalia</Text>
            <Text style={estilo.textoMedico}>Especialista: Oncologista</Text>
            <Pressable>
                <Text style={estilo.botaoMedico}>
                    Agendar Data <Image source={require("../../assets/data/calendario.png")} style={estilo.calendario}/>
                </Text>
            </Pressable>
        </Janela>

        <Janela>
            <Image source={require("../../assets/data/doutorjoge.png")} style={estilo.fotoMedicos}/>
            <Text style={estilo.nomeMedico}>Doutor: Jorge</Text>
            <Text style={estilo.textoMedico}>Especialista: Neurologista</Text>
            <Pressable>
                <Text style={estilo.botaoMedico}>
                    Agendar Data <Image source={require("../../assets/data/calendario.png")} style={estilo.calendario}/>
                </Text>
            </Pressable>
        </Janela>

        <Janela>
            <Image source={require("../../assets/data/doutortodd.png")} style={estilo.fotoMedicos}/>
            <Text style={estilo.nomeMedico}>Doutor: Todd</Text>
            <Text style={estilo.textoMedico}>Especialista: Otorrinolaringologista</Text>
            <Pressable>
                <Text style={estilo.botaoMedico}>
                    Agendar Data <Image source={require("../../assets/data/calendario.png")} style={estilo.calendario}/>
                </Text>
            </Pressable>
        </Janela>
    </Tela> )
}