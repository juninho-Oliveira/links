import {colors} from "@/styles/colors"
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        paddingTop: 52,
        
    },
    title: {
        color: colors.green[900],
        fontSize: 25,
    },
    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32,
    },
    logo: {
        height: 32,
        width: 38,
    },
    links: {
        borderTopWidth: 1,
        borderTopColor: colors.gray[600],
    },
    linksContent: {
        gap: 20,
        padding: 24,
        paddingBottom: 100,
    }
})