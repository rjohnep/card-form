import { CardTypesE } from '@app/containers/CardForm/types';

const cardTypesTests = {
  [CardTypesE.Visa]: new RegExp('^4'),
  [CardTypesE.Amex]: new RegExp('^(34|37)'),
  [CardTypesE.Mastercard]: new RegExp('^5[1-5]'),
  [CardTypesE.Discover]: new RegExp('^6011')
};

export const detectCardType = (ccNumber: string): CardTypesE | undefined => {
  if (cardTypesTests[CardTypesE.Visa].test(ccNumber)) {
    return CardTypesE.Visa;
  }

  if (cardTypesTests[CardTypesE.Amex].test(ccNumber)) {
    return CardTypesE.Amex;
  }

  if (cardTypesTests[CardTypesE.Mastercard].test(ccNumber)) {
    return CardTypesE.Mastercard;
  }

  if (cardTypesTests[CardTypesE.Discover].test(ccNumber)) {
    return CardTypesE.Discover;
  }

  return undefined;
};

export const getCardNumberMask = (
  cardType?: CardTypesE
): string => {
  if (cardType && cardType === CardTypesE.Amex) {
    return '9999 999999 99999';
  }

  return '9999 9999 9999 9999';
};

export const getCardNumber = (
  str: string,
  cardType: CardTypesE | undefined
): string => {
  const inputMask = getCardNumberMask(cardType);
  const number = str.split('');

  return inputMask
    .split('')
    .map((mc, i) => {
      if (typeof number[i] !== 'undefined') {
        if (/\s/.test(number[i])) return ' ';

        const lastDigitsCount = cardType === CardTypesE.Amex ? 5 : 4;
        if (i > 3 && i < inputMask.length - lastDigitsCount) {
          return '*';
        }

        return number[i];
      }

      return /\s/.test(mc) ? ' ' : '#';
    })
    .join('');
};
