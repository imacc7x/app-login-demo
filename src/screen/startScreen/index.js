import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StartScreen = ({ navigation }) => {
    const [showText, setShowText] = React.useState(false);

    // React.useEffect(() => {
    //     const loadAssetsAsync = async () => {
    //         await Font.loadAsync({
    //             Itim: require('../../../assets/fonts/Itim-Regular.ttf')
    //         })
    //     }
    // }, []);

    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         const loadAssetsAsync = async () => {
    //             await Font.loadAsync({
    //                 Itim: require('../../../assets/fonts/Itim-Regular.ttf')
    //             })
    //         }
    //     });
    //     setFontload(true);
    //     return unsubscribe;
    // }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setShowText((showText) => !showText);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container} onStartShouldSetResponder={() => navigation.navigate("TermServiceScreen")}>
            <Text style={[styles.textStyle, { display: showText ? 'none' : 'flex' }]}>
                Tap to start
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccf3ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: { 
        fontSize: 30,
        fontFamily: 'Itim',
        top:'40%'
    },
});

export default StartScreen;





