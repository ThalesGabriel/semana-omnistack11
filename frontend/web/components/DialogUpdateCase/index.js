import React from 'react';
import { Form, Field } from 'react-final-form';
import styled from 'styled-components';

import {Button, Dialog, DialogActions, DialogContent, DialogContentText, Typography, TextField, Grid, OutlinedInput, DialogTitle, Slide, InputAdornment} from '@material-ui/core';

const Root = styled(Dialog)`
  max-height: 600px;
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogUpdateCase({open, handleOpen, caso, handleUpdate}) {
  
  return (
    <div>
      <Root
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleOpen}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"><Typography variant="h4" component="h4" color="black">Edição de incidente</Typography></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="body1" component="body1" color="black">Preencha os campos abaixo para atualizar as informações do seu incidente.</Typography>
          </DialogContentText>
          <Form
            onSubmit={(values) => handleUpdate(caso.id, values)}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <Grid container>
                  <Grid item xs={12}>
                    <Field
                      name="title"
                      render={({ input, meta }) => (
                        <div>
                          <TextField {...input} {...meta} variant="outlined" className="input" label={caso? caso.title : "Titulo do caso"} placeholder={caso? "Titulo do caso":null}/>   
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="description"
                      render={({ input, meta }) => (
                        <div>
                          <TextField {...input} {...meta} variant="outlined" className="input" placeholder={caso? caso.description : "Descrição"} multiline rows={7}/>   
                        </div>
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      name="value"
                      render={({ input, meta }) => (
                        <div>
                          <OutlinedInput
                            {...input} {...meta}
                            className="input"
                            placeholder={caso? caso.value : null}
                            type="number"
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            labelWidth={0}
                          />
                        </div>
                      )}
                    />
                  </Grid>
                  <DialogActions style={{marginLeft: 'auto', marginTop: 30}}>
                    <Button onClick={handleOpen}>
                      Cancelar
                    </Button>
                    <Button type="submit" color="primary">
                      Atualizar
                    </Button>
                  </DialogActions>
                </Grid>
              </form>
            )}
          />
        </DialogContent>
        
      </Root>
    </div>
  );
}
