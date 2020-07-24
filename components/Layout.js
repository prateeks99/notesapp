import Head from 'next/head';
import NavBar from './NavBar';

//create a simple layout 
const Layout = ({ children }) => (
    <>
        <head>
            <title>Notes-App</title>
        </head>
        <NavBar />
        {children}

    </>
)

export default Layout;
