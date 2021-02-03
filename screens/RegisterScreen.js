import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import { KeyboardAvoidingView } from "react-native";
import { Button, Input, Text} from "react-native-elements";
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login",
        });
    }, [navigation]);

    const register = () => {};
    return (
        <KeyboardAvoidingView behavior="padding" style= {styles.container}>
            <StatusBar style="Light" />
            
            <Text h3 style={{ marginBottom: 50 }}>
                Create a Signal account
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name" 
                    autofocus 
                    type="text" 
                    value={name}
                    onChangeText={(text) => setName(text)} 
                    />      
                     <Input
                    placeholder="Email" 
                    type="email" 
                    value={email}
                    onChangeText={(text) => setEmail(text)} 
                    />
                     <Input
                    placeholder="Password" 
                    type="password"
                    secureTextEntry 
                    value={password}
                    onChangeText={(text) => setPassword(text)} 
                    />
                     <Input
                    placeholder="Profile Picture URL (optional)" 
                    type="imageUrl" 
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register}
                    />
            </View>

            <Button onPress={register} title="Register" />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    },
});

