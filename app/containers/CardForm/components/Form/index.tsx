import React, { FC, FocusEvent, useState, useEffect } from 'react';

import { useCardFormContext } from '@app/containers/CardForm';

import { Wrapper, Field, Row } from './styled';
import { FormFieldIds } from './types';

export const Form: FC = () => {
  const [isFocused, setFocus] = useState(false);
  const { dispatch } = useCardFormContext();

  const onFormInputFocus = (
    e: FocusEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    if (e.target && dispatch) {
      setFocus(true);
      dispatch({
        type: 'update_current_focus',
        payload: e.target.dataset.ref
      });
    }
  };

  const onFormInputBlur = (): void => {
    if (dispatch) {
      dispatch({ type: 'reset_current_focus' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isFocused) {
        onFormInputBlur();
      }
    }, 300);

    return (): void => {
      clearInterval(timer);
    };
  }, [isFocused]);

  const onBlur = (): void => {
    setFocus(false);
  };

  return (
    <Wrapper>
      <Field>
        <label htmlFor={FormFieldIds.cardNumber}>Card Number</label>
        <input
          type="number"
          id={FormFieldIds.cardNumber}
          data-ref={FormFieldIds.cardNumber}
          autoComplete="off"
          onFocus={(e): void => onFormInputFocus(e)}
          onBlur={onBlur}
        />
      </Field>

      <Field>
        <label htmlFor={FormFieldIds.cardHolder}>Card Holder</label>
        <input
          type="text"
          id={FormFieldIds.cardHolder}
          data-ref={FormFieldIds.cardHolder}
          autoComplete="off"
          onFocus={(e): void => onFormInputFocus(e)}
          onBlur={onBlur}
        />
      </Field>

      <Row>
        <Field group>
          <label htmlFor={FormFieldIds.cardExpirationM}>Expiration Date</label>
          <select
            id={FormFieldIds.cardExpirationM}
            data-ref={FormFieldIds.cardExpiration}
            defaultValue="Month"
            onFocus={(e): void => onFormInputFocus(e)}
            onBlur={onBlur}
          >
            <option disabled>Month</option>
            <option>1</option>
            <option>2</option>
          </select>
          <select
            id={FormFieldIds.cardExpirationY}
            data-ref={FormFieldIds.cardExpiration}
            defaultValue="Year"
            onFocus={(e): void => onFormInputFocus(e)}
            onBlur={onBlur}
          >
            <option disabled>Year</option>
            <option>2019</option>
            <option>2020</option>
          </select>
        </Field>

        <Field short>
          <label htmlFor={FormFieldIds.cardCvv}>CVV</label>
          <input
            type="text"
            id={FormFieldIds.cardCvv}
            data-ref={FormFieldIds.cardCvv}
            maxLength={4}
            autoComplete="off"
            onFocus={(e): void => onFormInputFocus(e)}
            onBlur={onBlur}
          />
        </Field>
      </Row>
    </Wrapper>
  );
};
