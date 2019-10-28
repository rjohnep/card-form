import React, { FC, useState, useRef, useEffect } from 'react';

import { useCardFormContext } from '@app/containers/CardForm';

import {
  Wrapper,
  Number,
  Holder,
  Expires,
  Logo,
  FrontSide,
  BackSide,
  CVV
} from './styled';
import { CardPropsT } from './types';
import { FormFieldIds } from '../Form/types';

export const Card: FC<CardPropsT> = (props: CardPropsT) => {
  const [isFront, toggleSide] = useState(true);
  const { state: cardFormState } = useCardFormContext();

  // useEffect(() => {
  //   return () => {
  //     cleanup;
  //   };
  // }, [state]);

  const refNumber = useRef(null);
  const refHolder = useRef(null);
  const refExpiration = useRef(null);

  return (
    <Wrapper>
      {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
      <FrontSide isFront={isFront}>
        {cardFormState &&
          cardFormState.currentFocus &&
          cardFormState.currentFocus.width}
        <Logo />
        <Number ref={refNumber} htmlFor="cardNumber">
          {props.number}
        </Number>
        <Holder ref={refHolder}>
          <label htmlFor={FormFieldIds.cardHolder}>Card Holder</label>
          <label htmlFor={FormFieldIds.cardHolder}>{props.holder}</label>
        </Holder>
        <Expires ref={refExpiration}>
          <label htmlFor="cardExpirationM">Expires</label>
          <label htmlFor="cardExpirationM">
            {props.dateM || 'MM'}/{props.dateY || 'YY'}
          </label>
        </Expires>
      </FrontSide>
      <BackSide isFront={isFront}>
        <Logo back />
        <div className="black-line"></div>
        <CVV htmlFor="cardCvv">{props.cvv}</CVV>
      </BackSide>
    </Wrapper>
  );
};

Card.defaultProps = {
  number: '**** **** **** ****',
  // number: '8888 8888 8888 8888',
  holder: 'Full Name'
};
