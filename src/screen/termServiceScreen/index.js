import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Appbar } from 'react-native-paper';

const TermServiceScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleChangeScreen = () => {
        setModalVisible(false);
        navigation.navigate("LoginScreen")
    }

    const handleBack = () => {
        setModalVisible(false)
    }

    return (
        <View style={[styles.container, modalVisible ? { backgroundColor: '#009ccc' } : '']}>

            <View style={{ flex: 1, width: '90%', top: '30%' }}>
                <Text style={styles.textStyleHead}>
                    ยินดีต้อนรับ</Text>
                <Text style={[styles.textStyle, { color: '#474747' }]}>
                    กรุณาเลือกภาษา</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textStyle}>English</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>ไทย</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>

                <View style={{ top: '5%' }}>
                    <Appbar.BackAction onPress={handleBack} size={30} />
                </View>

                <View style={styles.modalView}>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <AntDesign name="filetext1" size={30} color="black" />
                            <Text style={styles.textStyleHeadModal}>เงื่อนไขการใช้บริการ</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#c7c7c7', marginVertical: 15 }} />
                        </View>

                        <View style={{ flex: 1, width: '100%' }} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={styles.buttonModal}>
                                <Text style={styles.textStyle}>ปฏิเสธ</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonModal} onPress={handleChangeScreen}>
                                <Text style={styles.textStyle}>ยอมรับ</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
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
    textStyleHead: {
        fontSize: 30,
        fontFamily: 'Itim',
        marginBottom: '1%'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Itim',
    },
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#48d3ff',
        alignItems: 'center',
        marginVertical: '5%'
    },
    modalView: {
        height: '80%',
        top: '10%',
        backgroundColor: "#ccf3ff",
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
    textStyleHeadModal: {
        fontSize: 25,
        fontFamily: 'Itim',
    },
    buttonModal: {
        flex: 1,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#48d3ff',
        alignItems: 'center',
        marginRight: '1%'
    },
});

export default TermServiceScreen;






