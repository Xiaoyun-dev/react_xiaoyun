import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Xiaoyun's Website</h1>
            <div className="links">
                 
                <Link to="/">Home</Link>
                
                <Link to="/Bio">Bio</Link>
    
                <Link to="/Blog">Blogs</Link>

                <Link to="/Research">Research</Link>

                <Link to="/Contact">Contact</Link>
                
                {/* <a href="/create">New Blog</a> */}
            </div>
        </nav>
    );
}
 
export default Navbar;