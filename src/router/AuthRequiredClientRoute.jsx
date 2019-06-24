import { Redirect, Route } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';

class AuthRequiredClientRoute extends Route {

  validSession() {
    return this.props.session.passkey !== undefined;
  }

  render() {
    if (!this.validSession()) {
      return (<Redirect to={`/clients/welcome${this.props.location.search}`} />);
    }
    return <this.props.component />;
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.clientStoreReducer.session,
  };
};

export default connect(mapStateToProps)(AuthRequiredClientRoute);
