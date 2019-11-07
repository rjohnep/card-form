import React, { ReactElement, useState } from 'react';

import { Card } from './components/Card';
import { Form } from './components/Form';

import Wrapper from './styled/Wrapper';
import { CardFormStateT } from './types';

import { FormFieldIds } from './components/Form/types';

const initialState: CardFormStateT = {
  currentFocus: undefined,
  cardNumber: undefined,
  cardHolder: 'Full Name',
  cardType: undefined,
  cvv: undefined,
  dateM: undefined,
  dateY: undefined
};

export const CardForm = (): ReactElement => {
  const [cardState, updateCardState] = useState(initialState);

  const onFocusUpdate = (field: FormFieldIds) => updateCardState(
    (prevState) => ({
      ...prevState,
      currentFocus: field
    })
  );

  const onFocusReset = () => updateCardState(
    (prevState) => ({
      ...prevState,
      currentFocus: initialState.currentFocus
    })
  );

  const onCCNumberChange = (cardNumber: string) => updateCardState(
    (prevState) => ({
      ...prevState,
      cardNumber
    })
  );

  const onCCHolderChange = (cardHolder: string) => updateCardState(
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
