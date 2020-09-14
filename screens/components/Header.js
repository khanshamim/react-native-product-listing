import React from 'react';
import {Image, Stylesheet, View, StyleSheet} from 'react-native';

export function Header(){
    return(
        <View style={styles.view}>
            <Image style={styles.img} source={require('../../assets/img_background.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        flexDirection:'row',
        flex:1,
        alignItems:'stretch'
    },
    img:{
        width: 200,
        height: 70,
        resizeMode: 'stretch'
    }
});