import React from 'react';
import { Form, Field } from 'react-final-form';
import { compose } from 'recompose';
import Router from 'next/router'
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Box, Grid, Button, Icon, Link } from '@material-ui/core';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import actions from '../redux/actions';
import logo from '../public/images/logo.svg';
import HeroesImg from '../public/images/heroes.png';
import LottieButton from '../components/Custom/LottieButton';
import Animation from '../public/animations/index_animation.json';
import UncontrolledLottie from '../components/UncontrolledLottie';
import Page from '../components/Page';
import ProtectedPage from '../components/Page/components/ProtectedPage';
import StyledIconLink from '../components/Custom/StyledIconLink';
import { withSnackbar } from '../components/SnackbarProvider';
import { getCookie, setCookie } from '../utils/cookie';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  fit: {
    textAlign: 'center',
    height: 'fit-content'
  },
  text: {
    marginTop: 60,
    color: 'black',
    textAlign: 'left'
  },
  input: {
    marginTop: 30,
    width: '100%',
    backgroundColor: 'white'
  },
  button: {
    marginTop: 20,
    width: '100%',
    height: 50,
    borderRadius: 10,
  }
}));

function Home(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  
  React.useEffect(() => {
    async function handleOng() {
      await setCookie('currentOng', props.user);
    }
    console.log(props)
    const { error, success } = props;
    if(error == false && success == true) {
      handleOng()
      Router.push('/perfil').then(() => {
        props.snackbar.showSuccessMessage(
          'Login efetuado com sucesso'
        );
      });
    }else {
      if(error != null) {
        props.snackbar.showFailureMessage(
          props.error.message
        );
        setTimeout(() => {
          location.reload()
        }, 1000)
      }
    }
  }, [props])

  return (
    
    <Page>
      <Grid container className={classes.root}>
        <Grid item container xs={12} justify="center" alignItems="center">
          <Grid item className={classes.fit} style={{display: 'flex'}}>
            <Box item className={classes.fit} style={{  width: 320, height: 400, margin: 'auto', marginRight: 80}}>
              <img src={logo} alt="Logo"/>
              <Typography variant="h3" component="h3" className={classes.text}>Faça seu Logon</Typography>
              <Form
                onSubmit={(values, form, callback) => {
                  const { id } = values;
                  console.log(values)
                  props.Login(id);
                }}
                render={({ handleSubmit, form, submitting, pristine, values, errors }) => (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <Field
                        name="id"
                        render={({ input, meta }) => (
                          <div>
                            <TextField {...input} {...meta} variant="outlined" className={classes.input} label="Sua ID"/>   
                          </div>
                        )}
                      />
                      <LottieButton disabled={ pristine || errors.length > 0 } type="submit" label="Entrar" loading={props.loading}></LottieButton>
                      <StyledIconLink route="/registro" icon="exit_to_app_rounded_icon" label="Não tenho cadastro" />
                    </div>
                  </form>
                )}
              />
            </Box>
            <img src={HeroesImg} alt="HeroesImg"/>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.authentication.loading,
    success: state.authentication.success,
    error: state.authentication.error,
    user: state.authentication.user
  };
}

export default compose(connect(mapStateToProps, actions), withSnackbar())(Home);

