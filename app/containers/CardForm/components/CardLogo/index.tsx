import React, { FC } from 'react';

import VisaIcon from '@assets/icons/visa-pay-logo.svg';
import AmexIcon from '@assets/icons/american-express-logo.svg';
import DisocverIcon from '@assets/icons/discover-logo-of-pay-system.svg';
import MasterIcon from '@assets/icons/master-card-logo.svg';

import { CardTypesE } from '@app/containers/CardForm/types';
import { Icon } from '@app/components/Icon';

import { CardLogoT } from './types';

export const CardLogo: FC<CardLogoT> = (props: CardLogoT) => {
  // TODO: JUST FOR DEMO
  const { cardType = CardTypesE.Visa } = props;

  let icon;

  switch (cardType) {
    case CardTypesE.Visa:
      icon = VisaIcon;
      break;
    case CardTypesE.Amex:
      icon = AmexIcon;
      break;
    case CardTypesE.Discover:
      icon = DisocverIcon;
      break;
    case CardTypesE.Mastercard:
      icon = MasterIcon;
      break;
    default:
      return VisaIcon;
  }

  return <Icon className={props.className} icon={icon} />;
};
