import '../App.css';

export default function Navigation() {
    return (
        <nav>
            <div className="nike-logo">
                <img src="/images/brand_logo.png"/>
            </div>
            <ul>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
            
        </nav>
        
    )
}