import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import BackButton from './BackButton';


function Header({ title, onBack }) {
    const checkVisibleBackBtn = () => {
        if(onBack === null) {
            return null;
        }

        return (
            // style={styles.backBtn}
            <TouchableOpacity onPress={onBack}> 
                <BackButton></BackButton>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                {checkVisibleBackBtn}
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </SafeAreaView>
    )
}

Header.defaultProps = {
    title: 'Header',
    onBack: null
}

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: '#fff'
    },
    container: {
        width: '100%',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
    },
    // backBtn: {
    //     position: 'absolute',
    //     top: 20,
    //     left: 20
    // },
})

export default Header;