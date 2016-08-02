import React, { Component } from 'react';
import {StyleSheet, View, PanResponder, processColor} from 'react-native';

var CIRCLE_SIZE = 80;

function _updateNatveProps(){
  console.log('ddd');
}

export default class PanResponderExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'PanResponder Sample',
      description: 'Shows the use of PanResponder to provide basic gesture handling.',
      _panResponder: {},
      _previousLeft: 0,
      _previousTop: 0,
      backgroundColor: 'green',
    };

  }

  componentWillMount() {
    this.setState({
      _panResponder: PanResponder.create({
        onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
        onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
        onPanResponderGrant: this._handlePanResponderGrant,
        onPanResponderMove: this._handlePanResponderMove,
        onPanResponderRelease: this._handlePanResponderRelease,
        onPanResponderEnd: this._handlePanResponderEnd,
        // onPanResponderTerminate: this._handlePanResponderEnd,
      }),
      _previousLeft: 20,
      _previousTop: 20,
    });

  }

  componentDidMount() {
    console.log(circle);
    circle.setState({
      _previousLeft: this.state._previousLeft,
      _previousTop: this.state._previousTop,
    });
    circle.setNativeProps({style: {left: this.state._previousLeft, top: this.state._previousTop, backgroundColor: this.state.backgroundColor}});
  }


  _handleStartShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return true;
  }

  _handleMoveShouldSetPanResponder(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?
    return true;
  }

  _handlePanResponderGrant(e: Object, gestureState: Object) {
    // console.log(this);
    // console.log(circle);
    circle.setNativeProps({style: {backgroundColor: 'blue'}});
  }

  _handlePanResponderMove(e: Object, gestureState: Object) {
    // console.log(circle);
    // console.log(gestureState);
    circle.setState({
      backgroundColor: 'pink'
    });
    circle.setNativeProps({style: {left: circle.state._previousLeft + gestureState.dx, top: circle.state._previousTop + gestureState.dy, backgroundColor: circle.state.backgroundColor}});
  }

  _handlePanResponderEnd(e: Object, gestureState: Object) {
    // console.log(circle);
    console.log(gestureState);
    // console.log(gestureState.moveX);
    // console.log(gestureState.moveY);
    // console.log(gestureState.x0);
    // console.log(gestureState.y0);
    // console.log(gestureState.dx);
    // console.log(gestureState.dy);
    // console.log(gestureState.vx);
    // console.log(gestureState.vy);
    circle.setState({
      backgroundColor: 'yellow',
    });
    circle.setNativeProps({style: {backgroundColor: circle.state.backgroundColor}});
  }

  _handlePanResponderRelease(e: Object, gestureState: Object){
    console.log(gestureState);
    // console.log(gestureState.moveX);
    // console.log(gestureState.moveY);
    // console.log(gestureState.x0);
    // console.log(gestureState.y0);
    // console.log(gestureState.dx);
    // console.log(gestureState.dy);
    // console.log(gestureState.vx);
    // console.log(gestureState.vy);
    circle.setState({
      backgroundColor: 'red',
      _previousLeft: circle.state._previousLeft += gestureState.dx,
      _previousTop: circle.state._previousTop += gestureState.dy
    });
    circle.setNativeProps({style: {left: circle.state._previousLeft, top: circle.state._previousTop, backgroundColor: circle.state.backgroundColor}});
  }


  render() {
    return (
      <View
        style={styles.container}>
        <View
          ref={(circle) => global.circle = circle }
          style={styles.circle}
          {...this.state._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
      position: 'absolute',
      left: 0,
      top: 0,
    },
    container: {
      flex: 1,
      paddingTop: 64,
    },
});
