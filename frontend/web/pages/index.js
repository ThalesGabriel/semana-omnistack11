import React from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Box, Grid, Button, Icon, Link } from '@material-ui/core';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import logo from '../public/images/logo.svg';
import HeroesImg from '../public/images/heroes.png';
import Animation from '../public/animations/index_animation.json';
import UncontrolledLottie from '../components/UncontrolledLottie';
import Page from '../components/Page';

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
  },
  link: {
    display: 'flex', 
    marginTop: 10,
  }
}));

function Home() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  
  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };
  
  const onSubmit = () => {
    alert('Pei')
  }

  return (
    <Page>
      <Grid container className={classes.root} spacing={5}>
        <Grid item container xs={6} justify="center" alignItems="center">
          <Grid item className={classes.fit} style={{maxWidth: 320, width: '100%'}}>
            <img src={logo} alt="Logo"/>
            <Typography variant="h3" component="h3" className={classes.text}>Faça seu Logon</Typography>
            <Form
              onSubmit={onSubmit}
              initialValues={{ stooge: 'larry', employed: false }}
              render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <Field
                      name="user"
                      render={({ input, meta }) => (
                        <div>
                          <TextField variant="outlined" className={classes.input} label="Sua ID"/>   
                        </div>
                      )}
                    />
                    <Button variant="contained" color="primary" className={classes.button}><Typography variant="body1" component="body1">Entrar</Typography></Button>
                    <Box style={{width: '100%', textAlign: 'left'}}>
                      <Link href="/registro" className={classes.link}>
                        <Icon color="primary" style={{marginRight: 8}}>exit_to_app_rounded_icon</Icon>
                        <Typography variant="h5" component="h5" >Não tenho cadastro</Typography>
                      </Link>
                    </Box>
                  </div>
                </form>
              )}
            />
          </Grid>
        </Grid>
        <Grid item container xs={6} justify="flex-start" alignItems="center">
          <Grid item className={classes.fit}>
            <img src={HeroesImg} alt="HeroesImg"/>
          </Grid>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;

