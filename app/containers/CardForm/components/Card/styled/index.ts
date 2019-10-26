import { css } from 'styled-components';

import { styled } from '@app/theme';

import Wrapper from './Wrapper';

export { Wrapper };

const CommomCardStyle = css`
  overflow: hidden;
  height: 100%;

  border-radius: 15px;

  box-shadow: 0 25px 50px 0 rgba(14, 42, 90, 0.55);

  transform-style: preserve-3d;
  transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
  backface-visibility: hidden;
`;

export const Logo = styled.div<{ back?: boolean }>`
  position: absolute;
  top: 25px;
  right: 25px;

  max-width: 100px;
  height: 45px;

  width: 100%; // TODO: remove temp
  background: #fff; // TODO: remove temp
  opacity: 0.5; // TODO: remove temp

  ${({ back }): undefined | false | string =>
    back &&
    `
    bottom: 25px;
    top: auto;
    background: #000;
  `}
`;

export const FrontSide = styled.div<{ isFront: boolean }>`
  ${CommomCardStyle};

  color: ${(props): string => props.theme.colors.white};
  background: ${(props): string => props.theme.colors.black};

  transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);

  ${({ isFront }): false | string =>
    !isFront && `transform: perspective(1000px) rotateY(180deg) rotateX(0deg);`}
`;

export const BackSide = styled.div<{ isFront: boolean }>`
  ${CommomCardStyle};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background: ${(props): string => props.theme.colors.white};
  color: ${(props): string => props.theme.colors.black};

  transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);

  ${({ isFront }): false | string =>
    !isFront &&
    ` transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);`}

  .black-line {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 45px;

    background: ${(props): string => props.theme.colors.black};
  }
`;

export const Number = styled.label`
  position: absolute;
  top: 50%;
  left: 25px;

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

export const Expires = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;

  max-width: 40%;

  display: flex;
  flex-direction: column;
`;

export const CVV = styled.label`
  position: absolute;
  bottom: 100px;
  left: 50%;

  width: 90%;
  height: 40px;
  background: #ccc;
  border-radius: 5px;

  transform: translate(-50%, 0);

  :after {
    content: 'CVV';
    position: absolute;
    top: -20px;
    width: 100%;
    padding-right: 10px;
    text-align: right;
  }
`;
