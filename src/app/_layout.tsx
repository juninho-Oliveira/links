import { Stack } from "expo-router";
import { colors } from "@/styles/colors";

export default function Layout() {

    const backgroundColor = colors.gray[950] /*Variavel que recebe a cor */

    return (
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor },
        }} />
    )
}