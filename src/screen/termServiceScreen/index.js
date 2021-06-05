import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

const TermServiceScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loaded] = useFonts({
        Itim: require('../../../assets/fonts/Itim-Regular.ttf')
    });

    if (!loaded) {
        //console.log('not load');
        return null;
    }

    return (
        <View style={styles.container}>

            <View style={{ flex: 1, top: '30%', right: '25%' }}>
                <Text style={styles.textStyleHead}>
                    ยินดีต้อนรับ</Text>
                <Text style={styles.textStyle}>
                    กรุณาเลือกภาษา</Text>
            </View>

            <View style={{ flex: 1, width: '100%' , left: '5%'}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textStyleButton}>English</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyleButton}>ไทย</Text>
                </TouchableOpacity>

            </View>


            
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.modalView}>
                    <View style={{flex:1 , width: '100%'}}>
                        
                        <View style={{ flexDirection: 'row'}}>
                            <AntDesign name="filetext1" size={30} color="black"/>
                            <Text style={styles.textStyleHeadModal}>เงื่อนไขการใช้บริการ</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#c7c7c7', marginVertical: 15 }} />
                        </View>

                        <View style={{ flex: 1, width: '100%' }}>
                            <Text>asdasd</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity style={styles.buttonModal}>
                                <Text style={styles.textStyle}>ปฏิเสธ</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonModal}>
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
    textStyle: {
        fontSize: 20,
        fontFamily: 'Itim',
    },
    textStyleHead: {
        fontSize: 30,
        fontFamily: 'Itim',
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
        width: '90%',
        alignItems: 'center',
        marginVertical: 10
    },
    buttonModal: {
        flex: 1,
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#c7c7c7',
        alignItems: 'center',
        marginRight:'1%'
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
});

export default TermServiceScreen;




