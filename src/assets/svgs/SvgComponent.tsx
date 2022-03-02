import * as React from 'react';
import RecurringBill from './RecurringBill';
import Restaurant from './Restaurant';
import ShoppingBag from './ShoppingBag';
import Category from './CategorySvg';

export const recurring_bill = 'recurring_bill';
export const shopping_bag = 'shopping_bag';
export const restaurant = 'restaurant';
export const category = 'category';

export type svgNames =
  | typeof recurring_bill
  | typeof shopping_bag
  | typeof restaurant
  | typeof category;

type prop = {
  name: svgNames;
  width: number;
  height: number;
  tintColor?: string;
};

export type svgProps = {
  width: number;
  height: number;
  tintColor?: string;
};

const SvgComponent: React.FC<prop> = props => {
  switch (props.name) {
    case recurring_bill: {
      return <RecurringBill width={props.width} height={props.height} />;
    }
    case shopping_bag: {
      return <ShoppingBag width={props.width} height={props.height} />;
    }
    case restaurant: {
      return <Restaurant width={props.width} height={props.height} />;
    }
    case category: {
      return <Category width={props.width} height={props.height} tintColor={props.tintColor}/>;
    }
  }
};

export default SvgComponent;
