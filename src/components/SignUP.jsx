import axios from "axios";
import {useState} from "react";
import Footer from "./Footer";
import { Link} from "react-router-dom";


const SignUP = () => {


    let[username,setUsername]=useState("");
    let[email,setEmail]=useState("");
    let[phone,setPhone]=useState("");
    let[password,setPassword]=useState("");
    let [loading,setLoading] = useState("");
    let [success,setSuccess]=useState("");
    let[error,setError]= useState("");
    const submit= async (e) => {
        e.preventDefault();

            try {
            setLoading("Please wait ...");
            setError("");
            setSuccess("");


            const data =new FormData();
            data.append("username",username);
            data.append("email",email);
            data.append("phone",phone);
            data.append("password",password);
            const response = await axios.post("https://Brian10.pythonanywhere.com/api/signup",data);

                setLoading("")
                setSuccess(response.data.message)
                setUsername("")
                setEmail("")
                setPassword("")
                setPhone("")




            } catch (error) {
              setLoading("")
              setError("Something went wrong")
        }
            
        }

    

        return ( 
        <div className="row justify-content-center mt-4">
            <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn-dark mx-2" to="/signup">Sign UP</Link>
            </nav>
            <div className="col-md-6 p-4 my-4 card shadow">
                <h2 className="text-dark">Sign Up</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>

                <form onSubmit={submit}>
                    <input type="text" placeholder="Enter Username" required className="form-control" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <br />
                    <input type="email" className="form-control" placeholder="Enter Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <br />
                    <input type="number" className="form-control" placeholder="Enter Phone No." required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <br />
                    <input type="password" className="form-control" placeholder="Enter Password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <br />
                    <button className="btn btn-outline-warning" type="submit">Sign Up</button>

                </form>
                <p>Aready have an account ? <Link to="/signin" className="btn btn-success">Sign In</Link></p>

            </div>
            <Footer/>
            
        </div>
        );
    }

 
export default SignUP;