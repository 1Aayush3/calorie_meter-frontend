import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native'
import { Constants, ImagePicker, Permissions } from 'expo'
import axios from 'axios'
import GLOBALS from '../utils/constants'


export default class Camera extends Component {
  state = {
    image: null,
    uploading: false,
    prediction: null
  }

  async componentDidMount() {
    this.props.navigation.addListener(
      'didFocus',
      () => {
        this.setState({uploading: false, image: null, prediction: null})
        this.showCamera()
      },
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.displayUploadedImage()}
        {this.displayPrediction()}
        {this.displayLoadingScreen()}
      </View>
    )
  }

  displayLoadingScreen = () => {
    if (this.state.uploading) {
      return (
        <View
          style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  }

  displayPrediction = () => {
    if (this.state.prediction) {
      return (
        <Text style={styles.predictionText}>
          That looks like a {this.state.prediction}.
        </Text>
      )
    }
  }

  displayUploadedImage = () => {
    let { image } = this.state
    if (!image) {return}
    return (
      <Image
        resizeMode="contain"
        source={{ uri: image }}
        style={styles.image}
      />
    )
  }

  showCamera = async () => {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA)
    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({ quality: 0.1 })
      this.handlePhotoTaken(pickerResult)
    }
  }

  handlePhotoTaken = async pickerResult => {
    try {
      if (!pickerResult.cancelled) {
        this.setState({ image: pickerResult.uri })
        await this.uploadImageAsync(pickerResult.uri)
      } else {
        this.props.navigation.navigate('Result')
      }
    } catch (e) {
      alert('Upload failed, sorry :(')
    } finally {
      this.setState({
        uploading: false
      })
    }
  }

  async uploadImageAsync(uri) {
    this.setState({uploading: true})
    let formData = new FormData()
    let self = this
    let image = {
      uri: uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    }
    formData.append('image', image)
     await axios({
       method: 'post',
       url: GLOBALS.BASE_URL + 'api/predict',
       data: formData
     })
    //
    // let options = {
    //   method: 'POST',
    //   body: formData,
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'multipart/form-data',
    //   },
    // }
    // return fetch(apiUrl, options)
      .then((response) => {
        self.setState({prediction: response.data.prediction})
      })
      .catch((error) => {
        console.log(error)
      })
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  predictionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50
  }
})