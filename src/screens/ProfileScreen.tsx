import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import SvgComponent, {category} from '../assets/svgs/SvgComponent';
import {Color_Blue_Ultra_Light} from '../utils/ColourUtils';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomeStackParams } from "./MainScreen";
import DetailsScreen from "./DetailsScreen";

type props = NativeStackScreenProps<HomeStackParams, 'HomeTab'>;

const ProfileScreen : React.FC<props> = (props) => {

  const navigation = props.navigation;

  return (
    <View>
      <Card style={styles.card} onPress={()=>{navigation.navigate('Categories_Screen')}}>
        <View style={{flexDirection: 'row'}} >
          <View
            style={{
              ...styles.avatarBox,
              backgroundColor: Color_Blue_Ultra_Light,
            }}>
            <SvgComponent name={category} width={32} height={32} />
          </View>
          <Text
            style={{
              alignSelf: 'center',
              marginStart: 16,
              fontWeight: 'bold',
              fontSize: 22,
            }}>
            Categories
          </Text>
        </View>
      </Card>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 16,
    borderRadius: 16,
  },
  avatarBox: {
    padding: 12,
    borderRadius: 16,
  },
});
