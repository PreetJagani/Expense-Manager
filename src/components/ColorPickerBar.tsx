import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  Color_Blue_Dark,
  Color_Green_Dark,
  Color_Red_Dark,
  Color_Violet_Dark,
  Color_Yellow_Dark,
} from '../utils/ColourUtils';

type props = {
  color?: string;
  onColorChange: (color: string) => void;
};

const colors = [
  Color_Violet_Dark,
  Color_Green_Dark,
  Color_Red_Dark,
  Color_Yellow_Dark,
  Color_Blue_Dark,
];

const ColorPickerBar: React.FC<props> = props => {
  const [activeColor, setActiveColor] = useState(
    props.color ? props.color : Color_Violet_Dark,
  );

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      {colors.map(color => {
        return (
          <ColorView
            key={color}
            color={color}
            selected={activeColor == color}
            onPress={() => {
              setActiveColor(color);
              props.onColorChange(color);
            }}
          />
        );
      })}
    </View>
  );
};

type colorViewProp = {
  color: string;
  selected: boolean;
  onPress: () => void;
};

const ColorView: React.FC<colorViewProp> = props => {
  const size = 28;
  return (
    <View style={{height: size, width: size}}>
      <View
        style={{
          flex: 1,
          backgroundColor: props.selected ? props.color : 'white',
          borderRadius: size / 2,
          padding: 2,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: size / 2 - 1,
            padding: 2,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: props.color,
              borderRadius: size / 2 - 2,
            }}
            onPress={props.onPress}
          />
        </View>
      </View>
    </View>
  );
};

export default ColorPickerBar;
