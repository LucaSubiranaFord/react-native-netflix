import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import List from './application/components/ListComponent';
import Slide from './application/components/SliderComponent';
import Header from './application/components/HeaderComponent';
import SideMenu from 'react-native-side-menu';
import Menu from './application/components/MenuComponent';

export default class App extends React.Component {
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
            <Header toggle={this.toggle.bind(this)}/>
            <Slide />
            <List />
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