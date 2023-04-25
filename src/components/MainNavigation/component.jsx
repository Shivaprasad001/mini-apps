export default function MainNavigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/calculator"}>Calculator</Link>
                </li>
            </ul>
        </nav>
    )
}