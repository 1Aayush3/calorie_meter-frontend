import React, {Component} from 'react';
import {AppRegistry, StyleSheet,View} from 'react-native';
import {List, ListItem, Content, Text} from 'native-base';
import Icons from 'react-native-vector-icons/Ionicons';
export default class FoodHistory extends Component{
  render(){

    let items = [
        {name: 'Pizza'},
        {name: 'Momo'},
        {name: 'Rice'},
        {name: 'Chicken'}
      ];
    return(
      <View style={css.mainDiv}>
        <Text style={css.headline}>Food History</Text>
        <Text style={css.subHeadline}>December 1st</Text>
        <View style={css.wrapper}>
          <View style={css.timeline}>
            <Text>left</Text>
          </View>
          <View style={css.item}>
            {
              items.map(t=>{
              return(
              <View key={t.name} style={( t === items.length - 1) ? css.dataLastone : css.data}>
              <Icons name="md-radio-button-on" size={29} style={{zIndex:10, paddingRight:25}} color={'#0984e3'} />
              <Text key={t.name} style={{fontSize:15, marginTop:0}}>{t.name}</Text>
              </View>
              )
            })
            }
          </View>
        </View>
      </View>
    );
  }
}
const css = StyleSheet.create({
  mainDiv:{
    padding:15,
    marginBottom:50,
    marginRight:5,
    marginLeft:5,
    borderWidth:1,
    borderColor:'#dfe6e9',
    backgroundColor:'white',
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    elevation:1,
    zIndex:0,
    backgroundColor:'white',
  },
  headline:{
      fontSize:26,
      color:'#636e72'
  },
  wrapper:{
      display:'flex',
      flexDirection:'row',
  },
  timeline:{
      width:5,
      borderWidth:5,
      borderColor:'#dcdde1',
      borderBottomLeftRadius:15,
      borderTopLeftRadius:15,
      borderBottomRightRadius:15,
      borderTopRightRadius:15,
  },
  subHeadline:{
    paddingTop:0,
    paddingLeft:5,
    marginBottom:35,
    fontSize:15,
    color:'#b2bec3',
  },
  item:{
      display:'flex',
      flexDirection:'column',
      marginLeft:-17,
  },
  food:{

  },
  data:{
    flexDirection:'row', 
    paddingBottom:35,
  },
  dataLastone:{
      flexDirection:'row',
      paddingBottom:0,
  }

})
AppRegistry.registerComponent('AwesomeProject', ()=> FoodHistory);
