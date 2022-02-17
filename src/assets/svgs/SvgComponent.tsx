import * as React from 'react';
import Recurring_Bill from './Recurring_Bill';
import Restaurant from './Restaurant';
import Shopping_Bag from './Shopping_Bag';

export const recurring_bill = 'recurring_bill';
export const shopping_bag = 'shopping_bag';
export const restaurant = 'restaurant';

export type svgNames =
  | typeof recurring_bill
  | typeof shopping_bag
  | typeof restaurant;

type prop = {
  name: svgNames;
  width: number;
  height: number;
};

export type svgProps = {
  width: number;
  height: number;
};

const SvgComponent: React.FC<prop> = props => {
  switch (props.name) {
    case recurring_bill: {
      return <Recurring_Bill width={props.width} height={props.height} />;
    }
    case shopping_bag: {
      return <Shopping_Bag width={props.width} height={props.height} />;
    }
    case restaurant: {
      return <Restaurant width={props.width} height={props.height} />;
    }
  }
};

export default SvgComponent;
