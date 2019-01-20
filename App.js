import React from "react";
import {Image, StyleSheet, Text, TextInput, View, Button, ImageBackground, Slider} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'SwampFit',
    headerStyle: {
      backgroundColor:'#A0D2DB',
    },
    headerRight: (
      <Button
        onPress={() => alert('Time is an illusion')}
        title="Calendar"
        color='#594157'
      />
    ),
  };
  render() {
    return (
      <ImageBackground source={require('./background.jpg')}style={{width:'100%',height:'100%'}}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{"\n"}Good afternoon, Gerard!</Text>
          <Text style={styles.subText}>Your daily wellness streak is now at</Text>
          <Text style={styles.numberEmphasis}>5</Text>
          <Text style={styles.subText}>days!{'\n\n\n'}</Text>
          <Button title="Enter Wellness Info"
            color="#594157"
            onPress={() => this.props.navigation.navigate('WellnessInfo')}
          />
          <Text style={styles.subText}>{'\n'}</Text>
          <Button title="View Leaderboard"
            color="#594157"
            onPress={() => this.props.navigation.navigate('Leaderboard')}
          />
        </View>
      </ImageBackground>
    )
  }
}

class InfoScreen extends React.Component {
  static navigationOptions = {
    title: 'SwampFit',
    headerStyle: {
      backgroundColor:'#A0D2DB',
    },
    headerTintColor:'black'
  };
  render() {
    return (
      <View>
        <Text style={styles.titleTextBlack}>Enter wellness info:</Text>
        <Text style={styles.subTextBlack}>  Water intake:</Text>
        <TextInput
          style={{height: 60, fontSize: 18, margin: 10}}
          placeholder="Enter water consumed (in oz)"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.subTextBlack}>  Hours of sleep:</Text>
        <TextInput
          style={{height: 60, fontSize: 18, margin: 10}}
          placeholder="Enter number of hours slept"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.subTextBlack}>  Minutes of exercise:</Text>
        <TextInput
          style={{height: 60, fontSize: 18, margin: 10}}
          placeholder="Enter minutes of exercise"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.subTextBlack}>{"\n"}{"\n"}{"\n"}</Text>
        <Button title="Calculate wellness score"
            color="#594157"
            onPress={() => this.props.navigation.navigate('Score')}
          />
      </View>
    );
  }
}

class ScoreScreen extends React.Component {
  static navigationOptions = {
    title: 'SwampFit',
    headerStyle: {
      backgroundColor:'#A0D2DB',
    },
    headerTintColor:'black'
  };
  render(){
    return(
      <View>
        <Text style={styles.titleText2}>{"\n"}    Your wellness score is:</Text>
        <Text style={styles.numberEmphasisBlack}> 61.4/100{"\n"}{"\n"}{"\n"}</Text>
        <Text style={styles.subTextBlack}>{"\n"}{"\n"}</Text>
        <Button title="Return to home screen"
            color="#594157"
            onPress={() => this.props.navigation.navigate('Home')}
          />
      </View>
    )
  }
}

class LeaderboardScreen extends React.Component{
  static navigationOptions = {
    title: 'SwampFit',
    headerStyle: {
      backgroundColor:'#A0D2DB',
    },
    headerTintColor:'black',
  };
  render(){
    return(
      <View>
        <Text style={styles.titleText2}>             Leaderboard:</Text>
        <Text style={styles.subTextBlack}>1. Brett (Wellness Score: 98.5){"\n"}</Text>
        <Text style={styles.subTextBlack}>2. Kayton (Wellness Score: 91.7){"\n"}</Text>
        <Text style={styles.subTextBlack}>3. Patricia (Wellness Score: 84.6){"\n"}</Text>
        <Text style={styles.subTextRed}>4. You (Wellness Score: 81.5){"\n"}</Text>
        <Text style={styles.subTextBlack}>5. Linda (Wellness Score: 78.8){"\n"}</Text>
        <Text style={styles.subTextBlack}>6. Thomas (Wellness Score: 78.4){"\n"}</Text>
        <Text style={styles.subTextBlack}>7. Nancy (Wellness Score: 73.5){"\n"}</Text>
        <Text style={styles.subTextBlack}>8. Ronald (Wellness Score: 61.2){"\n"}</Text>
        <Text style={styles.subTextBlack}>9. Alice (Wellness Score: 32.0){"\n"}</Text>
        <Text style={styles.subTextBlack}>10. Ralph (Wellness Score: 16.1){"\n\n\n\n"}</Text>
        <Button title="Get invite code"
            color="#594157"
            onPress={() => this.props.navigation.navigate('QRCode')}
          />
      </View>
    )
  }
}

class QRCodeScreen extends React.Component{
  static navigationOptions = {
    title: 'SwampFit',
    headerStyle: {
      backgroundColor:'#A0D2DB',
    },
    headerTintColor:'black'
  };
  render(){
    return(
      <View>
        <Text style={styles.titleText2}>        Invite your friends!</Text>
        <Image
          source={require('./qr_code.jpg')}
        />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    WellnessInfo: InfoScreen,
    Score: ScoreScreen,
    Leaderboard: LeaderboardScreen,
    QRCode: QRCodeScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  textContainer: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  titleText: {
    fontFamily: 'Roboto',
    flex: 0,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  titleText2: {
    fontFamily: 'Roboto',
    flex: 0,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  titleTextBlack:{
    fontFamily: 'Roboto',
    flex: 0,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 25,
    margin: 10
  },
  numberEmphasis: {
    fontFamily: 'Roboto',
    flex: 0,
    color: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 100
  },
  numberEmphasisBlack: {
    fontFamily: 'Roboto',
    flex: 0,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 80
  },
  subText: {
    fontFamily: 'Roboto',
    flex: 0,
    color: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 20,
  },
  subTextBlack: {
    fontFamily: 'Roboto',
    flex: 0,
    color: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 20, 
  },
  subTextRed: {
    fontFamily: 'Roboto',
    flex: 0,
    color: 'red',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: 20, 
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }
});