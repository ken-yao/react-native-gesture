'use strict';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Navigator, DrawerLayoutAndroid} from 'react-native';

import Index from './Page/Index';
import TestPageOne from './Page/TestPageOne';
import TestPageTwo from './Page/TestPageTwo';
import TestPageThree from './Page/TestPageThree';
import TestPageFour from './Page/TestPageFour';


class rnGesture extends Component {
    constructor(props){
        super(props);
    }

    openDrawer(){
        this.refs['DRAWER'].openDrawer();
    };

    closeDrawer(){
        this.refs['DRAWER'].closeDrawer();
    }

    goTo(n) {
        nav.push({
            id: n.id,
        });
        this.closeDrawer();
    }

    renderScene(route, nav) {
      switch (route.id){
          case 'Index':
              return (<Index navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'TestPageOne':
              return (<TestPageOne navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
              break;
          case 'TestPageTwo':
              return (<TestPageTwo navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'TestPageThree':
              return (<TestPageThree navigator={nav} {...this.props} {...route.passProps} />);
              break;
          case 'TestPageFour':
              return (<TestPageFour navigator={nav} {...this.props} {...route.passProps} />);
              break;
      }
  }

  render() {
    var navigationView = (
          <View style={styles.container}>
              <Text style={styles.menuTitle}>React Native</Text>
              <TouchableHighlight style={styles.menuItem} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'Index'})}><Text style={styles.menuText}>主页</Text></TouchableHighlight>
              <TouchableHighlight style={styles.menuItem} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'TestPageOne'})}><Text style={styles.menuText}>Gesture Responder System</Text></TouchableHighlight>
              <TouchableHighlight style={styles.menuItem} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'TestPageTwo'})}><Text style={styles.menuText}>TestPageTwo</Text></TouchableHighlight>
              <TouchableHighlight style={styles.menuItem} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'TestPageThree'})}><Text style={styles.menuText}>测试页面三</Text></TouchableHighlight>
              <TouchableHighlight style={styles.menuItem} underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'TestPageFour'})}><Text style={styles.menuText}>测试页面四</Text></TouchableHighlight>
          </View>
    );

    return (
        <DrawerLayoutAndroid
            ref={'DRAWER'}
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.left}
            renderNavigationView={() => navigationView}>

            <View style={styles.container}>
                <Navigator
                    initialRoute={{id:'TestPageOne'}}
                    ref={((nav) => { global.nav = nav })}
                    renderScene={this.renderScene.bind(this)}
                    configureScene={(route) => {
                        if (route.sceneConfig) {
                          return route.sceneConfig;
                        }
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                />
            </View>

        </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  menuTitle:{
    marginTop: 16,
    marginBottom:16,
    color:'#4f4f4f',
    fontSize: 20,
    textAlign: 'center'
  },
  menuItem:{
    alignItems:'flex-start',
    flexDirection:'column',
    marginHorizontal:10,
    padding:10
  },
  menuText:{
    fontSize:18
  }
});

AppRegistry.registerComponent('rnGesture', () => rnGesture);