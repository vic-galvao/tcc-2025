import { StyleSheet } from "react-native";

export default StyleSheet.create({
    textoTopo: {
        fontSize: 20, 
        fontFamily: "Poppins",
        textAlign: "center"
    },

    Info: {
        backgroundColor: "#eeeeee",
        fontFamily: "Poppins",
        padding: 8,
        marginBottom: 8
    },

    botao: {
        backgroundColor: "#5DBAFF",
        fontFamily: "Poppins",
        fontSize: 17,
        textAlign: "center",
        padding: 16,
        color: "#ffff"
    },

    infoMedicos: {
        fontSize: 17, 
        fontFamily: "Poppins",
        textAlign: "center",
    },

    textoTopoMedicos: {
        fontSize: 28, 
        fontFamily: "Poppins",
        textAlign: "center",
        backgroundColor: "#5DBAFF",
        color: "#fff",
        marginTop: 20,
        margin: 20,
        borderRadius: 10,
    },

    nomeMedico: {
        display: "flex",
        flexDirection: "row",
        fontSize: 18,
        fontFamily: "Poppins",
        fontStyle: "italic"
    },

    textoMedico: {
        display: "flex",
        flexDirection: "row",
        fontSize: 16,
        fontFamily: "Poppins",
        paddingBottom: 13
    },

    botaoMedico: {
        backgroundColor: "#5DBAFF",
        fontFamily: "Poppins",
        fontSize: 17,
        textAlign: "center",
        padding: 10,
        color: "#ffff",
        textAlign: "center"
    },

    fotoMedicos: {
        height: 230,
        width: 230
    },

    fotoLocal: {
        height: 330,
        width: 270
    },

    textoLocal: {
        fontFamily: "Poppins",
        marginBottom: 3,
        fontSize: 16
    },

    textoAberto: {
        fontFamily: "Poppins",
        marginBottom: 3,
        color: "#5DBAFF",
        fontSize: 16
    },

    calendario: {
        width: 26,
        height: 26,
        marginLeft: 10,
        tintColor: "#fff"
    }
})