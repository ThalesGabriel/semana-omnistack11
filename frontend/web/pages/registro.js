import React from 'react';
import styled from 'styled-components'
import { Form, Field } from 'react-final-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Router from 'next/router'

import { Box, Grid, Typography, Button, TextField } from '@material-ui/core';

import actions from '../redux/actions';
import logo from '../public/images/logo.svg';
import Page from '../components/Page';
import StyledIconLink from '../components/Custom/StyledIconLink';
import LottieButton from '../components/Custom/LottieButton';
import PhoneMasked from '../components/Custom/TextInput/components/PhoneMasked';
import TextInput from '../components/Custom/TextInput';
import { required, email, phone, password } from '../validations';
import { withSnackbar } from '../components/SnackbarProvider';

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
  .title {
    margin-top: 15px;
    color: black;
    font-weight: bold;
  }
  .sub-title {
    color: black;
  }
`

const Registro = (props) => {

  React.useEffect(() => {
    console.log(props)
    const { error, success, user } = props;
    if(error == null && success == true && user) {
      alert("Anote a identificação de sua ONG para fazer o Logon: " + user)
    }else {
      if(error != null) {
        props.snackbar.showFailureMessage(
          props.error.message
        );
      }
    }
  }, [props])

  return (
    <Page>
      <Root container justify="center">
        <Grid item xs={5} className="grid">
          <img src={logo} alt="Logo"/>
          <Typography variant="h5" component="h5" className="title">Cadastro</Typography>
          <Typography variant="body1" component="body1" className="sub-title">Faça seu cadastro, entre na plataforma e ajude as pessoas a encontrarem os casos da sua ONG</Typography>
          <StyledIconLink route="/" icon="arrow_back_ios_icon" label="Voltar"/>            
        </Grid>
        <Grid item xs={5} className="grid">
          <Form
            onSubmit={(values, form, callback) => {
              const { name, email, wpp, city, uf } = values;
              console.log('ola')
              props.Register(name, email, wpp, city, uf);
            }}
            render={({ handleSubmit, form, submitting, pristine, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <Grid container>
                  <Grid item xs={12}>
                    <Field
                      name="name"
                      validate={required}
                      render={({ input, meta }) => (
                        <TextInput {...input} {...meta} label={'Nome da ONG'} />   
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="email"
                      validate={email}
                      render={({ input, meta }) => (
                        <div>
                          <TextInput {...input} {...meta} label={'Email'} placeholder={'ong@email.com'} />   
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="wpp"
                      validate={phone}
                      render={({ input, meta }) => (
                        <div>
                          <PhoneMasked {...input} {...meta} label={'Whatsapp'} />   
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={7} style={{paddingRight: 10}}>
                    <Field
                      name="city"
                      validate={required}
                      render={({ input, meta }) => (
                        <div>
                          <TextInput {...input} {...meta} label={'Cidade'} />   
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <Field
                      name="uf"
                      validate={required}
                      render={({ input, meta }) => (
                        <div>
                          <TextInput {...input} {...meta} label={'UF'} />   
                        </div>
                      )}
                    />
                  </Grid>
                  <LottieButton disabled={ submitting || pristine || errors.length > 0 } type="submit" label="Cadastrar" loading={props.loading}></LottieButton>
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
    user: state.authentication.user,
    error: state.authentication.error
  };
}

export default compose(connect(mapStateToProps, actions), withSnackbar())(Registro);
