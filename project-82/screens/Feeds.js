import React, {Component} from "react";
import {Text, View, Image, SafeAreaView, FlatList} from "react-native";

export default class Feeds extends Component{
  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
            source={require("../assets/logo.png")}
            style={styles.iconImage}>
            </Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={posts}
          renderItem={this.renderItem}
        />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  droidSafeArea: {
    marginTop: PlatForm.OS=== "android" ? StatusBar.currentHeight:RFValue(35),
  },
  appTitle:{
    flex:0.07,
    flexDirection:'row'
  },
  appIcon:{
    flex:0.02,
    justifyContent:"center",
    alignItems:"center"
  },
  iconImage:{
    width:"100%",
    height:"100%",
    resizeMode:"contain"
  },
  appTitleTextContainer:{
    flex:0.8,
    justifyContent:"center"
  },
  appTitleText:{
    color:"white",
    fontSize:RFValue(28)
  },
  cardContainer:{
    flex:0.85
  }
});