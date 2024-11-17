import React from 'react';
import Content from './Content';
import NavBar from '../components/Navbar';

// function NavBar() { 
//     return(
//         <nav>
//             <a href="/">Home</a>
//             <a href="/#/create">New Employee</a>
//         </nav>
//     );
// }

export default function Page() { 
    return ( 
        <>
            <div className='page-container'>
                <NavBar />
                <Content />
            </div>
        </>
    );
}