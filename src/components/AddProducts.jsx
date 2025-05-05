import axios from "axios";
import {useRef,useState} from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const AddProducts = () => {
    let[product_name,setProductName]=useState("");
    let[product_desc,setProductDesc]=useState("");
    let[product_cost,setProductCost]=useState("");
    let[product_photo,setProductPhoto]=useState("");
    let[loading,setLoading]=useState("");
    let[success,setSuccess]=useState("");
    let[error,setError]=useState("");

    const fileInputRef=useRef(null)

    const submit = async(e)=>{
        e.preventDefault();
        
        try {
            setLoading("Please wait ...");
            setSuccess("");
            setError("");
            const data = new FormData();
            data.append("product_name",product_name);
            data.append("product_desc",product_desc);
            data.append("product_cost",product_cost);
            data.append("product_photo",product_photo);


            const response = await axios.post("https://Brian10.pythonanywhere.com/api/addproduct", data)
            setLoading("");
            setSuccess(response.data.Success);
            setProductName("");
            setProductDesc("");
            setProductCost("");
            setProductPhoto("");
            fileInputRef.current.value =""

        } catch (error) {
            console.log(error)
            setLoading("");
            setError(error.message);
            
        }
    }



    return ( 
        <div className="row justify-content-center  mt-4">
                        <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn-dark mx-2" to="/signup">Sign UP</Link>
            </nav>
            <div className="col-md-6 card shadow my-5">
                <h2>Add Products</h2>
                <b className="text-warning">{loading}</b>
                <b className="text-danger">{error}</b>
                <b className="text-success">{success}</b>

                <form onSubmit={submit}>
                    <input type="text" placeholder="Enter Product Name" required onChange={(e)=>setProductName(e.target.value)} className="form-control" />
                    <br />
                    <textarea className="form-control" placeholder="Enter Product Description" id="" required onChange={(e)=>setProductDesc(e.target.value)}></textarea>
                    <br />
                    <input type="number" placeholder="Enter Product Cost" required onChange={(e)=>setProductCost(e.target.value)} className="form-control" />
                    <br />
                    <label htmlFor="">Product Photo</label>
                    <input type="file"  className="form-control" required  ref={fileInputRef} onChange={(e)=>setProductPhoto(e.target.files[0])}/>
                    <br />
                    <button className="btn btn-primary">Add Product</button>

                </form>

            </div>
            <Footer/>

        </div>
     );
}
 

export default AddProducts;