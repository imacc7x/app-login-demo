import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { loadAsync, useFonts, Font } from 'expo-font';

const StartScreen = ({ navigation }) => {
    const [showText, setShowText] = React.useState(false);
    const [isLoadFont, setLoadFont] = React.useState(false);

    const [loaded] = useFonts({
        Itim: require('../../../assets/fonts/Itim-Regular.ttf')
    });

    if (!loaded) {
        //console.log('not load');
        return null;
    }

    // console.log(showText);

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

    // React.useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShowText((showText) => !showText);
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

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
        flex: 1,
        fontSize: 30,
        fontFamily: 'Itim',
        top: '80%',
        //backgroundColor: '#fff',
    },
});

export default StartScreen;





