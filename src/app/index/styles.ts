import {colors} from "../../styles/colors"
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    title: {
        color: colors.green[900],
        fontSize: 25,
    }
})