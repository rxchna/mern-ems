import React from "react";

// Employee search component
export default class EmployeeSearch extends React.Component {
    render () {
        return (
            <div className="section search-container">
                <input type="search" placeholder="Filter by keyword..." />
            </div>
        );
    }
}