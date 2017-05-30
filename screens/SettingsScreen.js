import React from 'react';
import ZeroConf from '../components/zeroConf'
import { ScrollView, StyleSheet } from 'react-native';

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Settings',
    },
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <ZeroConf/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
