import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, width: '90%', top: '25%' }}>

                <Input placeholder='ชื่อผู้ใช้งาน' style={styles.inputStyle} />
                <Input placeholder='รหัสผ่าน' style={styles.inputStyle} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Checkbox.Android status={checked ? 'checked' : 'unchecked'} onPress={() => { setChecked(!checked); }} />
                        <Text style={styles.textStyle}>บันทึกการเข้าสู่ระบบ</Text>
                    </View>
                    <TouchableOpacity  onPress={() => navigation.navigate("ForgetPassScreen")}>
                        <Text style={styles.textStyle}>ลืมรหัสผ่าน?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RequestOtpScreen")}>
                    <Text style={styles.textStyle}>เข้าสู่ระบบ</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '10%' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#7a7a7a' }} />
                    <View>
                        <Text style={{ fontFamily: 'Itim', fontSize: 20, color: '#7a7a7a' }}>ไม่มีบัญชีผู้ใช้</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#7a7a7a' }} />
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textStyle}>เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้</Text>
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
    inputStyle: {
        fontSize: 20,
        fontFamily: 'Itim',
        marginTop: '10%'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Itim',
        lineHeight: 35,
    },
    button: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#48d3ff',
        alignItems: 'center',
        marginTop: '10%'
    },
});

export default LoginScreen;







