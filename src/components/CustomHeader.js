import React, {Component} from 'react';
import {AppRegistry, Text, StyleSheet,View, TouchableOpacity, Image} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {Header, Left, Right} from 'native-base';
class CustomHeader extends Component{

  render(){
    var userName = "Aayush Raj Joshi"
    let profilePicture = require('../../assets/profileplaceholder.jpg');
    return(
      <Header style={css.header}>
      <Left style={css.left}>
      <Image source={profilePicture} style={{height:150, width:150, borderRadius:5}}></Image>
      </Left>
      <Right style={css.right}>
      <Text style={css.profileText}>{userName}</Text>
      </Right>
      </Header> 
    );
  }
}
const css = StyleSheet.create({
  header:{
    height:190,
    backgroundColor:'#00b894',
  },
  left:{
    marginTop:80,
  },
  right:{
    paddingRight:25,
    marginTop:80,
  },
  profileText:{
    fontSize:24,
    marginTop:30,
    paddingLeft:75,
    color:'white',
  }
})
export default CustomHeader;
AppRegistry.registerComponent('AwesomeProject', ()=> CustomHeader);
