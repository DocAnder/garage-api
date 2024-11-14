import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#1E1E20',
        alignItems: 'center',
        justifyContent: 'center'
    },

    box:{
        position: 'relative',
        width: 350,
        height: '90%',
        borderWidth: 2,
        borderColor: '#fff',
        overflow: 'hidden',
        borderRadius: 10
    },

    corner:{
        position: 'absolute',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderTopWidth: 20,
        borderTopColor: '#fff',
        borderRightWidth: 20,
        borderRightColor: 'transparent',
    },

    topRigth:{
        top: 0,
        right: 0,
        transform: [{rotate:'90deg'}]
    },
    
    bottomRigth:{
        bottom: 0,
        right: 0,
        transform: [{rotate:'180deg'}]
    },
    
    bottomLefth:{
        bottom: 0,
        left: 0,
        transform: [{rotate:'270deg'}]
    },



})