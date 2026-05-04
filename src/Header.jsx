import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            <h1>My React Site</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/introduction">Introduction</Link></li>
                </ul>
            </nav>
        </header>
    );
}