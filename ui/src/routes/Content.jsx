import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EmployeeDirectory from '../pages/EmployeeDirectory.jsx';
import EmployeeCreatePage from '../pages/EmployeeCreatePage.jsx';
import EmployeeViewPage from '../pages/EmployeeViewPage.jsx';
import EmployeeEditPage from '../pages/EmployeeEditPage.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';

export default function Content() {
    return (
        <Switch>
            <Redirect exact from="/" to="/employees" />
            {/* <Route exact path="/" render={() => <Redirect to="/employees" />} /> */}
            <Route path="/employees" component={ EmployeeDirectory } />
            <Route path="/create" component={ EmployeeCreatePage } />
            <Route path="/get/:id" component={ EmployeeViewPage } />
            <Route path="/edit/:id" component={ EmployeeEditPage } />
            <Route component={ PageNotFound } />
        </Switch>
    );
}