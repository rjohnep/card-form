import { styled } from '@app/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
  margin-top: -125px;
  padding: 150px 25px 25px;

  background: #add8e645;
  border-radius: 15px;
  box-shadow: 0 25px 50px 0 rgba(14, 42, 90, 0.55);
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    padding: 10px;

    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;
