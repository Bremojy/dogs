import { useLocation } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleProducts = () => {

    let[phone,setPhone]=useState();
    let[success,setSuccess]=useState("");
    let[loading,setLoading]=useState("");
    let[error,setError]= useState("");

    const submitForm= async (e)=>{
        e.preventDefault();
        
        setLoading("Processing payment ...")
        setSuccess("")
        
        try {
            const data = new FormData();
            data.append("amount", product.product_cost);
            data.append("phone",phone);

            const response =await axios.post("https://Brian10.pythonanywhere.com/api/mpesa_payment", data);
            setLoading("");
            setSuccess(response.data.message)
        } catch (error) {
            setError(error.message);
            
        }
    }

    const {product} =useLocation().state || {};
    
    const img_url="https://Brian10.pythonanywhere.com/static/images/"
    return (
        <div className="">
            <div className="row justify-content-center mt-3">
            <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn-dark mx-2" to="/signup">Sign UP</Link>
            </nav>
                <div className="col-md-3 card shadow ">
                    <img src={img_url + product.product_photo} alt="" />
                </div>
                <div className="col-md-3 card shadow">
                    <h2>{product.product_name}</h2>
                    <h3 className="text-warning">{product.product_cost}</h3>
                    <p className="text-muted">{product.product_desc}</p>
                    <b className="text-warning">{loading}</b>
                    <b className="text-danger">{error}</b>
                    <b className="text-success">{success}</b>


                    <form onSubmit={submitForm}>
                        <input type="number" className="form-control" placeholder="Enter Amount" required readOnly value={product.product_cost} />
                        <input type="number" className="form-control" placeholder="Enter Mpesa No 2547xxxxxxxx" required onChange={(e)=> setPhone(e.target.value)} value={phone}/>
                        <button className="btn btn-primary" type="submit" >Submit</button>
                    </form>

                </div>
            </div>
        </div>
      );
}


export default SingleProducts;