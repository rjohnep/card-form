import { styled } from '@app/theme';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 50px;
  background: ${(props): string => props.theme.colors.bg};
`;

export default Wrapper;
