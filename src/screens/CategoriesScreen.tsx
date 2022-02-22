import React, { useState } from "react";
import {StyleSheet, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackParams} from './MainScreen';
import {FAB} from 'react-native-paper';
import AddCategoryDialog from "../components/AddCategoryDialog";

type props = NativeStackScreenProps<HomeStackParams, 'Categories_Screen'>;

const CategoriesScreen: React.FC<props> = props => {
  const navigation = props.navigation;

  const [showDialog, setShowDialog] = useState(false);

  const didPressFAB = () => {
    setShowDialog(true);
  };

  return (
    <View style={{flex: 1}}>
      <AddCategoryDialog visible={showDialog} setVisible={setShowDialog}/>
      <FAB style={styles.fab} icon='' onPress={didPressFAB} label="Add Category" />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 24,
  },
});
