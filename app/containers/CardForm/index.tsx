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

  const onCCNumberChange = (cardNumber: string): void => updateCardState(
    (prevState) => ({
      ...prevState,
      cardNumber,
      cardType: detectCardType(cardNumber)
    })
  );

  const onCCHolderChange = (cardHolder: string): void => updateCardState(
    (prevState) => ({
      ...prevState,
      cardHolder
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
        onCCNumberChange={onCCNumberChange}
        onCCHolderChange={onCCHolderChange}
      />
    </Wrapper>
  );
};
