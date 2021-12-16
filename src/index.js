import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render( 
  <BrowserRouter>
    <React.StrictMode >
      <ChakraProvider>
        <App/>
      </ChakraProvider>
    </React.StrictMode>

  </BrowserRouter>,
    document.getElementById('root')
);



