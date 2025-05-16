import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput, Pressable } from "react-native";

// Importação dos componentes
import Tela from "../components/Tela";
import Navegacao from "../components/Navegacao";
import Janela from "../components/Janela";
import estilo from "../styles/InfoStyle"

//importação da função de salvar
import Salvar from "../functions/Salvar";

// {"/n"} = dá um espaço
export default function Paciente({ navigation }) {
    const [ formulario, definirFormulario ] = useState({
        nome: "",
        horario: "",
        categoria: "",
    })

    function SalvarFormulario(){
        Salvar(formulario.nome, formulario.horario, formulario.categoria)
        definirFormulario({ nome: "", horario: "", categoria: ""})
        alert("Cadastro Salvo!")
    }

    return( <Tela>
        <StatusBar
            barStyle="dark-content"
            backgroundColor="#ffffff"/>

        <Navegacao navigation={ navigation }/>

        <Janela>
            <Text style={estilo.textoTopo}>
                Carteirinha de Saúde
            </Text>

            <TextInput style={estilo.Info}
                value={formulario.convenio }
                onChangeText={ valor => definirFormulario({...formulario, convenio: valor})}
                placeholder="Convênio"/>

            <TextInput style={estilo.Info}
                value={ formulario.produto }
                onChangeText={ valor => definirFormulario({...formulario, produto: valor})}
                placeholder="Produto"/>

            <TextInput style={estilo.Info}
                value={ formulario.codigo }
                onChangeText={ valor => definirFormulario({...formulario, codigo: valor})}
                placeholder="Codigo de Identificação"/>

            <Pressable>
                <Text style={estilo.botao}>
                    Salvar
                </Text>
            </Pressable>
        </Janela>

        <Janela>
            <Text style={estilo.textoTopo}>
                Informações do paciente
            </Text>

            <TextInput style={estilo.Info}
                value={formulario.nome }
                onChangeText={ valor => definirFormulario({...formulario, nome: valor})}
                placeholder="Nome Completo"/>

            <TextInput style={estilo.Info}
                value={ formulario.horario }
                onChangeText={ valor => definirFormulario({...formulario, horario: valor})}
                placeholder="CPF"/>

            <TextInput style={estilo.Info}
                value={ formulario.categoria }
                onChangeText={ valor => definirFormulario({...formulario, categoria: valor})}
                placeholder="Telefone para contato"/>

            <Pressable>
                <Text style={estilo.botao}>
                    Enviar
                </Text>
            </Pressable>
        </Janela>
    </Tela>)
}
