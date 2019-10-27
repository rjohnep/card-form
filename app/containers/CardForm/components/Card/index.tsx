import React, { FC, useState } from 'react';

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

export const Card: FC<CardPropsT> = (props: CardPropsT) => {
  const [isFront, toggleSide] = useState(true);
  const { state: cardFormState } = useCardFormContext();

  return (
    <Wrapper>
      <FrontSide isFront={isFront}>
        {cardFormState &&
          cardFormState.currentFocus &&
          cardFormState.currentFocus.width}
        <Logo />
        <Number htmlFor="cardNumber">{props.number}</Number>
        <Holder>
          <span>Card Holder</span>
          <label htmlFor="cardHolder">{props.holder}</label>
        </Holder>
        <Expires>
          <span>Expires</span>
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
