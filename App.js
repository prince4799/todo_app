import * as React from 'react';
import { Text, View, StyleSheet ,StatusBar,SafeAreaView} from 'react-native';
import Constants from 'expo-constants';
import Header from './components/Header';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
    <LinearGradient style={{flex:1}} colors={['#549bd1','#394bbf','#785cc4']}>
   <StatusBar hidden={false} backgroundColor="skyblue" barStyle="light" />    
      <View style={{borderBottomEndRadius:0,flex:1,top:10,}}>
      <Header />
      </View>
      </LinearGradient>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#bcc2c4',
  },
 
});
