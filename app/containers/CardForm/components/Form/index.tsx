import React, { FC, FocusEvent, useState, useEffect, ChangeEvent } from 'react';
import InputMask from 'react-input-mask';

import { useCardFormContext } from '@app/containers/CardForm';

import { Wrapper, Field, Row } from './styled';
import { FormFieldIds } from './types';

export const Form: FC = () => {
  const [isFocused, setFocus] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
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
      dispatch({
        type: 'reset_current_focus'
      });
    }
  };

  // trigger reset current focus if focus is out
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

  const onNumberChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target && dispatch) {
      setCardNumber(e.target.value);
      dispatch({
        type: 'update_card_number',
        payload: e.target.value
      });
    }
  };

  const onHolderChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target && dispatch) {
      setCardHolder(e.target.value);
      dispatch({
        type: 'update_card_holder',
        payload: e.target.value
      });
    }
  };

  return (
    <Wrapper>
      <Field>
        <label htmlFor={FormFieldIds.cardNumber}>Card Number</label>
        <InputMask
          mask="9999 9999 9999 9999"
          maskChar=" "
          id={FormFieldIds.cardNumber}
          data-ref={FormFieldIds.cardNumber}
          autoComplete="off"
          onFocus={(e): void => onFormInputFocus(e)}
          onBlur={onBlur}
          onChange={onNumberChange}
          value={cardNumber}
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
          onChange={onHolderChange}
          value={cardHolder}
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
