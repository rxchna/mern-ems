import React from "react";

// Header component
export default class EMSHeader extends React.Component {
    render(){
        const logoStyle = { width: "5em" };
        const headerContainerStyle = { display: "flex", flexDirection: "column", alignItems: "center" };
        return (
            <div style={headerContainerStyle}>
                <img src="./images/ems-logo.png" style={logoStyle} />
                <h1>Employee Management System</h1>
            </div>
        );
    }
}