import React from 'react'
import styled from 'styled-components'
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { Typography, Box, Grid, Icon, Link, Button, IconButton } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import actions from '../redux/actions';
import logo from '../public/images/logo.svg';
import ProtectedPage from '../components/Page/components/ProtectedPage';
import Page from '../components/Page';
import UncontrolledLottie from '../components/UncontrolledLottie';
import DialogUpdateCase from '../components/DialogUpdateCase';
import CaseCard from '../components/CaseCard';
import { withSnackbar } from '../components/SnackbarProvider';
import { getCookie, setCookie } from '../utils/cookie';
import api from '../service/api';
import * as Animation from '../public/animations/profileLoading.json'

const Root = styled(Grid)`
  padding-top: 70px;
  padding-bottom: 40px;
  .text {
    color: black;
    position: absolute;
    left: 15px;
  }
`

const Perfil = (props) => {
  const [ casos, setCasos ] = React.useState([])
  const [ caso, setCaso ] = React.useState({})
  const [ open, setOpen ] = React.useState(false);
  
  React.useEffect(() => {
    if(props.ong) {
      api.get('/profile', { headers: { Authorization: props.ong.id }}).then(response => {
        setCasos(response.data.incidents)
      })
    }
  }, [ props.ong ])

  React.useEffect(() => {
    console.log(props)
    if(props.incidents) {
      setCasos(props.incidents)
    }
  }, [ props.incidents ])

  const handleOpen = (caso) => {
    setOpen(!open);
    if(!open) {
      setCaso(caso)
    }
  };

  const handleDelete = async (id) => {
    props.DeleteIncident(id, props.ong.id)
  }

  const handleUpdate = (id, values) => {
    values.ong_id = props.ong.id
    props.UpdateIncident(id, values)
    handleOpen()
  }

  return (
    <ProtectedPage>
      <Page protegida={true} protect={true}>
        <Root container justify="center" spacing={3}>
          <Grid item container xs={12} justify="center">
            <Grid item xs={8} style={{display: 'flex', position: 'relative', minHeight: 50}}>
              {props.ong? <Typography variant="h3" component="h3" className="text"> {casos.length > 0? "Incidentes Cadastrados" : "Ainda não há incidentes cadastrados" } </Typography> : null }
              {props.loading? <UncontrolledLottie height={40} width={40} animationData={Animation}/>: null }     
            </Grid>
          </Grid>
          <Grid item container xs={8} justify="center" spacing={3}>
            {casos.map(caso => (
              <Grid item xs={6}>
                <CaseCard caso={caso} handleDelete={handleDelete} loading={props.loading} handleOpen={handleOpen}/>
              </Grid>
            ))}
          </Grid>
        </Root>
        <DialogUpdateCase open={open} handleOpen={handleOpen} caso={caso} handleUpdate={handleUpdate}/>
      </Page>
    </ProtectedPage>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.authentication.loading,
    success: state.authentication.success,
    error: state.authentication.error,
    incidents: state.authentication.incidents,
    ong: getCookie('currentOng')? JSON.parse(getCookie('currentOng')) : null
  };
}

export default compose(connect(mapStateToProps, actions), withSnackbar())(Perfil);