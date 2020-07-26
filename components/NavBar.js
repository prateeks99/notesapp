import Link from 'next/link';
import { Button } from 'semantic-ui-react';

const Navbar  = () => (
    <div>
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Post-it!</a>
         </Link>
        <Link href="/new">
            <Button className="create">Add Note</Button>
        </Link>
    </nav>
    <footer className = "footer">
    <p>Copyright ⓒ Prateek Saxena </p>
    </footer>
    </div>
)

export default Navbar;
