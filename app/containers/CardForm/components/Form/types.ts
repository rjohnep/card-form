import { CardFormStateT } from '@app/containers/CardForm/types';

export enum FormFieldIds {
  cardNumber = 'cardNumber',
  cardHolder = 'cardHolder',
  cardExpiration = 'cardExpiration',
  cardExpirationM = 'cardExpirationM',
  cardExpirationY = 'cardExpirationY',
  cardCvv = 'cardCvv'
}

export type FormPropsT = {
  state: CardFormStateT,
  onFocusUpdate: (field: FormFieldIds) => void;
  onFocusReset: () => void;
  onCCNumberChange: (number: string) => void;
  onCCHolderChange: (holder: string) => void;
};
