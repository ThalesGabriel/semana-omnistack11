import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import NavigationHistoryContext from './NavigationHistoryContext'

export default class NavigationHistoryProvider extends PureComponent {
  state = {
    history: []
  }

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    const { asPath } = this.props.router;

    // lets add initial route to `history`
    if (asPath != '/sign-in' && asPath != '/sign-up'){
      this.setState(prevState => ({ history: [...prevState.history, asPath] }));
    }
  }

  componentDidUpdate() {
    const { history } = this.state;
    const { asPath } = this.props.router;

    //not tracking auth urls
    //TODO adicionar url do esquecimento de senha
    if (asPath != '/sign-in' && asPath != '/sign-up'){
      // if current route (`asPath`) does not equal
      // the latest item in the history,
      // it is changed so lets save it
      if (history[history.length - 1] !== asPath) {
        this.setState(prevState => ({ history: [...prevState.history, asPath] }));
      }
    }
  }



  render () {
    const { children } = this.props;
    const { history } = this.state;
    const url = (history && history.length > 0) ? history[history.length - 1] : null;

    return (
      <React.Fragment>
        <NavigationHistoryContext.Provider value={url}>
          {children}
        </NavigationHistoryContext.Provider>
      </React.Fragment>
    )
  }
}

NavigationHistoryProvider.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object
}
