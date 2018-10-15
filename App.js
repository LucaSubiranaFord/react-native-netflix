import React, {Component} from 'react';
import {
    Navigator
} from 'react-native-deprecated-custom-components';

import MainScreen from './application/screens/MainScreen';
import Search from './application/components/SearchComponent';

class App extends Component {
    _renderScene(route, navigator)
    {
        var navigator = {navigator}

        switch(route.ident)
        {
            case 'MainScreen':
                return (
                    <MainScreen />
                )
            case 'Search':
                return (
                    <Search />
                )
        }
    }

    render(){
        return (
            <Navigator 
                initialRoute={{ident: 'Search'}}
                renderScene={this._renderScene}
            />
        )
    }
}

export default App;
