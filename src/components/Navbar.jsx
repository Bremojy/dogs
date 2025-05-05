import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <section className="row">
        <div className="col-md-12 pt-4 ">
            <div className="navbar navbar-expand-md navbar-light bg-light">
                <Link to="/" className="navbar-brand">Dog's World</Link>
                <button className="navbar-toggler" data-bs-target="#ivy" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="ivy">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/chatbot" className="nav-link fw-bold">Chatbot</Link>

                        
                       
                        <Link to="/addproducts" className="nav-link">Add Products</Link>
                    </div>
                    <div className="navbar-nav ms-auto d-flex align-items-center">
                        <Link to="/cart" className="nav-link me-3">
                            <img src="images/shopping-cart.png" style={{ height: "40px" }} alt="Cart" />
                            <span
                              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                              style={{ fontSize: "0.75rem" }}>
    
                                {cartItemCount}
                         </span>
                        </Link>
                        <Link to="/signin" className="nav-link">Sign In</Link>
                        <Link to="/signup" className="nav-link">Sign Up</Link>
                    </div>

                    
                 </div>
            </div>
        </div>
     </section>
     );
}
 
export default Navbar;
