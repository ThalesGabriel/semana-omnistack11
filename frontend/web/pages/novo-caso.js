import React from 'react';
import styled from 'styled-components'
import { Form, Field } from 'react-final-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Router from 'next/router'

import { Box, Grid, Typography, Button, TextField,OutlinedInput, InputAdornment, startAdornment } from '@material-ui/core';

import logo from '../public/images/logo.svg';
import Page from '../components/Page';
import StyledIconLink from '../components/Custom/StyledIconLink';
import { withSnackbar } from '../components/SnackbarProvider';
import actions from '../redux/actions';
import { required, email, phone, password } from '../validations';
import LottieButton from '../components/Custom/LottieButton';
import { getCookie, setCookie } from '../utils/cookie';
import TextInput from '../components/Custom/TextInput';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

const Root = styled(Grid)`
  height: 500px;
  width: 70%;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  margin: auto;
  .grid {
    height: fit-content;
    margin: auto;
  }
  .input {
    margin-top: 10px;
    width: 100%;
    background-color: white;
  }
  .button {
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 10px;
  }
  .title {
    margin-top: 15px;
    color: black;
    font-weight: bold;
  }
  .sub-title {
    color: black;
  }
`

const NovoCaso = (props) => {

  return (
    <Page>
      <Root container justify="center">
        <Grid item xs={5} className="grid">
          <img src={logo} alt="Logo"/>
          <Typography variant="h5" component="h5" className="title">Cadastrar novo caso</Typography>
          <Typography variant="body1" component="body1" className="sub-title">Descreva o caso detalhadamente para encontrarmos heróis que possam ajudar</Typography>
          <StyledIconLink route="/perfil" icon="arrow_back_ios_icon" label="Voltar para home"/>            
        </Grid>
        <Grid item xs={5} className="grid">
          <Form
            onSubmit={(values) => {
              values.ong_id = props.ong.id
              props.CreateIncident(values).then(() => {
                Router.push('/perfil')
              })
            }}
            render={({ handleSubmit, form, submitting, pristine, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <Grid container>
                  <Grid item xs={12}>
                    <Field
                      validate={required}
                      name="title"
                      render={({ input, meta }) => (
                        <div>
                          <TextInput {...input} {...meta} label={'Titulo do Caso'} />   
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      validate={required}
                      name="description"
                      render={({ input, meta }) => (
                        <div>
                          <TextInput {...input} {...meta} label={'Descrição'} multiline rows={7}/>   
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      validate={required}
                      name="value"
                      render={({ input, meta }) => (
                        <div>
                          <TextInput {...input} {...meta} type="number" label={'Valor'} icon={<MonetizationOnIcon/>}/>   
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={4} style={{paddingRight: 10}}>
                    <Button variant="contained" className="button"><Typography variant="body1" component="body1">Cancelar</Typography></Button>                    
                  </Grid>
                  <Grid item xs={8}>
                    <LottieButton disabled={ submitting || pristine || errors.length > 0 } type="submit" label="Cadastrar" loading={props.loading}></LottieButton>
                  </Grid>
                </Grid>
              </form>
            )}
          />
        </Grid>
      </Root>
    </Page>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.authentication.loading,
    success: state.authentication.success,
    error: state.authentication.error,
    ong: getCookie('currentOng')? JSON.parse(getCookie('currentOng')) : null
  };
}

export default compose(connect(mapStateToProps, actions), withSnackbar())(NovoCaso);