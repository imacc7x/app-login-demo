import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Checkbox, Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const SetTouchIdScreen = ({ navigation, previous }) => {
    const [touchId, setTouchId] = React.useState(false);

    return (
        <View style={styles.container}>

            <View style={{ flex: 1, width: '90%', top: '15%'}}>
                <Text style={styles.textStyleHead}>
                    Touch ID</Text>
                <Text style={styles.textStyle}>
                    ตั้งค่าล็อคอินด้วยนิ้วมือ</Text>
                <Text style={styles.textStyle}>
                    เพื่อการเข้าถึงที่รวดเร็วขึ้น</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '30%' }}>
                    <View style={styles.circle} >
                        <MaterialCommunityIcons name="fingerprint" size={80} color="black" />
                    </View>             
                </View>

                <View style={{marginTop:'30%'}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textStyle}>ตั้งค่าลายนิ้วมือ</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{ alignItems: 'center',}} onPress={()=>   navigation.navigate("PinScreen", {setTouchId:touchId})}>
                        <Text style={styles.textStyle}>ข้าม</Text>
                    </TouchableOpacity>
                </View>
           
            </View>
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
        fontSize: 20,
        fontFamily: 'Itim',
    },
    textStyleHead: {
        fontSize: 30,
        fontFamily: 'Itim',
        marginBottom: '5%'
    },
    textStyleHeadModal: {
        fontSize: 25,
        fontFamily: 'Itim',
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#c7c7c7',
        alignItems: 'center',
        marginVertical: '5%'
    },
    buttonModal: {
        flex: 1,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#c7c7c7',
        alignItems: 'center',
        marginRight: '1%'
    },
    modalView: {
        height: '80%',
        top: '20%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textInputContainer: {
        marginBottom: 20,
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        marginLeft: '1%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SetTouchIdScreen;






