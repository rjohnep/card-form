import React, { FC, FocusEvent } from 'react';

import { useCardFormContext } from '@app/containers/CardForm';

import { Wrapper, Field, Row } from './styled';
import { FormFieldIds } from './types';

export const Form: FC = () => {
  const { dispatch } = useCardFormContext();

  const onFormInputFocus = (e: FocusEvent<HTMLInputElement>): void => {
    if (e.target && dispatch) {
      dispatch({
        type: 'update_current_focus',
        payload: e.target.dataset.ref
      });
    }
  };

  const a = 'asd';

  return (
    <Wrapper>
      <Field>
        <label htmlFor="cardNumber">
          Card Number
          <input
            type="number"
            id="cardNumber"
            data-ref="cardNumber"
            autoComplete="off"
            onFocus={(e): void => onFormInputFocus(e)}
          />
        </label>
      </Field>

      <Field>
        <label htmlFor={FormFieldIds.cardHolder}>
          Card Holder
          <input
            type="text"
            id={FormFieldIds.cardHolder}
            data-ref={FormFieldIds.cardHolder}
            autoComplete="off"
            onFocus={(e): void => onFormInputFocus(e)}
          />
        </label>
      </Field>

      <Row>
        <Field group>
          <label htmlFor="cardExpirationM">
            Expiration Date
            <select
              id="cardExpirationM"
              data-ref="cardDate"
              defaultValue="Month"
            >
              <option disabled>Month</option>
              <option>1</option>
              <option>2</option>
            </select>
            <select
              id="cardExpirationY"
              data-ref="cardDate"
              defaultValue="Year"
            >
              <option disabled>Year</option>
              <option>2019</option>
              <option>2020</option>
            </select>
          </label>
        </Field>

        <Field short>
          <label htmlFor="cardCvv">
            CVV
            <input
              type="text"
              id="cardCvv"
              maxLength={4}
              autoComplete="off"
              onFocus={(e): void => onFormInputFocus(e)}
            />
          </label>
        </Field>
      </Row>
    </Wrapper>
  );
};
