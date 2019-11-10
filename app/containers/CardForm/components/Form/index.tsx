import React, { FC, FocusEvent, useState, useEffect, ChangeEvent } from 'react';
import InputMask from 'react-input-mask';

import { getCardNumberMask } from '@app/utils/ccUtils';

import { Wrapper, Field, Row } from './styled';
import { FormFieldIds, FormPropsT } from './types';

export const Form: FC<FormPropsT> = (props: FormPropsT) => {
  const [isFocused, setFocus] = useState(false);

  const onFormInputFocus = (
    e: FocusEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFocus(true);

    switch (e.target.dataset.ref) {
      case FormFieldIds.cardNumber:
        return props.onFocusUpdate(FormFieldIds.cardNumber);
      case FormFieldIds.cardHolder:
        return props.onFocusUpdate(FormFieldIds.cardHolder);
      case FormFieldIds.cardExpirationM:
      case FormFieldIds.cardExpirationY:
        return props.onFocusUpdate(FormFieldIds.cardExpiration);
      case FormFieldIds.cardCvv:
        return props.onFocusUpdate(FormFieldIds.cardCvv);
      default:
        return undefined;
    }
  };

  const onFormInputBlur = (): void => {
    props.onFocusReset();
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

  const onNumberChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => props.onCCNumberChange(e.target.value.trim());

  const onHolderChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => props.onCCHolderChange(e.target.value);

  return (
    <Wrapper>
      <Field>
        <label htmlFor={FormFieldIds.cardNumber}>Card Number</label>
        <InputMask
          mask={getCardNumberMask(props.state.cardType)}
          maskChar=" "
          id={FormFieldIds.cardNumber}
          data-ref={FormFieldIds.cardNumber}
          autoComplete="off"
          onFocus={(e): void => onFormInputFocus(e)}
          onBlur={onBlur}
          onChange={onNumberChange}
          value={props.state.cardNumber}
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
          value={props.state.cardHolder}
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
