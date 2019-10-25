import { styled } from '@app/theme';

export default styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  max-width: 430px;
  max-height: 270px;
  padding: 25px;

  border-radius: 15px;
  color: ${(props): string => props.theme.colors.white};
  background: ${(props): string => props.theme.colors.black};
`;
