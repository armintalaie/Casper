import { StyleSheet } from 'react-native';

const font = "System"
const FirstOrange = "#ffac1c"
const TEST = "#ff964f"

const styles = StyleSheet.create({
    landing: {
        color: "#ffffff",
        padding: 100,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#ffffff"
    },
    newtm: {

        paddingTop: 40,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    },
    templateItem: {
        borderRadius: 15,
        backgroundColor: '#ffffff',
        padding: 30,
        paddingHorizontal: 15,
        paddingTop: 10,
        margin: 5,
        marginBottom: 20,
        width: 360,
        maxWidth: "90%",
        flexDirection: "column",
        shadowColor: "#adaaa6",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3.84,

        elevation: 5,
    },
    templateSelect: {
        borderRadius: 15,
        backgroundColor: '#ffffff',
        padding: 30,
        paddingHorizontal: 15,
        margin: 5,
        marginBottom: 20,
        paddingTop: 10,
        width: 360,
        maxWidth: "90%",
        flexDirection: "column",
        shadowColor: "#adaaa6",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.95,
        shadowRadius: 8.84,

        elevation: 20,
    },

    templateBody: {
        paddingHorizontal: 15,
        paddingBottom: 5,
    },
    disable: {
        width: 400,
        maxWidth: "85%",
        left: 0,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#7a7672",
        padding: 17,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 9.27,

        elevation: 15,

    },
    glance: {
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 20,
        borderColor: "#7a7672",
        borderWidth: 2,
        backgroundColor: "#7a7672",
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 3,
        width: "95%",
        textAlign: "center",
        shadowColor: "#adaaa6",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3.84,
        justifyContent: "space-between",
        elevation: 20,
        margin: 5,

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
        fontSize: 36,
        textAlign: "left",
        width: "100%",
        fontFamily: font,
        padding: 12,
        marginTop: 20,
        paddingLeft: 20,
        paddingBottom: 5,
        marginBottom: 1,
        fontWeight: "bold",
    },
    point: {
        fontFamily: font,
        fontSize: 17,
        textAlign: "left",
        width: "100%",
    },
    glpoint: {
        fontFamily: font,
        fontSize: 16,
        textAlign: "center",
        width: "100%",
        fontWeight: "300",
        paddingBottom: 25,
        marginBottom: 15,
        color: "#ffffff",

    },
    glpointl: {
        fontFamily: font,
        fontSize: 17,
        textAlign: "left",
        width: "100%",
        marginBottom: 2,
        fontWeight: "500",
        marginTop: 2,
        color: "#ffffff",

    },
    glpointh: {
        fontFamily: font,
        fontSize: 20,
        fontStyle: "italic",
        color: "#ffffff",

    },
    fullWidth: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        padding: 20,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#ffffff"
    },
    containerstart: {
        padding: "5%",
        width: "100%",
        paddingTop: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    pointBig: {
        fontSize: 20,
        fontStyle: "italic",
    },

    scrollContainer: {
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 300,
    },

    scrollContainerDashboard: {
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 150,
    },

    statusBtn: {
        width: 400,
        maxWidth: "85%",
        left: 0,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 30,
        backgroundColor: TEST,
        padding: 17,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 9.27,

        elevation: 15,
    },

    heading: {
        fontFamily: font,
        paddingBottom: 10,
        fontSize: 27,
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
        fontFamily: font,
        fontSize: 20,
    },
    button: {
        backgroundColor: "#7a7672",
        padding: 12,
        position: "relative",
        bottom: 0,
        margin: 5,
        width: 250,
        left: 0,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#bdbab7",

        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.48,
        shadowRadius: 14.95,

        elevation: 28,
    },
    btnText: {
        fontFamily: font,
        fontWeight: "bold",
        fontSize: 20,

        color: "#ffffff",
    },
    select: {
        padding: 0,
        width: "auto",
        height: "auto",

    },
    unselect: {
        padding: 0,
        width: "auto",
        height: "auto",
    },
    switch: {
        margin: 30,
        marginBottom: 10,
        borderWidth: 0.3,
        borderColor: "#adaaa6",
        borderRadius: 20,
        shadowColor: "#adaaa6",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.75,
        shadowRadius: 3.84,

        elevation: 5,
    },

    switchSelected: {
        backgroundColor: "#f7ebdc",
        color: "#ffffff"
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
        fontFamily: font,
        fontWeight: "bold",
        fontSize: 13,
        color: TEST,
    },
    pointsm: {
        fontFamily: "System",
        fontSize: 17,
    },
    text: { fontFamily: font },
    templateTitle: {
        fontFamily: "System",
        fontSize: 24,
        fontWeight: "600"

    },
    textwhite: { fontFamily: font, color: "#ffffff" },
    editbar: {
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 3,
        marginTop: 10,
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
    },
    edittext: {
        fontFamily: font,
        fontSize: 13,
        fontWeight: "bold"
    },

    pointxsm: {
        fontFamily: font,
        fontSize: 13,
        fontStyle: "italic"
    },

    templateCards: {
        width: "100%",
        alignItems: "flex-start",
    },
    normalDot: {


        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    greeting: {
        fontStyle: 'italic',
        fontWeight: '400',
        fontSize: 28,
        paddingBottom: 10,
    },
    glancetitle: {

        fontWeight: '400',
        fontSize: 23,
        paddingBottom: 10,
        textAlign: "left",

    },

    activeTemplate: {
        position: "absolute",
        backgroundColor: TEST,
        width: 350,
        borderRadius: 15,
        padding: 30,
        paddingHorizontal: 8,
        paddingTop: 10,
        margin: 5,
        marginBottom: 5,
        maxWidth: "95%",
        flexDirection: "column",
        shadowColor: "#adaaa6",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.95,
        shadowRadius: 3.84,
        elevation: 5,
        top: 170,

    },

    overlay: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150,
    },
    orangeBold: {
        fontWeight: "bold",
        color: TEST,
        fontSize: 22,
    }

});


export { styles, TEST };