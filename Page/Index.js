'use strict';
import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Index extends Component {

  render() {
    return (
    	<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:24}}>React Native</Text>
        <Text style={{fontSize:24}}>手势</Text>
        <Text style={{marginTop:10}}>向右拖动查看内容</Text>
      </View>
    );
  }

}

module.exports = Index;
