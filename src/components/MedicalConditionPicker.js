import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker, Icon } from 'native-base';
import axios from 'axios'
import GLOBALS from '../utils/constants'
export default class MedicalConditionPicker extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      medicalConditions: []
    };
  }
  async registerMedicalCondition(value) {
    this.setState({
      selected: value
    })
     await axios({
       method: 'post',
       url: GLOBALS.BASE_URL + 'api/medical-conditions',
       data: {id: value}
     })
  }

  async componentDidMount() {
    this.getMedicalConditions()
  }

  async getMedicalConditions () {
     await axios({
       method: 'get',
       url: GLOBALS.BASE_URL + 'api/medical-conditions'
     })
       .then((response)=>{
        this.setState({
          medicalConditions: response.data
        })
     })
    }

  render() {
    return (
      <Form>
        <Item picker>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            style={{ width: undefined }}
            placeholder="Please select your medical condition"
            placeholderStyle={{ color: "grey" }}
            placeholderIconColor="grey"
            selectedValue={this.state.selected}
            onValueChange={this.registerMedicalCondition.bind(this)}
          >
            {
              this.state.medicalConditions.map(condition => {
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
    );
  }
}