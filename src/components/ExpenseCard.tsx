import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import Expense from '../models/Expense';
import SvgComponent, {
  recurring_bill,
  restaurant,
  shopping_bag,
  svgNames,
} from '../assets/svgs/SvgComponent';
import {format} from 'date-fns';
import Animated, { FadeOut, Layout, SlideInDown, SlideInUp } from "react-native-reanimated";

interface props {
  expense: Expense;
  index: number;
  onPress: () => void;
}

const ExpenseCard: React.FC<props> = (props: props) => {
  const expense = props.expense;

  return (
    <Animated.View
      entering={SlideInDown.delay(props.index * 100)}
      layout={Layout.springify()}
      exiting={FadeOut.delay(props.index * 1000)}>
      <Card style={styles.root} onPress={props.onPress}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Avatar name={getRandomImage()} />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: 8,
            }}>
            <Text style={styles.title}> {expense.name} </Text>
            <Text style={styles.description}> {expense.des} </Text>
          </View>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <Text style={styles.amount}> {`-${expense.amount} Rs.`} </Text>
            <Text style={styles.date}> {format(expense.date, 'hh:mm a')} </Text>
          </View>
        </View>
      </Card>
    </Animated.View>
  );
};

const getRandomImage = () => {
  const ran = Math.random() * 3;
  if (ran < 1) {
    return restaurant;
  } else if (ran < 2) {
    return recurring_bill;
  } else {
    return shopping_bag;
  }
};

type avatarProp = {
  name: svgNames;
};

const Avatar: React.FC<avatarProp> = props => {
  return (
    <View
      style={{
        ...styles.avatarBox,
        backgroundColor: getBackgroundColor(props.name),
      }}>
      <SvgComponent name={props.name} width={56} height={56} />
    </View>
  );
};

const getBackgroundColor = (name: svgNames) => {
  switch (name) {
    case shopping_bag: {
      return '#FCEED4';
    }
    case restaurant: {
      return '#FDD5D7';
    }
    case recurring_bill: {
      return '#EEE5FF';
    }
  }
};

export default ExpenseCard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    borderRadius: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.8,
    marginTop: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.8,
    marginTop: 4,
  },
  avatarBox: {
    padding: 8,
    borderRadius: 16,
  },
});
