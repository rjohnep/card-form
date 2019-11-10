import React, { FC, FocusEvent, useState, useEffect, ChangeEvent } from 'react';
import InputMask from 'react-input-mask';

import { getCardNumberMask } from '@app/utils/ccUtils';

import { Wrapper, Field, Row } from './styled';
import { FormFieldIds, FormPropsT } from './types';

const currentYear = Number(new Date().getFullYear());
const yearsArray = Array.from(Array(15).keys()).map((n) => currentYear + n);
const monthsArray = Array.from(Array(12).keys()).map((n) => n + 1);

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
      case FormFieldIds.cardExpiration:
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
  ): void => props.onNumberChange(e.target.value.trim());

  const onHolderChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => props.onHolderChange(e.target.value);

  const onExpirationMonthChange = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => props.onMonthChange(Number(e.target.value));

  const onExpirationYearChange = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => props.onYaerChange(Number(e.target.value));

  const onCvvChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => props.onCvvChange(
    !e.target.value ? undefined : Number(e.target.value)
  );

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
            onChange={onExpirationMonthChange}
          >
            <option disabled>Month</option>
            {monthsArray.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
          <select
            id={FormFieldIds.cardExpirationY}
            data-ref={FormFieldIds.cardExpiration}
            defaultValue="Year"
            onFocus={(e): void => onFormInputFocus(e)}
            onBlur={onBlur}
            onChange={onExpirationYearChange}
          >
            <option disabled>Year</option>
            {yearsArray.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </Field>

        <Field short>
          <label htmlFor={FormFieldIds.cardCvv}>CVV</label>
          <input
            type="text"
            id={FormFieldIds.cardCvv}
            data-ref={FormFieldIds.cardCvv}
            pattern="\d*"
            maxLength={4}
            autoComplete="off"
            onFocus={(e): void => onFormInputFocus(e)}
            onBlur={onBlur}
            onChange={onCvvChange}
          />
        </Field>
      </Row>
    </Wrapper>
  );
};
