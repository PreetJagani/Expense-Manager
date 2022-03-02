import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, StyleSheet, View} from 'react-native';

import {Chip, FAB} from 'react-native-paper';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParams} from './MainScreen';
import {useDispatch, useSelector} from 'react-redux';
import ExpenseCard from '../components/ExpenseCard';
import {rootReducerType} from '../reducers/Store';
import {getExpenseForTag} from '../reducers/actions/ExpenseActions';
import Expense from '../models/Expense';
import {
  EXPENSE_MONTH,
  EXPENSE_TAG_TYPE,
  EXPENSE_TODAY,
  EXPENSE_WEEK,
  EXPENSE_YEAR, storeDummyExpense
} from "../managers/RealmManager";

type props = NativeStackScreenProps<HomeStackParams, 'HomeTab'>;

const HomeScreen: React.FC<props> = props => {
  const expenses = useSelector(
    (state: rootReducerType) => state.expense.expenses,
  );

  // storeDummyExpense();

  const navigation = props.navigation;

  const dispatch = useDispatch();

  const [timeTag, setTimeTag] = useState<EXPENSE_TAG_TYPE>(EXPENSE_TODAY);

  const renderItem = useCallback(
    (item: ListRenderItemInfo<Expense>) => {
      return (
        <ExpenseCard
          expense={item.item}
          index={item.index}
          onPress={() => {
            didPressExpenseItem(item.item);
          }}
        />
      );
    },
    [timeTag],
  );

  const didPressExpenseItem = (expense: Expense) => {
    navigation.navigate('Detail_Screen', {
      expense: expense,
    });
  };

  const didPressFAB = () => {
    navigation.navigate('Add_Expense');
  };

  useEffect(() => {
    dispatch(getExpenseForTag(timeTag));
  }, [timeTag]);

  return (
    <View style={{flex: 1}}>
      <View style={styles.chipsBox}>
        <Chip
          mode="flat"
          selected={timeTag == EXPENSE_TODAY}
          onPress={() => setTimeTag(EXPENSE_TODAY)}>
          Today
        </Chip>
        <Chip
          mode="flat"
          selected={timeTag == EXPENSE_WEEK}
          onPress={() => setTimeTag(EXPENSE_WEEK)}>
          Week
        </Chip>
        <Chip
          mode="flat"
          selected={timeTag == EXPENSE_MONTH}
          onPress={() => setTimeTag(EXPENSE_MONTH)}>
          Month
        </Chip>
        <Chip
          mode="flat"
          selected={timeTag == EXPENSE_YEAR}
          onPress={() => setTimeTag(EXPENSE_YEAR)}>
          Year
        </Chip>
      </View>
      <FlatList
        data={expenses}
        renderItem={renderItem}
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
  chipsBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
});
