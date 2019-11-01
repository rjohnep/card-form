import { Dispatch } from 'react';

type ActionsT =
  | 'update_current_focus'
  | 'reset_current_focus'
  | 'update_card_number'
  | 'update_card_holder';

export type CardFormStateT = {
  currentFocus: string | undefined;
  cardNumber: string | undefined;
  cardHolder: string | undefined;
};

export type CardFormActionT = {
  type: ActionsT;
  payload?: string;
};

export type CardFormContextT = {
  state: CardFormStateT | undefined;
  dispatch: Dispatch<CardFormActionT> | undefined;
};
