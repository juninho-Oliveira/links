import { useState, } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";

import { Caterories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

import { LinksStorage } from "@/storage/link-storage";

export default function Add() {
    const [category, setCategoty] = useState("")
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")

    async function handleAdd() {
        try {
            if (!category) {
                return Alert.alert("Categoria", "Selecione a categoria")
            }

            if (!name.trim()) {
                return Alert.alert("Nome", "Informe um nome")
            }

            if (!url.trim()) {
                return Alert.alert("URL", "Informe a url")
            }
            
            await LinksStorage.save({
                id: new Date().getTime().toString(),
                name,
                url,
                category
            })

            Alert.alert("Sucesso", "Novo link adicionado", [
                {text: "OK", onPress: () => router.back()}
            ])


            //const data = await LinksStorage.get()
            //console.log(data)
            //console.log({ category, name, url })
            //console.log(new Date().getTime().toString())
            
        } catch (error) {
            Alert.alert("Erro", "não foi possível salvar o link")
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>Selecionar uma categoria</Text>

            <Caterories onChange={setCategoty} selected={category} />

            <View style={styles.form}>
                <Input placeholder="name" onChangeText={setName} autoCorrect={false} />
                <Input placeholder="URL" onChangeText={setUrl} autoCorrect={false}  />
                <Button title="Adicionar" onPress={handleAdd} />
            </View>

        </View>
    )
}