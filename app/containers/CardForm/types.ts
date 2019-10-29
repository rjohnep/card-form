import { Dispatch } from 'react';

export type CardFormStateT = {
  currentFocus: string | undefined;
};

export type CardFormActionT = {
  type: 'update_current_focus' | 'reset_current_focus';
  payload?: string;
};

export type CardFormContextT = {
  state: CardFormStateT | undefined;
  dispatch: Dispatch<CardFormActionT> | undefined;
};
