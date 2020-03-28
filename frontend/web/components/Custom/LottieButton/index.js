import React from 'react';

import styled from 'styled-components';
import { Typography, Box, Icon, Link, Button } from '@material-ui/core';
import UncontrolledLottie from '../../UncontrolledLottie';
import * as Animation from '../../../public/animations/loadingButton.json'

const Root = styled(Box)`
  width: 100%;
  .button {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
  }
  .disabled {
    box-shadow: none;
  }
`

const LottieButton = (props) => {
  return (
    <Root>
      <Button 
        variant="contained" 
        color="primary" 
        {...props}
        classes={{ disabled: 'disabled' }} 
        className="button"
      >
      {props.loading?
        <UncontrolledLottie height={40} width={40} animationData={Animation}/>
      :
        <Typography variant="body1" component="body1">{props.label}</Typography>
      }
      </Button>    
    </Root>
  );
}

export default LottieButton;