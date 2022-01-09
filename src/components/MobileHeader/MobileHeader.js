import React, { Component } from 'react';
import { Header, Title } from './MobileHeader.styles';
import { withRouter } from 'helpers';

class MobileHeader extends Component {
  render() {
    const pageName = (location) => {
      let name;
      if (location === '/') name = 'Coins';
      if (location === '/portfolio') name = location.slice(1);
      return name;
    };
    return (
      <Header>
        <Title>{pageName(this.props.location.pathname)}</Title>
      </Header>
    );
  }
}

export default withRouter(MobileHeader);
