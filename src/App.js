import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Navbar from './components/Navbar/Navbar';

const App = () => {

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route component={Home} exact path="/" />
                    <Route component={Auth} exact path="/auth" />
                </Switch>

            </Container>
        </BrowserRouter >

    );
}
export default App;