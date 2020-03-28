import React, { PureComponent } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import SnackbarContext from './SnackbarContext'

const StyledSnackbar = styled(Snackbar)`
  .success {
    background: ${props => props.theme.palette.success.main};
  }
  .failure {
    background: ${props => props.theme.palette.error.main};
  }
  .message {
    padding: 8px 0;
    text-align: center;
    font-size: 16px;
    flex: 1;
  }
`;

export default class SnackbarProvider extends PureComponent {
  state = {
    message: null,
    open: false
  }

  constructor (props) {
    super(props)
    this.contextValue = {
      showMessage: this.showMessage,
      showSuccessMessage: this.showSuccessMessage,
      showFailureMessage: this.showFailureMessage
    }
  }

  /**
   * Display a message with this snackbar.
   * @param {string} message message to display
   * @param {string} [action] label for the action button
   * @param {function} [handleAction] click handler for the action button
   * @param {type} [type] string success or failure
   * @public
   */
  showMessage = (message, action, handleAction, type="success") => {
    this.setState({ open: true, message, action, handleAction, type});
  }

  showSuccessMessage = (message) => {
    this.showMessage(message);
  }

  showFailureMessage = (message) => {
    this.showMessage(message, null, null, "failure");
  }

  handleActionClick = () => {
    this.handleClose()
    this.state.handleAction()
  }

  handleClose = () => {
    this.setState({ open: false, handleAction: null })
  }

  render () {
    const {
      action,
      message,
      open,
      type
    } = this.state;

    const { children } = this.props;


    return (
      <React.Fragment>
        <SnackbarContext.Provider
          value={this.contextValue}
        >
          {children}
        </SnackbarContext.Provider>
        <StyledSnackbar
          open={open}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          ContentProps={{
            classes: {
              root: type,
              message: 'message'
            }
          }}
          message={message || ''}
          action={action != null && (
            <Button
              color='secondary'
              size='small'
              onClick={this.handleActionClick}
            >
              {action}
            </Button>
          )}
          onClose={this.handleClose}
        />
      </React.Fragment>
    )
  }
}

SnackbarProvider.propTypes = {
  children: PropTypes.node
}
