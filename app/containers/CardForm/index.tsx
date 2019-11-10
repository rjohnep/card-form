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
  cvv: undefined,
  dateM: undefined,
  dateY: undefined
};

export const CardForm = (): ReactElement => {
  const [cardState, updateCardState] = useState(initialState);

  const onFocusUpdate = (field: FormFieldIds): void => updateCardState(
    (prevState) => ({
      ...prevState,
      currentFocus: field
    })
  );

  const onFocusReset = (): void => updateCardState(
    (prevState) => ({
      ...prevState,
      currentFocus: initialState.currentFocus
    })
  );

  const onNumberChange = (cardNumber: string): void => updateCardState(
    (prevState) => ({
      ...prevState,
      cardNumber,
      cardType: detectCardType(cardNumber)
    })
  );

  const onHolderChange = (cardHolder: string): void => updateCardState(
    (prevState) => ({
      ...prevState,
      cardHolder
    })
  );

  const onMonthChange = (month: number): void => updateCardState(
    (prevState) => ({
      ...prevState,
      dateM: month
    })
  );

  const onYaerChange = (year: number): void => updateCardState(
    (prevState) => ({
      ...prevState,
      dateY: year
    })
  );

  const onCvvChange = (cvv: number): void => updateCardState(
    (prevState) => ({
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
