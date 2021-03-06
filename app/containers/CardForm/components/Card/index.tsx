import React, { FC, useState, useRef, useEffect } from 'react';

import { getCardNumber } from '@app/utils/ccUtils';

import { FormFieldIds } from '../Form/types';

import * as SC from './styled';
import { CardPropsT, CardFocusMetaT } from './types';

export const Card: FC<CardPropsT> = (props: CardPropsT) => {
  const [isFront, toggleSide] = useState(true);
  const [focusMeta, updateFocusMeta] = useState<CardFocusMetaT | undefined>(
    undefined
  );

  const refs = {
    [FormFieldIds.cardNumber]: useRef(null),
    [FormFieldIds.cardHolder]: useRef(null),
    [FormFieldIds.cardExpiration]: useRef(null)
  };

  const { currentFocus } = props.state;

  useEffect(() => {
    if (currentFocus) {
      if (
        (currentFocus === FormFieldIds.cardCvv && isFront)
        || (currentFocus !== FormFieldIds.cardCvv && !isFront)
      ) {
        toggleSide(!isFront);
      }

      const targetRef = refs[currentFocus];

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
  }, [currentFocus]);

  return (
    <SC.Wrapper>
      <SC.FrontSide isFront={isFront}>
        <SC.Hightlighter meta={focusMeta} />

        <SC.Logo cardType={props.state.cardType} />

        <SC.Number
          ref={refs[FormFieldIds.cardNumber]}
          htmlFor={FormFieldIds.cardNumber}
        >
          {
            getCardNumber(props.state.cardNumber, props.state.cardType).map(
              (numberCharacter, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <span key={`${numberCharacter}-${i}`}>{numberCharacter}</span>
              )
            )
          }
        </SC.Number>
        <SC.Holder ref={refs[FormFieldIds.cardHolder]}>
          <label htmlFor={FormFieldIds.cardHolder}>Card Holder</label>
          <label htmlFor={FormFieldIds.cardHolder}>
            {props.state.cardHolder || 'Full Name'}
          </label>
        </SC.Holder>
        <SC.Expires ref={refs[FormFieldIds.cardExpiration]}>
          <label htmlFor={FormFieldIds.cardExpirationM}>Expires</label>
          <label htmlFor={FormFieldIds.cardExpirationM}>
            {`${props.state.dateM || 'MM'}/${props.state.dateY || 'YY'}`}
          </label>
        </SC.Expires>
      </SC.FrontSide>
      <SC.BackSide isFront={isFront}>
        <SC.Logo cardType={props.state.cardType} back />

        <div className="black-line" />
        <SC.CVV htmlFor={FormFieldIds.cardCvv}>
          {props.state.cvv.split('').map(() => '*')}
        </SC.CVV>
      </SC.BackSide>
    </SC.Wrapper>
  );
};
