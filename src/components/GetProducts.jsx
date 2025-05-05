import axios from "axios";
import {useState, useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Corousel from "./Corousel";
import { useCart } from "./CartContext";
const GetProducts = () => {

    let[products,setProducts]=useState([]);
    let[error,setError]=useState("");
    let[loading,setLoading]=useState("");
    let[filterProducts,setFilterProducts]=useState([]);

    const { addToCart } = useCart();

    const img_url="https://Brian10.pythonanywhere.com/static/images/"
    const getProducts= async ()=>{
        setError("")
        setLoading("Please wait, receiving products ...")
        try {
            const response =await axios.get("https://Brian10.pythonanywhere.com/api/getproducts")
            setProducts(response.data)
            setLoading("")
            setFilterProducts(response.data)

        } catch (error) {
            setError(error.data)
            setLoading("")
            
        }
    }

    const handleSearch=(value) =>{
        const filterd = products.filter((product)=>
        product.product_name.toLowerCase().includes(value.toLowerCase()) )

        setFilterProducts(filterd)
    }

    useEffect(()=>{
        getProducts();
    },[]);

    return ( 
         
        <div className="row">
            <Navbar/>
            <Corousel/>
            <br /><br />
            <h1 className="text-primary display1"><i>Available Dogs</i></h1>
            <br /><br />
            <b className="text-warning">{loading}</b>
            <b className="text-danger">{error}</b>
            <div className="row justify-content-center my-4">
                <div className="col-md-4">
                    <input type="text" placeholder='Search Products by Name' className="form-control" onChange={(e)=>handleSearch(e.target.value)} />
                </div>
            </div>
            {filterProducts.map((product)=>(
                 <div className="col-md-3 justify text-center mb-4">
                    <div className="card shadow card-margin">
                        <div className="card header">

                    <img src={img_url + product.product_photo} alt="" className="dog_img mt-5" />

                        </div>
                    <div className="card-body">
                        <h5 className="mt-2">{product.product_name}</h5>
                        <p className="text-muted">{product.product_desc.slice(0,100)}</p>
                        <p className="text-warning">{product.product_cost} KES</p><br />
                        <button
                    className="btn btn-primary mt-2 w-100"
                    onClick={() => addToCart(product)}
                  >
                    <b>Add to Cart</b>
                  </button>
                    </div>
                    
                </div>
                
                 </div>
                 

            ))} 
            <br />
            
            <Footer/>

           
        </div>
    );
}
 
export default GetProducts;
