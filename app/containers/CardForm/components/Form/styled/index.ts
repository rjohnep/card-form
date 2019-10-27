import { styled } from '@app/theme';
import { css, FlattenSimpleInterpolation } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
  margin-top: -125px;
  padding: 170px 25px 25px;

  background: #add8e645;
  border-radius: 15px;
  box-shadow: 0 25px 50px 0 rgba(14, 42, 90, 0.55);
`;

const groupedStyle = css`
  flex-wrap: wrap;
  flex-direction: row;

  label {
    width: 100%;
  }

  input,
  select {
    margin-right: 20px;
    min-width: 100px;
  }
`;

const shortStyle = css`
  max-width: 150px;
`;

export const Field = styled.div<{ group?: boolean; short?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 12px;
  }

  input,
  select {
    height: 40px;
    padding: 10px;

    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  ${({ group }): undefined | false | FlattenSimpleInterpolation =>
    group && groupedStyle}

  ${({ short }): undefined | false | FlattenSimpleInterpolation =>
    short && shortStyle}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
