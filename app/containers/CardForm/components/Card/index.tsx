import React, { FC } from 'react';

import { Wrapper, Number, Holder } from './styled';
import { CardPropsT } from './types';

export const Card: FC<CardPropsT> = (props: CardPropsT) => {
  return (
    <Wrapper>
      <Number htmlFor="cardNumber">{props.number}</Number>
      <Holder>
        <span>Card Holder</span>
        <label htmlFor="cardHolder">{props.holder}</label>
      </Holder>
      <div>
        <span>Expires</span>
        <label htmlFor="cardExpirationM">
          {props.dateM || 'MM'}/{props.dateY || 'YY'}
        </label>
      </div>
      <label htmlFor="cardCvv">{props.cvv}</label>
    </Wrapper>
  );
};

Card.defaultProps = {
  number: '#### #### #### ####',
  holder: 'Full Name'
};
