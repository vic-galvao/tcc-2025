import { StyleSheet } from "react-native";

export default StyleSheet.create({
    navegacao: {
        backgroundColor: "#ffffff"
    },

    navegacaoTopo: {
        paddingVertical: 64,
    },

    navegacaoTopoTexto: {
        color: "#5DBAFF",
        fontFamily: "Poppins-regular",
        fontSize: 32,
        textAlign: "center"
    },

    navegacaoBase: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 16
    },

    navegacaoBaseBotao: {
        flex: 1
    },

    navegacaoBaseTexto: {
        color: "#5DBAFF",
        fontFamily: "Poppins-regular",
        textAlign: "center",
        fontSize: 24,
    },

    iconSaude: {
        height: 100,
        width: 100,
        marginLeft: 146,
    }
})