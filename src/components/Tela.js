import React from "react";
import { ScrollView } from "react-native";

export default function Tela(props){
    return <ScrollView style={{ backgroundColor: "#eeeeee" }}>
        { props.children }
    </ScrollView>
}