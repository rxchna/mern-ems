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

// import React, { Component } from "react"; TODO - nav active links

// export default class NavBar extends Component {
//     constructor() {
//         super();
//         this.state = { selectedLink: window.location.hash }; // Initialize with current hash
//     }

//     componentDidMount() {
//         this.updateSelectedLink(); // Update immediately when component mounts

//         // Listen for changes to the URL hash
//         window.addEventListener("hashchange", this.updateSelectedLink);
//     }

//     componentWillUnmount() {
//         // Clean up the event listener when the component is unmounted
//         window.removeEventListener("hashchange", this.updateSelectedLink);
//     }

//     updateSelectedLink = () => {
//         // Update the selected link based on the current hash
//         this.setState({ selectedLink: window.location.hash });
//     };

//     render() {
//         const { selectedLink } = this.state;
//         const navIconStyle = { width: "1.5em", marginRight: "0.8em" };

//         // Function to get the active class based on the hash
//         const getActiveClass = (hash) => {
//             // Normalize the hash by trimming the "#" character
//             const normalizedHash = window.location.hash.split('?')[0]; 

//             // Add the "nav-active" class if the hash matches
//             if (hash === normalizedHash || (normalizedHash === "" && hash === "#/")) {
//                 return "nav-active"; // Mark Home as active if hash is empty
//             }
//             return "";
//         };

//         return (
//             <nav>
//                 <a
//                     href="/#/"
//                     className={`filter-options ${getActiveClass("#/")}`}
//                 >
//                     <img src="./images/home-icon-black.png" style={navIconStyle} />
//                     <div>Home</div>
//                 </a>
//                 <a
//                     href="/#/create"
//                     className={`filter-options ${getActiveClass("#/create")}`}
//                 >
//                     <img src="./images/add-icon-black.png" style={navIconStyle} />
//                     <div>New Employee</div>
//                 </a>
//             </nav>
//         );
//     }
// }
