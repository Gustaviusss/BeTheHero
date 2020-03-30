
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React, {Component}from 'react';

import Routes from './src/routes'

export default class App extends Component {
    render(){
      return (
        <Routes />
      );
    }
}
