import React, { ReactElement, useState } from 'react';

import { detectCardType } from '@app/utils/ccUtils';

import { Card } from './components/Card';
import { Form } from './components/Form';

import Wrapper from './styled/Wrapper';
import { CardFormStateT } from './types';

import { FormFieldIds } from './components/Form/types';

const initialState: CardFormStateT = {
  currentFocus: undefined,
  cardNumber: '',
  cardHolder: '',
  cardType: undefined,
  cvv: '',
  dateM: undefined,
  dateY: undefined
};

export const CardForm = (): ReactElement => {
  const [cardState, updateCardState] = useState(initialState);

  const onFocusUpdate = (field: FormFieldIds): void => updateCardState(
    (prevState): CardFormStateT => ({
      ...prevState,
      currentFocus: field
    })
  );

  const onFocusReset = (): void => updateCardState(
    (prevState): CardFormStateT => ({
      ...prevState,
      currentFocus: initialState.currentFocus
    })
  );

  const onNumberChange = (cardNumber: string): void => updateCardState(
    (prevState): CardFormStateT => ({
      ...prevState,
      cardNumber,
      cardType: detectCardType(cardNumber)
    })
  );

  const onHolderChange = (cardHolder: string): void => updateCardState(
    (prevState): CardFormStateT => ({
      ...prevState,
      cardHolder
    })
  );

  const onMonthChange = (month: number): void => updateCardState(
    (prevState): CardFormStateT => ({
      ...prevState,
      dateM: month
    })
  );

  const onYaerChange = (year: number): void => updateCardState(
    (prevState): CardFormStateT => ({
      ...prevState,
      dateY: year - 2000 // Christ correction
    })
  );

  const onCvvChange = (cvv: string): void => updateCardState(
    (prevState): CardFormStateT => ({
      ...prevState,
      cvv
    })
  );

  return (
    <Wrapper>
      <Card
        state={cardState}
      />

      <Form
        state={cardState}
        onFocusUpdate={onFocusUpdate}
        onFocusReset={onFocusReset}
        onNumberChange={onNumberChange}
        onHolderChange={onHolderChange}
        onMonthChange={onMonthChange}
        onYaerChange={onYaerChange}
        onCvvChange={onCvvChange}
      />
    </Wrapper>
  );
};
