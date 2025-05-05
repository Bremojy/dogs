import axios from "axios";
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";


const SignIn = () => {
    let[username,setUsername]=useState("");
    let[password,setPassword]=useState("");

    let[loading,setLoading]=useState("");
    let[error,setError]=useState("");

    let navigate =useNavigate()


    const submit =async(e)=>{
        e.preventDefault();

        try {
            setError("");
            setLoading("Be patient ...");

            const data = new FormData();
            data.append("username",username);
            data.append("password",password);

            const response =await axios.post("https://Brian10.pythonanywhere.com/api/signin",data);

            if (response.data.user) {
                localStorage.setItem("user",JSON.stringify(response.data.user))
                navigate("/")
            }else {
                setLoading("");
                setError(response.data.message)

            }




        } catch (error) {
            setLoading("");
            setError("Something went Wrong");
            
        }
    }
    return (
        <div className="row justify-content-center mt-5">
            <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn-dark mx-2" to="/signup">Sign UP</Link>
            </nav>
            <div className="col-md-6 p-4 my-4 card shadow">
                <h1 className="text-dark">Sign In</h1>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                

                <form onSubmit={submit}>
                    <input type="text" className="form-control" placeholder="Enter Username" required  onChange={(e)=>setUsername(e.target.value)}/>
                    <br />
                    <input type="password" className="form-control" placeholder="Enter Password" required onChange={(e)=>setPassword(e.target.value)}/>
                    <br />
                    <button type="submit" className="btn btn-outline-primary">Sign In</button>
                </form>

                <p>Don't have an account ? <Link to="/signup" className="btn btn-success">Sign UP</Link></p>


            </div>
            <Footer/>
            
        </div>
        
      );
      
}
 
export default SignIn;