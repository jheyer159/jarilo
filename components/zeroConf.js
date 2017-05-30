import React from 'react';
import Zeroconf from 'react-native-zeroconf'
import { View, StyleSheet, Text } from 'react-native';



export default class ZeroConf extends React.Component {
    scan () {
        const zeroconf = new Zeroconf()
        console.log( "test ")
        //let result = zeroconf.scan('http','tcp','local.')
        //console.log( result )
        zeroconf.on('start', () => console.log('The scan has started.'))
        zeroconf.scan(type = 'http', protocol = 'tcp', domain = 'local.')
    }
    render(){
        let result = ""
        try { 
            result = this.scan()
        }
        catch(e){
            result = e
        }
        finally {
            return(
                <View>
                    <Text>{result.toString()}</Text>
                </View>
            
            )
        }
    }
}