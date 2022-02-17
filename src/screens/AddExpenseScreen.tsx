import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {GlobalStyle} from '../GlobalStyle';
import Expense from '../models/Expense';
import {addExpense, updateExpense} from '../reducers/actions/ExpenseActions';
import {HomeStackParams} from './MainScreen';

type props = NativeStackScreenProps<HomeStackParams, 'Add_Expense'>;

const AddExpenseScreen: React.FC<props> = props => {
  const navigation = props.navigation;
  const expense = props.route.params?.expense;

  const [description, setDescription] = useState(expense ? expense.des : '');
  const [amount, setAmount] = useState(expense ? expense.amount : 0);
  const [name, setName] = useState(expense ? expense.name : '');

  const dispatch = useDispatch();

  function didPressContinueButton() {
    if (expense) {
      const newExpense = new Expense(name, amount, description, expense.date);
      newExpense.id = expense.id;
      dispatch(updateExpense(expense, newExpense));
      navigation.goBack();
    } else {
      dispatch(addExpense(new Expense(name, amount, description, Date.now())));
    }
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.root}>
        <View style={GlobalStyle.topBar}>
          <View style={GlobalStyle.titleBox}>
            <Text style={GlobalStyle.title}>Expense</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialCommunityIcons
              name="keyboard-backspace"
              size={28}
              color={'white'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsParent}>
          <View style={styles.detailsBox}>
            <TextInput
              style={styles.detailsBoxItem}
              mode="outlined"
              label={'Name'}
              defaultValue={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.detailsBoxItem}
              mode="outlined"
              label={'Category'}
            />
            <TextInput
              style={styles.detailsBoxItem}
              mode="outlined"
              label={'Description'}
              onChangeText={text => setDescription(text)}
              defaultValue={description}
            />

            <Button
              style={{...styles.detailsBoxItem, marginVertical: 8}}
              mode="contained"
              onPress={didPressContinueButton}>
              {expense ? 'Save' : 'Continue'}
            </Button>
          </View>

          <TextInput
            theme={{colors: {text: 'white', primary: 'transparent'}}}
            style={{
              backgroundColor: 'transparent',
              fontSize: 34,
              fontWeight: '600',
            }}
            autoFocus={true}
            keyboardType="number-pad"
            left={<TextInput.Affix text="Rs. " textStyle={{color: 'white'}} />}
            defaultValue={String(amount)}
            onChangeText={text => setAmount(Number(text))}
          />

          <Text
            style={{
              marginLeft: 14,
              fontSize: 18,
              fontWeight: '600',
              opacity: 0.8,
              color: 'white',
            }}>
            How much?
          </Text>
        </View>
      </View>
    </>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#FD3C4A',
    flex: 1,
  },
  detailsParent: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  detailsBox: {
    padding: 8,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  detailsBoxItem: {
    marginVertical: 4,
  },
});
