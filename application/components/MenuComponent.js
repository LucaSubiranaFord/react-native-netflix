import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

const {width, height} = Dimensions.get('window');

class Menu extends Component {
    render(){
        return(
            <View style={styles.menu}>
                <View style={styles.userDataContainer}>
                    <View style={styles.avatarImage}>
                        <Image 
                            source={require('../images/user.png')}
                            style={styles.avatar}
                        />
                        <Text style={styles.text}>Luca</Text>
                    </View>
                    <Image source={require('../images/icnExchange.jpg')} style={styles.icnExchange}/>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <Image source={require('../images/icnDownload.png')} style={styles.imageWithText}/>
                            <Text style={styles.text}>My Downloads</Text>
                        </View>
                            <Image source={require('../images/icnArrow.png')} style={styles.rightImage}/>
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <Image source={require('../images/icnCheck.png')} style={styles.imageWithText}/>
                            <Text style={styles.text}>My List</Text>
                        </View>
                            <Image source={require('../images/icnArrow.png')} style={styles.rightImage}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        width,
        height,
        backgroundColor: 'gray',
        padding: 5,
    },
    avatarImage: {

    },
    avatar: {

    },
    text: {

    },
    icnExchange: {
        width: 15,
        height: 15
    },
    userDataContainer: {

    },
    scrollContainer: {

    },
    imageWithText: {
        width: 15,
        height: 15
    },
    rightImage: {
        width: 15,
        height: 15
    }
});
export default Menu;