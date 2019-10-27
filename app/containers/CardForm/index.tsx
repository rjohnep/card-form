import React, { ReactElement, useState } from 'react';

import { Card } from './components/Card';
import { Form } from './components/Form';

import Wrapper from './styled/Wrapper';
import { FormFocusStateT } from './components/Form/types';

export const CardForm = (): ReactElement => {
  const [focusState, updateFocusState] = useState(undefined);

  const onFocus = (focusState: FormFocusStateT) => {
    debugger;
  };

  return (
    <Wrapper>
      <Card />
      <Form onFocus={onFocus} />
    </Wrapper>
  );
};
