import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const CustomTextField = styled(TextField)`
  margin-top: 10px;
  width: 100%;
  div {
    background-color: white;
  }
`

class TextInput extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      error,
      submitError,
      touched,
      icon,
    } = this.props;

    return (
      <CustomTextField
        type={'text'}
        variant="outlined"
        {...this.props}
        error={(error || submitError) && touched}
        helperText={(submitError || error) && touched ? (submitError|| error) : '' }
        InputProps={{
          endAdornment: icon
        }}

      />
    );

  }
}

TextInput.defaultProps = {
  // iconName: null,
  // title: null,
  // subtitle: null,
  // ctaLabel: null,
  // onPressCta: () => {},
  // containerStyle: {}
};

TextInput.propTypes = {
  // iconName: PropTypes.string,
  // title: PropTypes.string,
  // subtitle: PropTypes.string,
  // ctaLabel: PropTypes.string,
  // onPressCta: PropTypes.func,
  // containerStyle: PropTypes.any,
};


export default TextInput;
