import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, Image } from "react-native";

//importando os componentes
import Tela from "../components/Tela.js";
import Janela from "../components/Janela.js";
import Navegacao from "../components/Navegacao.js";
import estilo from "../styles/InfoStyle.js"

//importando a função carregar
import Carregar from "../functions/Carregar.js";

export default function Clinica({ navigation }) {
    const [ resultados, definirResultados] = useState({})

    useEffect(function() {
        Carregar()
            .then(function(dados) {
                const valido = JSON.parse(dados || "{}")
                definirResultados(valido)
            })
            .catch(function(erro) {
                alert(erro)
            })
            
    }, [])

    return ( <Tela>
        <StatusBar 
            barStyle="dark-content"
            backgroundColor="#fff"/>

        <Navegacao navigation={ navigation }/>
            <Text style={estilo.textoTopoMedicos}>Atendimentos</Text>
        <Janela>
            <Text style={estilo.infoMedicos}>Cardiologista ▼</Text>
            <Text>Problemas relacionados ao coração e ao sistema circulatório exigem acompanhamento com um cardiologista.
                Esse profissional cuida de doenças como hipertensão, insuficiência cardíaca e arritmias.</Text>
        </Janela>
        <Janela>
            <Text style={estilo.infoMedicos}>Neurologista ▼</Text>
            <Text>Problemas que afetam o cérebro, medula espinhal e nervos são tratados pelo neurologista.
                Doenças neurológicas, como enxaquecas frequentes e AVCs, entram no escopo dessa área.</Text>
        </Janela>
        <Janela>
            <Text style={estilo.infoMedicos}>Oncologista ▼</Text>
            <Text>O oncologista se dedica ao diagnóstico e tratamento do câncer.
                Trabalha em conjunto com cirurgiões, radioterapeutas e outros profissionais para desenvolver o
                plano terapêutico mais adequado.</Text>
        </Janela>
        <Janela>
             <Text style={estilo.infoMedicos}>Ortopedista ▼</Text>
             <Text>O ortopedista atua em problemas relacionados aos ossos, músculos e articulações.
                Fraturas, lesões esportivas e condições crônicas, como artrite, fazem parte do trabalho desse 
                especialista.</Text>
        </Janela>
        <Janela>
            <Text style={estilo.infoMedicos}>Otorrinolaringologista ▼</Text>
            <Text>O otorrinolaringologista trata problemas que afetam ouvido, nariz e garganta.
                Sintomas como sinusites, infecções de ouvido e dificuldade para engolir fazem parte do seu campo 
                de atuação.</Text>
        </Janela>
        <Janela>
            <Text style={estilo.infoMedicos}>Pediatra ▼</Text>
            <Text>O pediatra é o médico que acompanha crianças e adolescentes. 
                Ele realiza desde consultas de rotina até o tratamento de doenças infantis.</Text>
        </Janela>

        <Text style={estilo.textoTopoMedicos}>Local da Clínica</Text>
        <Janela>
            <Image source={require("../../assets/data/local.png")} style={estilo.fotoLocal}/>
            <Text style={estilo.textoLocal}>Aberto das 07:00 até as 23:00</Text>
            <Text style={estilo.textoAberto}>Aberto</Text>
            <Text style={estilo.textoLocal}>R. Francisco de Paula Guimarães</Text>
            <Text style={estilo.textoLocal}>(41)9990-9689</Text>
        </Janela>
    </Tela> )
}