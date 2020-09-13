import React from 'react'
import { StyleSheet, View, Alert, Text ,TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //default value of the date time
      date: '',
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    that.setState({
      //Setting the value of the date time
      date:
        year + '/' + month + '/' + date + ' ' 
    });
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'left',
        }}>

        <Text
          style={{
            fontSize: 20,
            marginTop: -10,
            marginLeft: 20,
            marginBottom: 20,

          }}>
          {this.state.date}
        </Text>


          <FontAwesome
          style={{
            marginTop: -7,
            marginLeft: 6,
            marginBottom: 10,
          }}
          name="calendar" size={18} />

      </View>
    );
  }
}


