import React, { Component } from 'react';
import {StyleSheet,Text,View, PanResponder, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class BasicGestureResponder extends Component {
  constructor(props){
    super(props);

    this.state = {
      x: 0,
      y: 0,
      pageX:0,
      pageY:0,
      locationX:0,
      locationY:0,
      event:'你想做什么'
    };
  }

  _onResponderMove(e){
    // console.log('onResponderMove');
    // console.log(e);
    this.setState({
        pageX: e.nativeEvent.pageX,
        pageY: e.nativeEvent.pageY,
        locationX: e.nativeEvent.locationX,
        locationY: e.nativeEvent.locationY,
        tx:e.nativeEvent.pageX,
        ty:e.nativeEvent.pageY
    });

  }

  _onResponderRelease(e){
    // console.log('onResponderRelease');
    // console.log(e);

    this.setState({
        pageX: e.nativeEvent.pageX,
        pageY: e.nativeEvent.pageY,
        locationX: e.nativeEvent.locationX,
        locationY: e.nativeEvent.locationY
    });
  }

  _onResponderGrant(e){
    // console.log('onResponderGrant');
    // console.log(e);
    // return false;
  }

  _onResponderReject(e){
    // console.log('_onResponderReject');
    // console.log(e);
    // return true;
  }

  _onStartShouldSetResponder(e){
    // console.log('onStartShouldSetResponder');
    // console.log(e);
    this.setState({
        x: e.nativeEvent.pageX,
        y: e.nativeEvent.pageY,
        pageX: e.nativeEvent.pageX,
        pageY: e.nativeEvent.pageY
    });
    return true;
  }

  _onMoveShouldSetResponder(e){
    return true;
  }



  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>基本的手势响应</Text>
            <View
                style={styles.responseZone}
                onResponderMove={this._onResponderMove.bind(this)}
                onResponderRelease={this._onResponderRelease.bind(this)}
                onResponderGrant = {this._onResponderGrant.bind(this)}
                onResponderReject= {this._onResponderReject.bind(this)}
                onStartShouldSetResponder={this._onStartShouldSetResponder.bind(this)}
                onMoveShouldSetResponder={this._onMoveShouldSetResponder.bind(this)}
            >
                <View>
                    <Text style={styles.welcome}>初始位置</Text>
                    <Text style={styles.text}>x: {this.state.x}</Text>
                    <Text style={styles.text}>y: {this.state.y}</Text>
                </View>

                <View>
                    <Text style={styles.welcome}>点击时位置</Text>
                    <Text style={styles.text}>pageX: {this.state.pageX}</Text>
                    <Text style={styles.text}>pageY: {this.state.pageY}</Text>
                    <Text style={styles.text}>LocationX: {this.state.locationX}</Text>
                    <Text style={styles.text}>LocationY: {this.state.locationY}</Text>
                </View>

                <View>
                    <Text style={styles.welcome}>释放时位置</Text>
                    <Text style={styles.text}>pageX: {this.state.pageX}</Text>
                    <Text style={styles.text}>pageY: {this.state.pageY}</Text>
                    <Text style={styles.text}>LocationX: {this.state.locationX}</Text>
                    <Text style={styles.text}>LocationY: {this.state.locationY}</Text>
                </View>

                <View>
                    <Text style={styles.welcome}>{this.state.event}</Text>
                </View>
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{width: Dimensions.get('window').width-20, height:40, fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  responseZone:{ width:Dimensions.get('window').width - 60, height: Dimensions.get('window').height*2/3, margin:10, borderWidth:1, borderColor:'#ddd'},
  welcome: { fontSize: 20, textAlign: 'center', margin: 10},
  text:{fontSize:14, textAlign:'center'}
});
