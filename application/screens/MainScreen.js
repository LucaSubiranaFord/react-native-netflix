import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import List from '../components/ListComponent';
import Slide from '../components/SliderComponent';
import Header from '../components/HeaderComponent';
import SideMenu from 'react-native-side-menu';
import Menu from '../components/MenuComponent';

export default class MainScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenu(isOpen){
    this.setState({isOpen});
  }

  render() {
    const menu = <Menu />;
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenu(isOpen)}
      >
      <ScrollView>
        <View style={styles.container}>
            <Header navigator={this.props.navigator} toggle={this.toggle.bind(this)}/>
            <Slide />
            <List navigator={this.props.navigator}/>
        </View>
        </ScrollView>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1
  }
})