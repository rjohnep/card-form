import React, { ReactElement } from 'react';

import { Card } from './components/Card';

import Wrapper from './styled/Wrapper';

export const CardForm = (): ReactElement => (
  <Wrapper>
    <Card />
  </Wrapper>
);
