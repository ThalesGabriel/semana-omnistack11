import React from 'react';
import styled from 'styled-components';

import { Box } from '@material-ui/core';

import Header from './components/Header';

const CustomPage = styled(Box)`
  max-width: fit-content;
  min-width: -webkit-fill-available;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  padding-left: 0px;
  padding-right: 0px;
  overflow: hidden;
`

function Page({children, protegida=false, protect}) {
  return (
    <CustomPage>
      {protegida? <Header /> : null}
      {children}
    </CustomPage>
  );
}

export default Page;
