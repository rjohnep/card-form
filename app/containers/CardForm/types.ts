import { FormFieldIds } from './components/Form/types';

export enum CardTypesE {
  Visa,
  Amex,
  Mastercard,
  Discover
}

export type CardFormStateT = {
  currentFocus: FormFieldIds | undefined;
  cardType: CardTypesE | undefined;
  cardNumber: string;
  cardHolder: string;
  dateM: number | undefined;
  dateY: number | undefined;
  cvv: string;
};
