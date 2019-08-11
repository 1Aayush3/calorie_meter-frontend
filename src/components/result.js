import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import {
    Container,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body
} from 'native-base';
import AppDetail from './AppDetail';
import FoodsPicker from './FoodsPicker'
export default class Camera extends Component {
  render() {
    const height = Dimensions.get('window').height /2;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://dl2.macupdate.com/images/icons256/20586.png?d=1481628519'}} />
                <Body>
                  <Text> Calory Meter  </Text>
                  <Text note>Keep track of your food.</Text>
                </Body>
              </Left>
            </CardItem>
            <FoodsPicker/>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/styles/full/public/5f720e03-107b-41a9-851b-e0a2aa15886a_1528083972.jpeg?itok=vGIMqIcx&mtime=1528084000'}} style={{height:height, width: null, flex: 1}}/>
            </CardItem>
            <CardItem cardBody>
           </CardItem>
          </Card>
          <AppDetail />
          </Content>
        </Container>
    )
  }
}
