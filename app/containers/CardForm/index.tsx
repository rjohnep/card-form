import React, { ReactElement } from 'react';

import { Card } from './components/Card';
import { Form } from './components/Form';

import Wrapper from './styled/Wrapper';

export const CardForm = (): ReactElement => (
  <Wrapper>
    <Card />
    <Form />
  </Wrapper>
);
