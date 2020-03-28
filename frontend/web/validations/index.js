export const required = value => (value ? undefined : 'Campo obrigatório');

export const email = value => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase()) ? undefined : 'Email inválido';
};

export const phone = value => {
  let re = /^\(\d{2}\) \d{4,5}\-\d{4}$/;
  return re.test(value) ? undefined : 'Telefone inválido';
};


export const password = value => ((value && value.length >= 6) ? undefined : 'Senha menor que 6 caracteres');

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export const mustBeNumber = value => (isNaN(value) ? 'Deve ser um número' : undefined)

export const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Deve ser maior que ${min}`
