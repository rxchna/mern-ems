import React from 'react';
import Content from './Content';
import NavBar from '../components/Navbar';

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