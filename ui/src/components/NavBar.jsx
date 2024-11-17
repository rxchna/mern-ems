import React from "react";

export default function NavBar() {
    const navIconStyle = { width: "1.5em", marginRight: "0.8em" };

    return (
        <nav>
            <a href="/">
                <img src="./images/home-icon-black.png" style={navIconStyle} />
                <div>Home</div>
            </a>
            <a href="/#/create">
                <img src="./images/add-icon-black.png" style={navIconStyle} />
                <div>New Employee</div>
            </a>
        </nav>
    );
}