import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from "react-native";
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomListItem from '../components/CustomListItem';
import { auth, db } from "../firebase";

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: {backgroundColor: "#fff"},
            headerTitleStyle: { color: "black"},
            headerTintColor: "black",
            headerLeft: () => ( 
            <View style={{ marginLeft: 20 }}>
                <TouchableOpacity>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL  }} />
                </TouchableOpacity>
            </View>
        ),
      });
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({});
