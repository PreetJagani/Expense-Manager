import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import ColorPickerBar from './ColorPickerBar';
import {
  Color_Violet_Dark,
  ultraLightColorForDarkColor,
} from '../utils/ColourUtils';
import SvgComponent, {category} from '../assets/svgs/SvgComponent';

type props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddCategoryDialog: React.FC<props> = props => {
  const [activeColor, setActiveColor] = useState(Color_Violet_Dark);

  return (
    <View>
      <Modal
        visible={props.visible}
        onDismiss={() => props.setVisible(false)}
        transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
          }}>
          <Card style={{margin: 16, padding: 16}}>
            <View style={{flexDirection: 'row', marginBottom: 16, alignItems:'flex-end'}}>
              <View
                style={{
                  ...styles.avatarBox,
                  backgroundColor: ultraLightColorForDarkColor(activeColor),
                  width: 56,
                  height: 56,
                }}>
                <SvgComponent
                  name={category}
                  width={32}
                  height={32}
                  tintColor={activeColor}
                />
              </View>
              <TextInput style={{flex: 1, marginStart: 8,}} mode="outlined" label={"Name"}/>
            </View>
            <ColorPickerBar
              onColorChange={color => {
                setActiveColor(color);
              }}
            />
            <Button
              style={{marginTop: 16}}
              onPress={() => props.setVisible(false)}>
              Save
            </Button>
          </Card>
        </View>
      </Modal>
    </View>
  );
};

export default AddCategoryDialog;

const styles = StyleSheet.create({
  avatarBox: {
    padding: 12,
    borderRadius: 16,
  },
});
