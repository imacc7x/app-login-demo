import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

const VerifyOtpScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(0);
    const [time, setTime] = useState(180);

    const handleVerifyOtp = (text) => {
        setOtp(text);
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
        <View style={styles.container} onStartShouldSetResponder={otp.length === 6 ? () => navigation.navigate("SetPinScreen") : null}>
            <View style={{ flex: 1, width: '90%', top: '30%' }}>

                <Text style={styles.textStyleHead}>
                    ยืนยันตัวตน</Text>
                <Text style={styles.textStyle}>
                    กรุณากรอกรหัสยืนยันที่เราส่งไปให้คุณ</Text>
                <Text style={styles.textStyle}>
                    082-XXX-8998</Text>

                <OTPTextView inputCount={6} keyboardType="numeric" tintColor='#48d3ff' handleTextChange={handleVerifyOtp} />

                <View style={{ marginTop: '40%', alignItems: 'center' }}>
                    <Text style={styles.textStyle}>
                        หากคุณไม่ได้รับรหัส?</Text>
                    <TouchableOpacity>
                        <Text style={{ marginTop: '5%', fontFamily: 'Itim', fontSize: 15 }}>
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
});

export default VerifyOtpScreen;






