import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const Navbar  = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Notes-App</a>
         </Link>
        <Link href="/new">
            <Button className="create">Add Note</Button>
        </Link>
    </nav>
)

export default Navbar;
