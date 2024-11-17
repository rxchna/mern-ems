import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EmployeeDirectory from '../pages/EmployeeDirectory.jsx';
import EmployeeCreatePage from '../pages/EmployeeCreatePage.jsx';

const NotFound = () => <h1>Page Not Found</h1>;

export default function Content() {
    return (
        <Switch>
            <Redirect exact from="/" to="/employees" />
            {/* <Route exact path="/" render={() => <Redirect to="/employees" />} /> */}
            <Route path="/employees" component={ EmployeeDirectory } />
            <Route path="/create" component={ EmployeeCreatePage } />
            {/* <Route path="/edit/:id" component={IssueEdit} /> */}
            <Route component={ NotFound } />
        </Switch>
    );
}