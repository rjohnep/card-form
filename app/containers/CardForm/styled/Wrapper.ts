import { styled } from '@app/theme';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${(props): string => props.theme.colors.bg};
`;

export default Wrapper;
