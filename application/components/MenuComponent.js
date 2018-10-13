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
                    <View style={[styles.items, styles.itemSelected]}>
                        <Text style={styles.text}>Home</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Available for Download</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Netflix Originals</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>TV Shows</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Actions & Adventure</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Children & Family</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Comedies</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Documentaries</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Dramas</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Independent Movies</Text>
                    </View>
                    <View style={styles.NoSelectedItem}>
                        <Text style={styles.text}>Indian Movies</Text>
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
        backgroundColor: '#191919',
        flex: 1
    },
    avatarImage: {
        flexDirection:'row',
        alignItems:'center'
    },
    avatar: {
        width:60,
        height:60,
        marginRight:20
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15
    },
    icnExchange: {
        width: 15,
        height: 15
    },
    userDataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 55,
        borderColor: '#000',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical:20,
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
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 3
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollContainer: {
        width: width / 2 + 59,
    },
    rightImage: {
        marginRight: 20,
        width: 13,
        height: 13
    },
    imageWithText: {
        marginRight: 10,
        paddingLeft: 20,
        width: 15,
        height: 15
    },
    items: {
        paddingLeft: 20,
        paddingVertical: 15,
        marginTop: 5
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: 'red'
    },
    NoSelectedItem: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    }
});
export default Menu;