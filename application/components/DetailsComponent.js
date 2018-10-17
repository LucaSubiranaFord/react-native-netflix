import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    ImageBackground,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');

class Details extends Component {
    render(){
        const {thumbnail} = this.props.item.details
        return(
            <ScrollView style={styles.container}>
                <ImageBackground
                    source={{uri: thumbnail}}
                    style={styles.thumbnail}
                >
                    <TouchableWithoutFeedback>
                        <View>
                            <Image
                                source={require('../images/icnPlay.jpg')}
                                style={styles.imagePlay}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    thumbnail: {
        width: width,
        height: 300
    },
    imagePlay: {
        height: 30,
        width: 30
    }
})

export default Details;