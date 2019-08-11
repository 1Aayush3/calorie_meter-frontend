import React,{Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
export default class AppDetail extends Component{
    render(){
        return(
            <View style={css.mainDiv}>
            <View style={css.itemMainContainer}>
            <View style={css.item}>
            <Icons name="md-stats" size={50} style={{textAlign:'center'}} />
            <Text style={css.subText}>Accurate Statics</Text>
            </View>
            <View style={css.item}>
            <Icons name="md-camera" size={50} style={{textAlign:'center'}} />
            <Text style={css.subText}>Image Recognition</Text>
            </View>
            <View style={css.item}>
            <Icons name="md-clock" size={50} style={{textAlign:'center'}} />
            <Text style={css.subText}>Track of time</Text>
            </View>
            <View style={css.item}>
            <Icons name="md-medkit" size={50}  style={{textAlign:'center'}}/>
            <Text style={css.subText}>Health Sensative</Text>
            </View>
            </View>
            </View>
        )
    }
}
const css = StyleSheet.create({
mainDiv:{
    backgroundColor:'white',
    margin:2,
    marginBottom:10,
    paddingTop:15,
    paddingBottom:15,
    borderWidth:1,
    borderColor:'#dfe6e9',
    elevation:1,
},
itemMainContainer:{
    display:'flex',
    flexDirection:'row',
    margin:5,
},
item:{
    flex:1,
    alignContent:'center',
},
subText:{
    textAlign:'center',
}
})
AppRegistry.registerComponent('AwesomeProject', ()=>AppDetail);