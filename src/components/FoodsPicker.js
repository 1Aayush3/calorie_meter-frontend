import React, { Component } from 'react';
import { Form, Item, Picker, Icon, View, H3, Text, Card, Spinner, CardItem } from 'native-base';
import axios from 'axios'
import GLOBALS from '../utils/constants'
export default class FoodsPicker extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      foods: [],
      foodDetails: null,
      loading: false
    };
  }
  async registerFoods(value) {
    this.setState({
      selected: value
    })
    this.setState({
      loading: true
    })
     await axios({
       method: 'post',
       url: GLOBALS.BASE_URL + 'api/recommend-food',
       data: {id: value}
     })
       .then((response)=>{
        this.setState({
          foodDetails: response.data
        })
         console.log(this.state.foodDetails)
      this.setState({
        loading: false
      })
    })
  }

  getFoodDetails () {
      if (this.state.loading) {
        return (
          <Spinner color='#0984e3' />
        )
      }
      if (this.state.foodDetails) {
        return (
        <Card>
          <CardItem header>
            <H3 color='#0984e3' style={{fontWeight: 'bold'}}>{this.state.foodDetails.food[0].fields.name}</H3>
          </CardItem>
          <CardItem>
            <Text>
              <Text style={{fontWeight: 'bold'}}> Calories: </Text>
              {this.state.foodDetails.food[0].fields.calorie} gram
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Restrictions for: </Text>
              {this.state.foodDetails.bad_for[0].fields.name}
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              <Text style={{fontWeight: 'bold', color: (this.state.foodDetails.bad_for_user ? 'red' : 'green')}}>
                { this.state.foodDetails.bad_for_user ? 'This food is not healthy for you' : 'You can enjoy this food'}
              </Text>
            </Text>
          </CardItem>
        </Card>
        )
      }
  }

  async componentDidMount() {
    this.getFoodss()
  }

  async getFoodss () {
     await axios({
       method: 'get',
       url: GLOBALS.BASE_URL + 'api/foods'
     })
       .then((response)=>{
        this.setState({
          foods: response.data
        })
     })
    }

  render() {
    return (
      <View>
      <Form>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            style={{ width: undefined }}
            placeholder="Please select your food"
            placeholderStyle={{ color: "grey" }}
            placeholderIconColor="grey"
            selectedValue={this.state.selected}
            onValueChange={this.registerFoods.bind(this)}
          >
            {
              this.state.foods.map(condition => {
                return (
                  <Picker.Item
                    key={condition.pk}
                    label={condition.fields.name}
                    value={condition.pk}
                  />
                )
              })
            }
          </Picker>
        </Item>
      </Form>
        <View>{ this.getFoodDetails() }</View>
        </View>
    );
  }
}