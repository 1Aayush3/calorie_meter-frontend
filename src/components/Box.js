import React, {Component} from 'react';
import {AppRegistry, Text, StyleSheet,View} from 'react-native';
class Box extends Component{
    constructor(props){
        super(props);
    this.state={
        heading:this.props.heading,
        message:this.props.message,
    }
}
  render(){
    return(
      <View style={css.mainDiv}>
      <Text style={css.heading}>{this.state.heading}</Text>
      <Text style={css.message}>{this.state.message}</Text>
      </View>
    );
  }
}
const css = StyleSheet.create({
mainDiv:{
    position:'relative',
    padding:15,
    marginBottom:15,
    marginRight:5,
    marginLeft:5,
    borderWidth:1,
    borderColor:'#dfe6e9',
    backgroundColor:'white',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    elevation:1,
},
heading:{
    fontSize:24, 
    color:'black',
    textAlign:'justify',
},
message:{
    fontSize:14,
     color:'#636e72',
     paddingTop:10,
     textAlign:'justify',
}
}) 
export default Box;
AppRegistry.registerComponent('AwesomeProject', ()=> Box);
