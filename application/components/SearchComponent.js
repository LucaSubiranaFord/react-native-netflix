import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
    Dimensions,
    Image,
    FlatList,
    ScrollView
} from 'react-native';

const {width, height} = Dimensions.get('window');
const showsFirst = [
    {
        key: 1,
        name:'Suits',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/2432.jpg'
    },
    {
        key: 2,
        name:'Modern Family',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/628.jpg'
    },
    {
        key: 3,
        name:'The Flash',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/78/195988.jpg'
    },
    {
        key: 4,
        name:'Supergirl',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/83/209955.jpg'
    },
    {
        key: 5,
        name:'Designated Survivor',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/253490.jpg'
    },
    {
        key: 6,
        name:'24: Legacy',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg'
    }
]

const showsSecond = [
    {
        key: 7,
        name:'Colony',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/91/229234.jpg'
    },
    {
        key: 8,
        name:'The Walking Dead',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg'
    },
    {
        key: 9,
        name:'Taken',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg'
    },
    {
        key: 10,
        name:'This is us',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg'
    },
    {
        key: 11,
        name:'Superstore',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg'
    },
    {
        key: 12,
        name:'Lethal Weapon',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg'
    },
    {
        key: 13,
        name:'The 100',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg'
    },
    {
        key: 14,
        name:'Homeland',
        image: 'https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg'
    }
]

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            data: ''
        }
    }

    filter(text)
    {
        const newData = showsFirst.filter( (item) => item.name.toUpperCase().includes(text.toUpperCase()))
        this.setState({
            data : newData,
            text: text
        })
    }
    deleteData(){
        this.setState({
            text:'',
            data: ''
        })
    }
    _renderItem(item)
    {
        return (
            <Image key={item.key} source={{uri: item.item.image}} style={styles.dataImage} />
        );
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image 
                        source={require('../images/icnSearch.png')}
                        style={styles.icnSearchImage}
                    />
                    <TextInput 
                        value={this.state.text}
                        onChangeText={(text) => this.filter(text)}
                        style={styles.input}
                        placeholder="Search"
                        placeholderTextColor="gray"
                        keyboardAppearance="dark"
                        autoFocus={true}
                    />
                    {
                        this.state.text ?
                        <TouchableWithoutFeedback onPress={() => this.deleteData()}>
                            <Image 
                                source={require('../images/icnArrow.png')}
                                style={styles.icnArrow}
                            />
                        </TouchableWithoutFeedback>
                            :
                            null
                    }
                    <TouchableWithoutFeedback style={styles.cancelBtn} onPress={() => this.props.navigator.pop()}>
                        <View style={styles.cancelBtnContainer}>
                            <Text style={styles.cancelButtonText}>
                                Cancel
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ScrollView>
                    <FlatList 
                        style={{marginHorizontal: 5}}
                        numColumns={3}
                        data={this.state.data}
                        renderItem= {(item) => this._renderItem(item)}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cancelBtn: {

    },
    cancelBtnContainer: {

    },
    cancelButtonText: {
        color: 'white',

    },
    input: {
        height: 30,
        backgroundColor: '#323232',
        width: width - (width / 4),
        marginHorizontal: 10,
        paddingLeft: 30,
        borderRadius: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    header: {
        height: 40,
        backgroundColor: '#181818',
        borderBottomWidth: 1,
        borderColor: '#3a3a3a',
        paddingBottom: 5,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    icnSearchImage: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 10,
        left: 15,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    icnArrow: {
        width: 16,
        height: 16,
        position: 'absolute',
        top: 10,
        right:90,
        backgroundColor: 'transparent'
    },
    dataImage: {
        marginRight: 5,
        marginTop : 5,
        width: 115,
        height: 170
    }
})
export default Search;