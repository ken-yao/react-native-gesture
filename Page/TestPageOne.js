import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class TestPageOne extends Component {
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
        locationY: e.nativeEvent.locationY
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
    this.swipe(this.state.y, this.state.pageY);
  }

  _onResponderGrant(e){
    // console.log('onResponderGrant');
  }

  _onStartShouldSetResponder(e){
    // console.log('onStartShouldSetResponder');
    // console.log(e);
    this.setState({
        x: e.nativeEvent.pageX,
        y: e.nativeEvent.pageY
    });
    return true;
  }

  _onMoveShouldSetResponder(e){
    // console.log('onMoveShouldSetResponder')
    // console.log(e);
    return true;
  }


  swipe(start, end){
    if(start - end > 150){
        this.setState({
            event: '你上拉了'
        });
        this.props.navigator.push({
            id: 'TestPageThree'
        });
    }else if(end - start > 150){
        this.setState({
            event: '你下滑了'
        });
        this.props.navigator.push({
            id: 'TestPageFour'
        });
    }else{
        this.setState({
            event: '无法响应你的操作'
        });
    }
  }



  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Gesture Responder System</Text>
            <View 
                style={styles.responseZone}
                onResponderMove={this._onResponderMove.bind(this)}
                onResponderRelease={this._onResponderRelease.bind(this)}
                onResponderGrant = {this._onResponderGrant.bind(this)}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  responseZone:{
    width:Dimensions.get('window').width - 60,
    height: Dimensions.get('window').height*2/3,
    margin:10,
    borderWidth:1,
    borderColor:'#ddd'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text:{
    fontSize:14,
    textAlign:'center'
  }
});
