import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Input } from 'react-native-elements';

const ForgetPassScreen = ({ navigation }) => {

    const handleBack = () => {
        navigation.navigate("LoginScreen")
    }

    return (
        <View style={styles.container}>

            <View style={{ top: '5%', width: '100%' }}>
                <Appbar.BackAction onPress={handleBack} size={30} />
            </View>

            <View style={{ flex: 1, width: '90%', top: '10%' }}>

                <Text style={styles.textStyleHead}>
                    ลืมรหัสผ่าน?
                </Text>
                <Text style={styles.textStyle}>
                    กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่
                </Text>
                <Text style={styles.textStyle}>
                    ลงทะเบียน
                </Text>

                <View style={{ marginTop: '30%' }}>
                    <Input placeholder='อีเมล / เบอร์โทรศัพท์' style={styles.textStyle} />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SendEmailScreen")}>
                    <Text style={styles.textStyle}>ส่ง</Text>
                </TouchableOpacity>

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
        marginBottom: '3%'
    },
    button: {
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#48d3ff',
        alignItems: 'center',
        marginTop: '10%',
        justifyContent: 'center'
    },
});

export default ForgetPassScreen;







