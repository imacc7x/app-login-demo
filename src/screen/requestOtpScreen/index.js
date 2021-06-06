import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import { Checkbox , Appbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const RequestOtpScreen = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);

    const handleBack = () => {
        navigation.navigate("LoginScreen")
    }

    return (

        
        <View style={styles.container}>
           <View style={ {top:'5%', right:'40%'}}>
                <Appbar.BackAction onPress={handleBack} size = {30}/>
           </View>
           <View style={{ flex: 1, width: '90%', top: '25%'}}>

                <View style={{marginTop:'10%' ,  alignItems: 'center'}}>
                    <AntDesign name="lock1" size={80} color="black"/>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.textStyle}>
                        OTP จะถูกส่งไปที่เบอร์โทรศัพท์ 
                    </Text>
                    <Text style={styles.textStyle}>
                        082-XXX-8998
                    </Text>
                </View>

                <TouchableOpacity style={styles.button} onPress ={()=> navigation.navigate("VerifyOtpScreen")}>
                    <Text style={styles.textStyle}>ขอรหัส OTP</Text>
                </TouchableOpacity>

                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 13,fontFamily: 'Itim', marginTop: '10%'}}>
                        กรณีเบอร์โทรศัพท์ไม่ถูกต้องติดต่อเบอร์ 02-XXX-XXXX
                    </Text>
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
    inputStyle: {
        fontSize: 20,
        fontFamily: 'Itim',
        marginTop: '10%'
    },
    textStyle: {
        fontSize: 20,
        fontFamily: 'Itim',
        marginVertical:'5%' 
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#c7c7c7',
        alignItems: 'center',
        marginTop: '10%' 
    },
});

export default RequestOtpScreen;







