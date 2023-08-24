import React, { Component } from 'react' ;
import {Text, View} from 'react-native' ;

export default class InfoScreen extends Component {
    rander () {
        return(
            <View
                style = {{
                    flex: 1, 
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text> Tela de Informações </Text>
            </View>
        )
    }
}