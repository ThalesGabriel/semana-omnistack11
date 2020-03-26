import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

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

function Page({children}) {
  return (
    <CustomPage>
      {children}
    </CustomPage>
  );
}

export default Page;
