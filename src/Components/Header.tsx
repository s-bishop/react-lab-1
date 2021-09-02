import "./Header.css"

interface Prop {
    user: string;
}
function Header(props: Prop) {
    return(
        <header>
            <h1>Ice Cream Wars</h1>
            <h4>Welcome, {props.user}</h4>
        </header>
    )
}

export default Header;