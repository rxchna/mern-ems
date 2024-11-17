import React from "react";

// Field error component : displays any error message for each field on create employee
export default class FormFieldError extends React.Component {
    render() {
        const { errorMessage } = this.props;
        const errorStyle = { color: "red", fontSize: "0.85em" };
        const errorIconStyle = { width: "1em", marginRight: "0.5em" };

        if (!errorMessage) return null;

        return (
            <div style={errorStyle} className="error-message">
                <img src="./images/alert-icon.png" style={errorIconStyle} />
                {errorMessage}
            </div>
        );
    }
}