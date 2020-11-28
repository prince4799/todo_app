import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Check from 'react-native-vector-icons/FontAwesome';

export default function Task({text,setChecked,checked,key,handleDeleteTodo}) {
  return (
    <View style={styles.container}>
      <Icon
        name="square"
        size={35}
        color="#900"
        style={{ marginLeft: 15,elevation:10,}}
        onPress={setChecked}
      />
      {checked && <View style={styles.verticalLine}></View>}
        <Text style={styles.todo}>
         {text}
        </Text>
      <View style={styles.deleteStyle}>
        <Icon
          name="trash-2"
          size={30}
          color="#900"
          style={{left:230, top: 0}}
          onPress={handleDeleteTodo}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  todo: {
    fontSize: 14,
    borderColor: 'balck',
    borderBottomWidth: 1,
    width:'70%',
    margin:5
  },
  deleteStyle:{
    position: 'absolute', 
  },
    verticalLine: {
        borderColor: '#991108',
        borderWidth: 5,
        marginLeft:25,
        width: '5%',
        position: 'absolute',
        marginTop: 10,
        elevation:2,
    }
});
