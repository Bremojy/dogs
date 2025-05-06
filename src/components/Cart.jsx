import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import Footer from "./Footer";
import axios from "axios";

const Cart = () => {
  const { cart, removeFromCart, calculateTotal } = useCart();
  const [selectedMethod, setSelectedMethod] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const img_url = "https://Brian10.pythonanywhere.com/static/images/";

  const submitPayment = async (e) => {
    e.preventDefault();
    setLoading("Processing Payment...");
    setSuccess("");
    setError("");

    if (!/^(254)\d{9}$/.test(phone)) {
      setError("Invalid phone number format. Please enter a valid Kenyan number.");
      setLoading("");
      return;
    }

    try {
      const data = new FormData();
      const totalAmount = calculateTotal();

      data.append("amount", totalAmount);
      data.append("phone", phone);

      // Simulate payment request
      const response = await axios.post("https://Brian10.pythonanywhere.com/api/mpesa_payment", data);

      setLoading("");

      // Create order object
      const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      const order = {
        id: orderId,
        phone: phone,
        total_amount: totalAmount,
        items: cart,
        status: "Order Placed"
      };

      // Save to localStorage
      localStorage.setItem(`order_${orderId}`, JSON.stringify(order));

      // Clear cart
      cart.forEach((item) => removeFromCart(item.cartItemId));

      setSuccess(`Payment successful! Your Order ID is ${orderId}. You can now track your order.`);
    } catch (error) {
      setLoading("");
      setError(
        error.response?.data?.message || error.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div>
      
      <div className="container mt-5 pt-5">
      <nav className="m-4">
                <Link className="btn btn-dark mx-2" to="/">Home</Link>
                <Link className="btn-dark mx-2" to="/addproducts">Add Products</Link>
                <Link className="btn-dark mx-2" to="/signin">Sign In</Link>
                <Link className="btn-dark mx-2" to="/signup">Sign UP</Link>
            </nav>
        <h3 className="text-primary mb-4"><b>YOUR CART</b></h3>

        {cart.length === 0 ? (
          <div className="alert alert-warning text-center">Your cart is empty</div>
        ) : (
          <div className="row">
            {cart.map((product, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow">
                  <img
                    src={img_url + product.product_photo}
                    alt={product.product_name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.product_name}</h5>
                    <p className="card-text text-muted">
                      {product.product_desc.slice(0, 50)}...
                    </p>
                    <p className="text-warning fw-bold">{product.product_cost} KSh</p>

                    <button
                      className="btn btn-danger w-100 mb-2"
                      onClick={() => removeFromCart(product.cartItemId)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="d-flex justify-content-between mt-4" style={{ fontWeight: "bold", color: "#00gsdyf" }}>
          <span>Total</span>
          <span>Ksh {calculateTotal()}</span>
        </div>

        {cart.length > 0 && (
          <button
            className="btn w-100 mt-4"
            style={{
              backgroundColor: "#00bfff",
              border: "none",
              color: "#000814",
              fontWeight: "bold",
              padding: "12px",
              borderRadius: "8px",
              display: "inline-block",
            }}
            onClick={() => setShowModal(true)} // Show the payment modal
          >
            Proceed to Checkout 🚀
          </button>
        )}
      </div>

      {showModal && (
        <div className="payment-modal">
          <div className="payment-card">
            <button className="close-btn" onClick={() => setShowModal(false)}>✖</button>
            <h3>Select Payment Method</h3>

            <div className="btn-group d-flex justify-content-center mb-3" role="group">
              <button className="btn btn-outline-warning" onClick={() => setSelectedMethod('card')}>💳 Card</button>
              <button className="btn btn-outline-success" onClick={() => setSelectedMethod('mpesa')}>📱 M-PESA</button>
              <button className="btn btn-outline-primary" onClick={() => setSelectedMethod('paypal')}>💰 PayPal</button>
            </div>

            {/* MPESA FORM */}
            {selectedMethod === 'mpesa' && (
              <form onSubmit={submitPayment}>
                <h4>📱 M-PESA Payment</h4>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Mpesa No. 2547xxxxxxxxx"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <button
                  className="btn pay-btn w-100 mt-3"
                  style={{
                    backgroundColor: "#ffa500",
                    fontWeight: 'bold',
                    fontSize: "18px",
                    border: "none",
                    color: "#121212",
                  }}
                >
                  PAY NOW 💲
                </button>
              </form>
            )}

            {/* Success/Error Messages */}
            {success && <b className="text-success">{success}</b>}
            {error && <b className="text-danger">{error}</b>}
            {loading && <b className="text-warning">{loading}</b>}
          </div>
        </div>
      )}
     
      <Footer />
    </div>
  );
};

export default Cart;
