import React from 'react'
import {
  createBottomTabNavigator,
  createAppContainer,
}
from 'react-navigation';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base'
import Camera from './src/components/camera.js'
import Result from './src/components/result.js'
import Profile from './src/components/Profile.js'

const AppNavigator = createBottomTabNavigator(
    {
      Camera: Camera,
      Result: Result,
      Profile: Profile
    },
    {
      initialRouteName: "Result",
      navigationOptions: {
        title: 'Calorie Meter'
      },
      tabBarComponent: (props) => (
        <Footer>
          <FooterTab>
            <Button
                  active={props.navigation.state.index === 0}
              onPress={() =>
                props.navigation.navigate('Camera')
              }
            >
              <Icon
                  active={props.navigation.state.index === 0}
                  name="camera"
              />
            </Button>
            <Button
                  active={props.navigation.state.index === 1}
             onPress={() =>
                props.navigation.navigate('Result')
              }
            >
              <Icon
                  active={props.navigation.state.index === 1}
                  name="apps"
              />
            </Button>
            <Button
                  active={props.navigation.state.index === 2}
             onPress={() =>
                props.navigation.navigate('Profile')
              }
            >
              <Icon
                  active={props.navigation.state.index === 2}
                  name="person"
              />
            </Button>
          </FooterTab>
        </Footer>
      ),
    }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Container>
          <Header>
          <Left/>
          <Body>
          <Text> Calorie Meter </Text>
          </Body>
          <Right />
          </Header>
          <AppContainer/>
      </Container>
    )
  }
}

