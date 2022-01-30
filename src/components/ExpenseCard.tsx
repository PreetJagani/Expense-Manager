import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import Expense from '../models/Expense';
import SvgComponent from '../assets/svgs/SvgComponent';

interface props {
  expense: Expense;
  onPress : () => void;
}

const ExpenseCard: React.FC<props> = (props: props) => {
  return (
    <Card style={styles.root} onPress={props.onPress}>
      <SvgComponent name='recurring_bill' width={56} height={56}/>
      <Text> Name : {props.expense.name} </Text>
      <Text> Description : {props.expense.des} </Text>
      <Text> Amount : {props.expense.amount} </Text>
    </Card>
  );
};

export default ExpenseCard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 8,
    padding: 8,
  },
});
