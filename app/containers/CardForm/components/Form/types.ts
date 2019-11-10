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
  state: CardFormStateT;
  onFocusUpdate: (field: FormFieldIds) => void;
  onFocusReset: () => void;
  onNumberChange: (number: string) => void;
  onHolderChange: (holder: string) => void;
  onMonthChange: (month: number) => void;
  onYaerChange: (year: number) => void;
  onCvvChange: (cvv: number | undefined) => void;
};
