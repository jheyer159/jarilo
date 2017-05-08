import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SensorData name="Humidity" data="24"/>
        <SensorData name="Air temp" data="56" />
        <GetData />
      </View>
    );
  }
}

class SensorData extends Component {
  render(){
    return (
      <Text>{this.props.name}: {this.props.data}</Text>
    )
  }
}

class GetData extends Component {
  constructor(props){
    super(props)
    this.state = { data: false }
    let pollRateSec = 15

    setInterval(() => {
      this.setState( { data: !this.state.data } )
    }, pollRateSec * 1000)
  }

  render(){
    return(
      <Text>State: {this.state.data.toString()} </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
