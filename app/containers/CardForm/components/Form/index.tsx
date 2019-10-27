import React, { FC } from 'react';

import { Wrapper, Field, Row } from './styled';

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

    <Field>
      <label htmlFor="cardNumber">Card Holder</label>
      <input
        type="text"
        id="cardHolder"
        data-ref="cardName"
        autoComplete="off"
      />
    </Field>

    <Row>
      <Field group>
        <label htmlFor="cardNumber">Expiration Date</label>
        <select id="cardMonth" data-ref="cardDate" defaultValue="Month">
          <option disabled>Month</option>
          <option>1</option>
          <option>2</option>
        </select>

        <select id="cardYear" data-ref="cardDate" defaultValue="Year">
          <option disabled>Year</option>
          <option>2019</option>
          <option>2020</option>
        </select>
      </Field>

      <Field short>
        <label>CVV</label>
        <input type="text" id="cardCvv" maxLength={4} autoComplete="off" />
      </Field>
    </Row>
  </Wrapper>
);
