import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@containers/Layout';
import { Home } from '@pages/Home';
import { Payment } from '@pages/Payment';
import { Success } from '@pages/Success';
import { Checkout } from '@pages/Checkout';
import { NotFound } from '@pages/NotFound';
import { Information } from '@pages/Information';
import { AppContext } from '@context/AppContext';
import { useInitialState } from '@hooks/useInitialState';
import '@styles/App.css';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/checkout' element={ <Checkout /> } />
            <Route exact path='/checkout/information' element={ <Information /> } />
            <Route exact path='/checkout/payment' element={ <Payment /> } />
            <Route exact path='/checkout/success' element={ <Success /> } />
            <Route path='*' element={ <NotFound /> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export { App };
