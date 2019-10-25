import { styled } from '@app/theme';

import Wrapper from './Wrapper';

export { Wrapper };

export const Number = styled.label`
  position: absolute;
  top: 50%;

  font-size: 28px;
  font-weight: bold;
  letter-spacing: 5px;

  transform: translate(0, -50%);
`;

export const Holder = styled.div`
  position: absolute;
  left: 25px;
  bottom: 25px;
  max-width: 60%;

  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
  }

  label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 16px;
    text-transform: uppercase;
  }
`;

export const Expires = styled.div``;
