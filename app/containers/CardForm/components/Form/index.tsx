import React, { FC, useState, useEffect, FocusEvent } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Field, Row } from './styled';
import { FormPropsT, FormFocusStateT } from './types';

export const Form: FC<FormPropsT> = (props) => {
  const [focusState, updateFocusState] = useState<FormFocusStateT | undefined>(
    undefined
  );

  useEffect(() => {
    if (focusState) {
      props.onFocus(focusState);
    }
  });

  const onFormInputFocus = (e: FocusEvent<HTMLInputElement>): void => {
    if (e.target) {
      updateFocusState({
        width: `${e.target.offsetWidth}px`,
        height: `${e.target.offsetHeight}px`,
        top: `${e.target.offsetTop}px`,
        left: `${e.target.offsetLeft}px`
      });
    }
  };

  return (
    <Wrapper>
      <Field>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="number"
          id="cardNumber"
          data-ref="cardNumber"
          autoComplete="off"
          onFocus={(e): void => onFormInputFocus(e)}
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
          <label htmlFor="cardExpirationM">Expiration Date</label>
          <select id="cardExpirationM" data-ref="cardDate" defaultValue="Month">
            <option disabled>Month</option>
            <option>1</option>
            <option>2</option>
          </select>

          <select id="cardExpirationY" data-ref="cardDate" defaultValue="Year">
            <option disabled>Year</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </Field>

        <Field short>
          <label htmlFor="cardCvv">CVV</label>
          <input type="text" id="cardCvv" maxLength={4} autoComplete="off" />
        </Field>
      </Row>
    </Wrapper>
  );
};

Form.propTypes = {
  onFocus: PropTypes.func.isRequired
};
