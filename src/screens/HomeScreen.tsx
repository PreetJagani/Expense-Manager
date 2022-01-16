import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {FAB} from 'react-native-paper';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from './MainScreen';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ExpenseCard from '../components/ExpenseCard';
import {rootReducerType} from '../reducers/Store';
import {initializeExpense} from '../reducers/actions/ExpenseActions';

interface props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const HomeScreen: React.FC<props> = navigation => {
  const expenses = useSelector(
    (state: rootReducerType) => state.expense.expenses,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeExpense());
  }, [])


  return (
    <View style={{flex: 1}}>
      <FlatList
        data={expenses}
        renderItem={item => {
          return <ExpenseCard expense={item.item} />;
        }}
        keyExtractor={item => item.id}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigation.navigate('Add_Expense');
        }}
      />
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
