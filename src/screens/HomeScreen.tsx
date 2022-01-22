import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {FAB} from 'react-native-paper';

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HomeStackParams} from './MainScreen';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ExpenseCard from '../components/ExpenseCard';
import {rootReducerType} from '../reducers/Store';
import {initializeExpense} from '../reducers/actions/ExpenseActions';
import Expense from '../models/Expense';

type props = NativeStackScreenProps<HomeStackParams, 'HomeTab'>;

const HomeScreen: React.FC<props> = props => {
  const expenses = useSelector(
    (state: rootReducerType) => state.expense.expenses,
  );

  const navigation = props.navigation;

  const dispatch = useDispatch();

  const didPressExpenseItem = (expense: Expense) => {
    navigation.navigate('Detail_Screen', {
      expense: expense,
    });
  };

  const didPressFAB = () => {
    navigation.navigate('Add_Expense');
  };

  useEffect(() => {
    dispatch(initializeExpense());
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={expenses}
        renderItem={item => {
          return (
            <ExpenseCard
              expense={item.item}
              onPress={() => {
                didPressExpenseItem(item.item);
              }}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      <FAB style={styles.fab} icon="plus" onPress={didPressFAB} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
