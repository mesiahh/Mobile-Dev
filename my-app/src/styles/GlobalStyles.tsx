import { StyleSheet } from "react-native";
import { myColors } from "../function/Colors"; 

export const Styles = StyleSheet.create({
    // Button
    btnOrange: {
        width: 100,
        height: 100,
        backgroundColor: myColors.orange,
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
    },
    btnDark: {
        width: 72,
        height: 72,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
    },
    btnLight: {
        width: 72,
        height: 72,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
    },
    btnGray: {
        width: 100,
        height: 100,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },

    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.white,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.white,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
})