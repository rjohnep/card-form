import { FormFocusStateT } from './components/Form/types';
import { Dispatch } from 'react';

export type CardFormStateT = {
  currentFocus: undefined | FormFocusStateT;
};

export type CardFormActionT = {
  type: 'update_current_focus';
  payload?: FormFocusStateT;
};

export type CardFormContextT = {
  state: CardFormStateT | undefined;
  dispatch: Dispatch<CardFormActionT> | undefined;
};
