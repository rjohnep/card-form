import React, {
  ReactElement,
  Reducer,
  useReducer,
  createContext,
  useContext
} from 'react';

import { Card } from './components/Card';
import { Form } from './components/Form';

import Wrapper from './styled/Wrapper';
import { CardFormStateT, CardFormActionT, CardFormContextT } from './types';

const initialState: CardFormStateT = { currentFocus: undefined };

const cardFormReducer: Reducer<CardFormStateT, CardFormActionT> = (
  state,
  action
) => {
  switch (action.type) {
    case 'update_current_focus':
      return {
        ...state,
        currentFocus: action.payload
      };
    case 'reset_current_focus':
      return {
        ...state,
        currentFocus: undefined
      };
    default:
      return state;
  }
};

const CardFormContext = createContext<CardFormContextT>({
  state: undefined,
  dispatch: undefined
});

export const useCardFormContext = (): CardFormContextT =>
  useContext(CardFormContext);

export const CardForm = (): ReactElement => {
  const [state, dispatch] = useReducer(cardFormReducer, initialState);

  return (
    <CardFormContext.Provider value={{ state, dispatch }}>
      <Wrapper>
        <Card />
        <Form />
      </Wrapper>
    </CardFormContext.Provider>
  );
};
