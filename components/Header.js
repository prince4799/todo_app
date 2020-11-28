import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const Width = Dimensions.get('window').width;
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Task from './task';

export default function Header() {
  const [todos, setTodos] = React.useState([]);
  const [value, setValue] = React.useState('');

  const handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { text: value, key: Date.now(), checked: false }]);
      setValue('');
    }
  };
  const handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true;
      })
    );
  };
  const handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };
  // handleDeleteTodo = (id) => {
  //  setTodos( todos.filter((todo) => {
  //      if (todo.key !== id) return true
  //  })
  // )}

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.textContainer}
        colors={['#3119bd', '#a714ba']}>
        <Text style={styles.textStyle}>MY TODOS..</Text>
      </LinearGradient>
      <LinearGradient style={styles.card}
      colors={['#f2a2e2', '#dd91f2']}>
        <View style={{ flexDirection: 'row', padding: 5, marginBottom: 5 }}>
          <TextInput
            style={styles.input}
            placeholder="add item"
            value={`${value}`}
            onChangeText={(value) => setValue(value)}
            returnKeyType={'done'}
            multiline={true}
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <Icon name="plus" size={30} color="#900" style={{padding:5 ,right: 0 }} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {todos.map((task) => (
            <Task
              text={task.text}
              key={task.key}
              checked={task.checked}
              handleDeleteTodo={() => handleDeleteTodo(task.key)}
              setChecked={() => handleChecked(task.key)}
            />
          ))}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
  textContainer: {
    height: 40,
    width: Width,
    justifyContent: 'center',
    top: 0,
    borderTopLeftRadius: 70,
    borderBottomRightRadius: 70,
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: Width - 30,
    height: '85%',
    borderRadius: 10,
    margin: 12,
    marginTop: 20,
    shadowColor: 'coral',
    shadowOpacity: 0.9,
    shadowRadius: 15,
    alignItems: 'baseline',
  },
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    fontSize: 18,
    width: Width - 90,
    left: 15,
  },
});
