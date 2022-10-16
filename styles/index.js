import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    contener: {
        flex: 1,
        alignItems: "center",
    },
    safe: {
        marginTop: 40,
        flex: 10,
        justifyContent: "center",
        alignItems: "center",
        bordertRadius: 20 ,
    },
    input: {
        backgroundColor: "#D8D8D8",
        borderColor: '#000000',
        alignItems: "center",
        borderRadius: 8,
        padding : 2,
        width : 300,
        height: 25,
        space: 2
        
    },
    labelInput: {
        fontSize: 20,
        fontWeight: "italic",
    },
    contConnect: {
        height: 200,
        borderRadius: 8,
        padding: 2
    },
    btn: {
        height: 20,
        backgroundColor: "#4CAF50",
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        space: 10
    },
    tache: {
        width: 300,
        backgroundColor: "#007bff",
        margin: 10,
        paddingVertical: 5,
        bordertRadius: 20
    },
    tacheTxt: {
        textAlign: "center",
    }
    
})
