import { setItemAsync } from "expo-secure-store";

export default async function Salvar(nome, horario, categoria) {
    await setItemAsync("consultar", JSON.stringify({
        nome,
        horario,
        categoria,
        convenio,
        produto,
        codigo
    }))
}