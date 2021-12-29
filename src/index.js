import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { HashRouter } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.render( 
  <HashRouter>
    <React.StrictMode >
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </React.StrictMode>

    </HashRouter>,
    document.getElementById('root')
);


