import React from 'react';

import styled from 'styled-components';
import { Typography, Box, Icon, Link } from '@material-ui/core';

const Root = styled(Box)`
  width: 100%;
  text-align: left;
  margin-top: 20px;
  .link {
    display: flex;
    margin-top: 10px;
  }
`

const StyledIconLink = ({route, icon, label}) => {
  return (
    <Root>
      <Link href={route} className="link">
        <Icon color="primary" style={{marginRight: 8}}>{icon}</Icon>
        <Typography variant="h5" component="h5" >{label}</Typography>
      </Link>
    </Root>
  );
}

export default StyledIconLink;