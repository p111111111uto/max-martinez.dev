import Navigation from "./Navigation"

export default function Header() {
    return (
        <header className="headerContainer">
            <h1 style={{color: '#7393B3', marginLeft:'20px'}}>Mm.</h1>
            <Navigation />
        </header>
    );
}