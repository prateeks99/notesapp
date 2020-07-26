import Head from 'next/head';
import NavBar from './NavBar';

//create a simple layout 
const Layout = ({ children }) => (
    <>
        <head>
            <title>Post-it!</title>
        </head>
        <NavBar />
        {children}

    </>
)

export default Layout;
