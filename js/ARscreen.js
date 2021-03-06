import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator
} from 'react-viro';

import { Actions } from 'react-native-router-flux';

// Sets the AR scene
var InitialARScene = require('./HelloWorldSceneAR');

export default class ViroSample extends Component {
  constructor() {
    super();

    this.state = {
    
    }
  }

  render() {
    return this.getARNavigator()
    }

  getARNavigator() {
    return (
      <View style={{flex: 1}}>
            <ViroARSceneNavigator style={{flex: 1}}
            apiKey="EF75C814-E502-4F40-9F24-E6B325BC8F4A"
            initialScene={{scene: InitialARScene}}
            worldAlignment={"Gravity"} />
            <TouchableHighlight 
            style={{height: 40, width: 70, backgroundColor: '#F6AE2D',  borderRadius: 10, borderWidth: 2,}}
            onPress={() => Actions.start()}>
                <Text style={localStyles.buttonText}>
                Exit AR
                </Text>
            </TouchableHighlight>
      </View>
    );
  }
}


var localStyles = StyleSheet.create({
  viroContainer :{
    flex : 1,
    backgroundColor: "black",
  },
  outer : {
    flex : 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: "black",
  },
  inner: {
    flex : 1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: "black",
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color:'#fff',
    textAlign:'center',
    fontSize : 25
  },
  buttonText: {
    color:'#F26419',
    textAlign:'center',
    fontSize : 20,
    fontWeight: 'bold'
  },
  buttons : {
    height: 80,
    width: 150,
    paddingTop:20,
    paddingBottom:20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  exitButton : {
    height: 50,
    width: 100,
    paddingTop:10,
    paddingBottom:10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:'#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  }
});

module.exports = ViroSample