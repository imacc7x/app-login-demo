import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Checkbox, Appbar } from 'react-native-paper';
import OTPTextView from 'react-native-otp-textinput';

const VerifyOtpScreen = ({ navigation, previous }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [otp, setOtp] = useState(0);
    const [time, setTime] = useState(180);

    const verifyOtp = (text) => {
        setOtp(text);
    }

    const handleBack = () => {
        console.log('check');
    }

    React.useEffect(() => {
        let interval = setInterval(() => {
          setTime(lastTimerCount => {
              lastTimerCount <= 1 && clearInterval(interval)
              return lastTimerCount - 1
          })
        }, 1000) 

        return () => clearInterval(interval)
      }, []);

    return (
        <View style={styles.container} onStartShouldSetResponder={otp.length === 6 ?() =>  navigation.navigate("SetPinScreen") : null}>

            <View style={{ flex: 1, width: '90%', top: '30%' }}>
                <Text style={styles.textStyleHead}>
                    ยืนยันตัวตน</Text>
                <Text style={styles.textStyle}>
                    กรุณากรอกรหัสยืนยันที่เราส่งไปให้คุณ</Text>
                <Text style={styles.textStyle}>
                    082-XXX-8998</Text>

                <OTPTextView inputCount={6} keyboardType="numeric" handleTextChange={verifyOtp} />

                <View style={{ marginTop: '40%', alignItems: 'center' }}>
                    <Text style={styles.textStyle}>
                        หากคุณไม่ได้รับรหัส?</Text>
                        <TouchableOpacity>
                        <Text style={{marginTop:'5%' , fontFamily: 'Itim' , fontSize: 15}}>
                        ส่งรหัสใหม่ ({time})</Text>
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
        marginBottom: '1%'
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
});

export default VerifyOtpScreen;






