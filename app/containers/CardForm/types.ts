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
  cardNumber: string | undefined;
  cardHolder: string;
  dateM: number | undefined;
  dateY: number | undefined;
  cvv: number | undefined;
};
