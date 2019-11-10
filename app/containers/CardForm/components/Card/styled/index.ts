import { css, FlattenSimpleInterpolation } from 'styled-components';

import { styled } from '@app/theme';

import { CardLogo } from '@app/containers/CardForm/components/CardLogo';

import Wrapper from './Wrapper';
import { CardFocusMetaT } from '../types';

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

export const Logo = styled(CardLogo) <{ back?: boolean }>`
  z-index: 10;

  position: absolute;
  top: 15px;
  right: 25px;

  max-width: 100px;
  height: 70px;

  ${({ back }): undefined | false | string => back
    && `
    bottom: 25px;
    top: auto;
  `}
`;

export const FrontSide = styled.div<{ isFront: boolean }>`
  ${CommomCardStyle};

  color: ${(props): string => props.theme.colors.white};
  background: ${(props): string => props.theme.colors.black};

  transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);

  ${({ isFront }): false | string => !isFront
    && 'transform: perspective(1000px) rotateY(180deg) rotateX(0deg);'}
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

  ${({ isFront }): false | string => !isFront
    && 'transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);'}

  &:after {
    content: '';

    position: absolute;
    width: 100%;
    height: 50%;
    bottom: 10%;
    left: 0;

    background: #ccc;
  }

  .black-line {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 45px;

    background: ${(props): string => props.theme.colors.black};
  }
`;

export const Number = styled.label`
  z-index: 10;;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;

  cursor: pointer;
  position: absolute;
  top: calc(50% - 21px);
  left: 7%;
  width: 86%;

  font-size: 28px;
  line-height: 28px;
  font-weight: bold;
  letter-spacing: 5px;
  text-shadow: 0 8px 30px #fff;

  span {
    width: 20px;
    text-align: center;
    flex-shrink: 0;
  }
`;

export const Holder = styled.div`
  z-index: 10;

  position: absolute;
  left: 25px;
  bottom: 25px;
  max-width: 60%;
  width: 100%;

  display: flex;
  flex-direction: column;

  label:first-child {
    cursor: pointer;
    font-size: 12px;
  }

  label {
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-size: 16px;
    text-transform: uppercase;
  }
`;

export const Expires = styled.div`
  z-index: 10;

  cursor: pointer;
  position: absolute;
  right: 25px;
  bottom: 25px;

  max-width: 40%;

  display: flex;
  flex-direction: column;

  label {
    cursor: pointer;
    text-align: right;
  }

  label:first-child {
    font-size: 12px;
  }
`;

export const CVV = styled.label`
  z-index: 10;

  position: absolute;
  bottom: 100px;
  left: 50%;

  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;

  width: 90%;
  height: 40px;
  padding-right: 9px;
  color: ${(props): string => props.theme.colors.black};
  background: ${(props): string => props.theme.colors.white};
  border-radius: 5px;

  transform: translate(-50%, 0);

  :after {
    content: 'CVV';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    padding-right: 10px;
    text-align: right;
    font-size: 13px;
  }
`;

const focusMetaStyle = (
  meta: CardFocusMetaT
): FlattenSimpleInterpolation => css`
  visibility: visible;

  width: ${meta.width};
  height: ${meta.height};
  top: ${meta.top};
  left: ${meta.left};
`;
export const Hightlighter = styled.div<{ meta: CardFocusMetaT | undefined }>`
  z-index: 1;

  visibility: hidden;
  position: absolute;
  padding: 5px 10px;

  box-sizing: content-box;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;

  background: rgba(255, 255, 255, 0.2);
  z-index: 1;

  transform: translate(-12px, -8px);

  ${({ meta }): FlattenSimpleInterpolation | undefined => meta
    && focusMetaStyle(meta)};

  transition: all 0.3s;
`;
