import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import Page from './routes/Page';

// const element = <EmployeeDirectory />;
const element = (
    <Router>
        <Page />
    </Router>
)
ReactDOM.render(element, document.getElementById('contents'));
