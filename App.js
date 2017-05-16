import React, { Component } from "react"
import { StyleSheet, Text, View } from "react-native"

export default class App extends Component {
	render() {
		return (
      <View style={styles.container}>
        <SensorData name="Humidity" data="24"/>
        <SensorData name="Air temp" data="56" />
        <GetData />
      </View>
		)
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
	}

	componentDidMount() {
		let tickRateSec = 2
		this.timerID = setInterval(
      () => this.tick(),
      tickRateSec * 1000
    )
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

  async tick() {
    try {
      console.log("got into async func")
      let response = await fetch('http://localhost:8888');
      let responseJson = await response.json()
      console.log( responseJson )
      this.setState( {data: JSON.stringify(responseJson)})
    } catch(error) {
        console.error(error);
    }
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
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	}
})
