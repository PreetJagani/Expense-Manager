import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalStyle} from '../GlobalStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Card} from 'react-native-paper';
import {HomeStackParams} from './MainScreen';
import {deleteExpense} from '../reducers/actions/ExpenseActions';
import {useDispatch} from 'react-redux';

type props = NativeStackScreenProps<HomeStackParams, 'Detail_Screen'>;

const DetailsScreen: React.FC<props> = props => {
  const navigation = props.navigation;
  const route = props.route;
  const exp = route.params.expense;
  const dispatch = useDispatch();

  const didPressEditButton = () => {
    navigation.navigate('Add_Expense', {expense: exp});
  };

  return (
    <>
      <View style={{backgroundColor: '#FD3C4A', marginBottom: 48}}>
        <View style={GlobalStyle.topBar}>
          <View style={GlobalStyle.titleBox}>
            <Text style={GlobalStyle.title}>Detail Transaction</Text>
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
          <View style={{flex: 1}} />
          <TouchableOpacity
            onPress={() => {
              dispatch(deleteExpense(exp));
              navigation.goBack();
            }}>
            <MaterialCommunityIcons name="delete" size={28} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 48}}>
          <Text style={styles.amount}>$100</Text>
          <Text style={styles.name}>Buy some grocery</Text>
          <Text style={styles.date}>Saturday 4 June 2021 16:20</Text>
          <Card style={styles.card}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <DetailsCardItem name={'Type'} value={'Expense'} />
              <DetailsCardItem name={'Category'} value={'Shopping'} />
              <DetailsCardItem name={'Wallet'} value={'Wallet'} />
            </View>
          </Card>
        </View>
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.subtitle}>Description</Text>
        <Text style={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Text>
        <Text style={styles.subtitle}>Attachment</Text>
        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-vector/cash-register-receipt-on-grey-260nw-1248632137.jpg',
          }}
          style={{height: 200, borderRadius: 20, marginTop: 8}}
        />
        <View style={{flex: 1}} />
        <Button mode="contained" onPress={didPressEditButton}>
          Edit
        </Button>
      </View>
    </>
  );
};

type cardItemProps = {
  name: String;
  value: String;
};

export const DetailsCardItem: React.FC<cardItemProps> = props => {
  return (
    <View>
      <Text style={styles.cardItemName}>{props.name}</Text>
      <Text style={styles.cardItemValue}>{props.value}</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  descriptionBox: {
    borderStyle: 'dashed',
    borderTopWidth: 1,
    flex: 2,
    padding: 8,
    marginTop: 16,
    marginLeft: 12,
    marginRight: 12,
  },
  amount: {
    fontSize: 48,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    marginTop: 4,
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'normal',
    color: 'white',
  },
  date: {
    marginTop: 4,
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'normal',
    color: 'white',
    opacity: 0.8,
  },
  card: {
    margin: 16,
    padding: 16,
    position: 'absolute',
    bottom: -110,
    left: 0,
    right: 0,
    borderRadius: 15,
  },
  cardItemName: {
    textAlign: 'center',
    opacity: 0.8,
    fontSize: 14,
  },
  cardItemValue: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 4,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    opacity: 0.8,
    fontWeight: '600',
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});
