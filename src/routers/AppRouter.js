import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import NotFoundPage from '../pages/NotFoundPage';
import Header from '../components/header/Header';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path='/' component={MainPage} exact={true} />
                <Route path='*' component={NotFoundPage} />
            </Switch>


        </BrowserRouter>
    );

}
export default AppRouter;