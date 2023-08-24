import React, { Componet } from 'react';
import { Text, View, StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
 } from 'react-native';



export default class HomeScreen extends Componet {
    rander () {
        return(
            <View style = { styles.container }>
                <SafeAreaView style = { styles.droidSafeArea}/>
                
                    <View style = { styles.titleBar }>
                        <Text style = { styles.titleText }> App Assistente social </Text>
                    </View>
                    <TouchableOpacity>
                        <Text style = { styles.routCard }> Tela de Buscas </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style = { styles.routCard }> Tela de Informações </Text>
                    </TouchableOpacity>
                    </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex:  1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight:50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    KnowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15,
    },
    bgDigit: {
        position: "absolute",
        color: "rgba (183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
})