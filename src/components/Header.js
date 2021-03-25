import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';


function Header({ title, goBack, rightButton, rightComponent }) {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#fff' barStyle='dark-content'></StatusBar>
            <View style={styles.container}>
                {goBack && <TouchableOpacity onPress={goBack} style={styles.back}>
                    <Text>Logout</Text>
                </TouchableOpacity>}
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                {rightButton && <TouchableOpacity onPress={rightButton} style={styles.right}>
                    <Text>{rightComponent}</Text>
                </TouchableOpacity>}
            </View>
        </SafeAreaView>
    )
}

Header.defaultProps = {
    title: 'Header',
    goBack: null,
    rightButton: null
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    },
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    back: {
        position: 'absolute',
        left: 15
    },
    right: {
        position: 'absolute',
        right: 15
    }
})

export default Header;