import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MaskedInput from 'react-text-mask';


const StyledOutlinedInput = withStyles(theme => ({
  root: {
    borderRadius: 4,
    backgroundColor: 'white',
    width: '100%',
  },
}))(OutlinedInput);

const StyledFormControl = withStyles(theme => ({
  root: {
    display: 'block',
    marginTop: 10,
  },
}))(FormControl);

const StyledFormHelperText = withStyles(theme => ({
  root: {
    margin: '8px 14px 0'
  },
}))(FormHelperText);


const PhoneMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(',/[0-9]/, /\d/, ')',' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

class PhoneMasked extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    //style={props.half? {maxWidth: 240, width: '90%', marginTop: 15}:{maxWidth: 478, margin:10, width: '90%'}}
    //htmlFor={props.htmlFor}
    const {
      error,
      submitError,
      touched
    } = this.props;

    return(
      <StyledFormControl error={(error || submitError) && touched} {...this.props}>
        <InputLabel error={(error || submitError) && touched}  variant="outlined">
          {this.props.label}
        </InputLabel>
        <StyledOutlinedInput
          inputComponent={PhoneMaskCustom}
          labelWidth={90}
          error={(error || submitError) && touched}
        />
        {
        ((submitError || error) && touched) ?
          (<StyledFormHelperText error>{(submitError|| error)}</StyledFormHelperText>) :
          null
        }
      </StyledFormControl>
    )

  }
}

PhoneMasked.defaultProps = {

};

PhoneMasked.propTypes = {

};


export default PhoneMasked;
