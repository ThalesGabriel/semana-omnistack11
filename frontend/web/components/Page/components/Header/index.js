import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'

import { Typography, Box, Grid, Icon, Link, Button, IconButton } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import logo from '../../../../public/images/logo.svg';
import Page from '../../../../components/Page';
import { getCookie, setCookie, removeCookie } from '../../../../utils/cookie';

const Root = styled(Grid)`
  padding-top: 30px;
  .button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
  }
`

const Header = ({ protect=false }) => {
  const [ ong, setOng ] = React.useState({name: "ONG"})
  
  React.useEffect(() => {
    if(getCookie('currentOng')) {
      setOng(JSON.parse(getCookie('currentOng')))
    }
  }, [ ong.id ])

  const logout = async () => {
    await removeCookie('currentOng')
    location.reload()
  }

  if(!ong.id) {
    return null;
  }

  return (
    <Root container justify="center" >
      <Grid item container xs={4} alignItems="center" spacing={2}>
        <Grid item>
          <img src={logo} alt="Logo" style={{width: 150}}/>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h5" style={{color: 'black', fontWeight: 'bold'}}>Bem Vinda, {ong.name}</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={4} alignItems="center" justify="flex-end" spacing={2}>
        <Grid item xs={7} onClick={() => Router.push('/novo-caso')}>
          <Button variant="contained" color="primary" className="button"><Typography variant="body2" component="body2">Cadastrar novo caso</Typography></Button>
        </Grid>
        <Grid item>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={logout}>
            <PowerSettingsNewIcon/>
          </IconButton>
        </Grid>
      </Grid>
    </Root>
  );
}

export default Header;