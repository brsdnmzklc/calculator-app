import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const buttonWidth = width / 5
const buttonHeight = height / 10

export default StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        height: buttonHeight,
        width: buttonWidth,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: height,
        margin: 5
    },
    secondaryContainer: {
        backgroundColor: "#333333",
        height: height / 10,
        width: width / 2.4,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: height,
        margin: 5,

    },
    title: {
        fontSize: 20,
        color: '#ffff',
        fontWeight: "bold",
    },
})