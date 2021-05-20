import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    templateItem: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 5,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
        width: "90%",
        maxWidth: 350,
        flexDirection: "column",
    },
    disable: {
        backgroundColor: "red",
        width: "90%",
        left: 0,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 30,

        padding: 10,
        marginBottom: 10,
    },
    group: {
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 10,
        paddingHorizontal: 10,
        width: "100%",
        textAlign: "center",
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        width: "100%",
        fontFamily: "Noteworthy",
        fontWeight: "bold",
    },
    point: {
        fontFamily: "Noteworthy",
        fontSize: 17,
        textAlign: "left",
        width: "100%",
    },
    container: {
        padding: "5%",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        fontFamily: "Noteworthy",
        alignItems: "center",
        justifyContent: "space-between",
    },
    statusBtn: {
        width: "90%",
        left: 0,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#ffac1c",
        padding: 10,
        marginBottom: 10,
    },

    heading: {
        fontFamily: "Noteworthy",
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: "bold",
    },
    option: {
        backgroundColor: "#ffac1c",
        alignItems: "center",
        borderRadius: 15,
        padding: 1,
        width: 250,

        paddingHorizontal: 1,
        margin: 5,
    },
    optiontext: {
        color: "#ffffff",
        fontFamily: "Noteworthy",
        fontSize: 20,
    },
    button: {
        backgroundColor: "#7a7672",
        padding: 10,
        position: "relative",
        bottom: 0,
        margin: 5,
        width: 250,
        left: 0,
        borderRadius: 10,
        alignItems: "center",
    },
    btnText: {
        fontFamily: "Noteworthy",
        fontWeight: "bold",
        fontSize: 18,

        color: "#ffffff",
    },
    select: {
        padding: 0,
        width: "auto",
        height: "auto",
        backgroundColor: "#f7ebdc",
    },
    unselect: {
        padding: 0,
        width: "auto",
        height: "auto",
    },
    switch: {
        margin: 40,
        marginBottom: 20,
        borderColor: "#ffac1c",
        borderWidth: 1,
        borderRadius: 15,
    },
    fl: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 20,
    },
    btnsm: {
        padding: 2,
        position: "relative",
        bottom: 0,
        margin: 2,
        left: 0,
        borderRadius: 10,
        alignItems: "center",
    },
    btnTextsm: {
        fontFamily: "Noteworthy",
        fontWeight: "bold",
        fontSize: 13,
        color: "red",
    },
    pointsm: {
        fontFamily: "Noteworthy",
        fontSize: 17,
    },
    text: { fontFamily: "Noteworthy" },
});


export default styles;