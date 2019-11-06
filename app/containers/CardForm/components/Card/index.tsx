import React, { FC, useState, useRef, useEffect } from 'react';

import VisaIcon from '@assets/icons/visa-pay-logo.svg';
// import VisaIcon from '@assets/icons/master-card-logo.svg';

import { useCardFormContext } from '@app/containers/CardForm';
import { FormFieldIds } from '../Form/types';

import * as SC from './styled';
import { CardPropsT, CardFocusMetaT } from './types';

export const Card: FC<CardPropsT> = (props: CardPropsT) => {
  const [isFront, toggleSide] = useState(true);
  const [focusMeta, updateFocusMeta] = useState<CardFocusMetaT | undefined>(
    undefined
  );
  // TODO: set default context state
  const { state: cardFormState } = useCardFormContext();

  const refs = {
    [FormFieldIds.cardNumber]: useRef(null),
    [FormFieldIds.cardHolder]: useRef(null),
    [FormFieldIds.cardExpiration]: useRef(null)
  };

  useEffect(() => {
    if (cardFormState && cardFormState.currentFocus) {
      if (
        (cardFormState.currentFocus === FormFieldIds.cardCvv && isFront)
        || (cardFormState.currentFocus !== FormFieldIds.cardCvv && !isFront)
      ) {
        toggleSide(!isFront);
      }

      const targetRef = refs[cardFormState.currentFocus];

      if (targetRef) {
        updateFocusMeta({
          width: `${targetRef.current.offsetWidth}px`,
          height: `${targetRef.current.offsetHeight}px`,
          top: `${targetRef.current.offsetTop}px`,
          left: `${targetRef.current.offsetLeft}px`
        });
      }
    } else {
      // TODO: debounce focus reseting
      updateFocusMeta(undefined);
    }
  }, [cardFormState]);

  const getCardNumber = (str = ''): string => {
    const number = str.split('');

    return Array(16)
      .fill('#')
      .map((hash, i) => {
        if (number[i]) {
          if (i > 3 && i < 12) {
            return '*';
          }
          return number[i];
        }

        return hash;
      })
      .join('');
  };

  return (
    <SC.Wrapper>
      <SC.FrontSide isFront={isFront}>
        <SC.Hightlighter meta={focusMeta} />

        <SC.Logo icon={VisaIcon} />
        <SC.Number
          ref={refs[FormFieldIds.cardNumber]}
          htmlFor={FormFieldIds.cardNumber}
        >
          {getCardNumber(cardFormState && cardFormState.cardNumber)}
        </SC.Number>
        <SC.Holder ref={refs[FormFieldIds.cardHolder]}>
          <label htmlFor={FormFieldIds.cardHolder}>Card Holder</label>
          <label htmlFor={FormFieldIds.cardHolder}>{cardFormState && cardFormState.cardHolder}</label>
        </SC.Holder>
        <SC.Expires ref={refs[FormFieldIds.cardExpiration]}>
          <label htmlFor={FormFieldIds.cardExpirationM}>Expires</label>
          <label htmlFor={FormFieldIds.cardExpirationM}>
            {`${props.dateM || 'MM'}/${props.dateY || 'YY'}`}
          </label>
        </SC.Expires>
      </SC.FrontSide>
      <SC.BackSide isFront={isFront}>
        <SC.Logo icon={VisaIcon} back />
        <div className="black-line" />
        <SC.CVV htmlFor={FormFieldIds.cardCvv}>{props.cvv}</SC.CVV>
      </SC.BackSide>
    </SC.Wrapper>
  );
};
