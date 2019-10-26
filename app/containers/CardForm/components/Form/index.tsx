import React, { FC } from 'react';

import { Wrapper, Field } from './styled';

export const Form: FC = () => (
  <Wrapper>
    <Field>
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="number"
        id="cardNumber"
        data-ref="cardNumber"
        autoComplete="off"
      />
    </Field>
  </Wrapper>
);
