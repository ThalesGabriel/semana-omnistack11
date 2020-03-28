import Router from 'next/router';
import {
  SIGNUP_REQUESTED,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_REQUESTED,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  DELETE_REQUESTED,
  DELETE_SUCCESS,
  DELETE_FAIL,
  UPDATE_REQUESTED,
  UPDATE_SUCCESS,
  UPDATE_FAIL
} from '../types';

import api from '../../service/api';
import axios from 'axios';

const Register = (name, email, wpp, city, uf) => dispatch => {
  console.log('subscribbing user');

  dispatch({ type: SIGNUP_REQUESTED });

  api
    .post('/ongs', {
      name,
      email,
      wpp,
      city,
      uf
    })
    .then(response => {
      console.log(response)
      dispatch({ type: SIGNUP_SUCCESS, user: response.data.id });
    }).catch(error => {
      dispatch({
        type: SIGNUP_FAIL,
        error: {
          message: 'Aconteceu um erro interno! Tente novamente mais tarde!'
        }
      });
    });
  return Promise.resolve();
};

const Login = (id) => dispatch => {

  dispatch({ type: SIGNIN_REQUESTED });
  console.log('ihu')
  api
    .post('/session', {
      id: id
    })
    .then(response => {
      dispatch({ type: SIGNIN_SUCCESS, user: response.data });
    })
    .catch(error => {
      dispatch({
        type: SIGNIN_FAIL,
        error: {
          message: 'Email ou senha não batem com a base de dados.'
        }
      });
    });
  return Promise.resolve();
};

const DeleteIncident = (id, ong_id) => dispatch => {

  dispatch({ type: DELETE_REQUESTED });
  console.log(id)
  api.delete(`/incidents/${id}`, {headers: { Authorization: ong_id}})
    .then(response => {
      console.log(response)
      dispatch({ type: DELETE_SUCCESS, incidents: response.data.data });
    })
    .catch(error => {
      dispatch({
        type: DELETE_FAIL,
        error: {
          message: 'Ocorreu um erro interno. Tente novamente mais tarde.'
        }
      });
    });
  return Promise.resolve();
};

const UpdateIncident = (id, values) => dispatch => {

  dispatch({ type: UPDATE_REQUESTED });
  console.log(values)
  api
    .put(`/incidents/${id}`, values )
    .then(response => {
      console.log(response)
      dispatch({ type: UPDATE_SUCCESS, incidents: responde.data.incidents });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_FAIL,
        error: {
          message: 'Ocorreu um erro interno. Tente novamente mais tarde.'
        }
      });
    });
  return Promise.resolve();
};

const CreateIncident = (values) => dispatch => {

  dispatch({ type: UPDATE_REQUESTED });
  console.log(values)
  api
    .post(`/incidents`, values )
    .then(response => {
      console.log(response)
      dispatch({ type: UPDATE_SUCCESS, incidents: responde.data.incidents });
    })
    .catch(error => {
      dispatch({
        type: UPDATE_FAIL,
        error: {
          message: 'Ocorreu um erro interno. Tente novamente mais tarde.'
        }
      });
    });
  return Promise.resolve();
};

export default {
  Register,
  Login,
  DeleteIncident,
  UpdateIncident,
  CreateIncident
};
