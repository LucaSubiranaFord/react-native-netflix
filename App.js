import React, {Component} from 'react';
import {
    Navigator
} from 'react-native-deprecated-custom-components';

import MainScreen from './application/screens/MainScreen';
import Search from './application/components/SearchComponent';
import Details from './application/components/DetailsComponent';

class App extends Component {
    _renderScene(route, navigator)
    {
        var navigator = {navigator}

        switch(route.ident)
        {
            case 'MainScreen':
                return (
                    <MainScreen {...navigator}/>
                )
            case 'Search':
                return (
                    <Search {...navigator}/>
                )
            case 'Details':
                return (
                    <Details {...navigator} {...route.passProps}/>
                )
        }
    }

    render(){
        return (
            <Navigator 
                initialRoute={{ident: 'MainScreen'}}
                renderScene={this._renderScene}
            />
        )
    }
}

export default App;
