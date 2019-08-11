import React, { Component } from "react";
import {SafeAreaView, ScrollView,View} from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import Box from './Box';
import CustomHeader from './CustomHeader';
import FoodHistory from './FoodHistory';
import MedicalConditionPicker from './MedicalConditionPicker'
export default class CardItemButton extends Component {
  render() {
    return (
    <SafeAreaView>
    <ScrollView>
    <CustomHeader />
    <View style={{marginTop:100}}>
    <Box
      heading="Hi, Jon Doe" message="We help you keep track of your eating habits. Dont Worry the data you provide to us, will never be publicly available to others."
    />
    </View>
    <MedicalConditionPicker/>
    <FoodHistory />
    </ScrollView>
    </SafeAreaView>
  );
}
}
