import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div>
            <section className="row text-white p-4 bg-warning">
            <div class="col-md-4 ">
                <h2 class="display2 text-primary">ABOUT US:</h2>
            <p>We Sell Dogs to satisfy your safety.</p>
            <p/>Our aim is to Serve you Best. Thanks For Your time, It is our pleasure.<p/>
                 
                 <h2 class="display2 text-primary">Contact Us:</h2>

                 <h2 class="text-dark"><b>0798805206</b></h2>
                 <h1 class="display1 text-primary">OR:</h1>
                 <p><b>Message Us:</b></p>
                 <h2 class="text-dark"><b>0711709809</b></h2>
            </div>
            <div className="col-md-4">
                <h4 className="text-center">Contact Us</h4>
                <form action="">
                    <input type="email" placeholder="Enter your Email" className="form-control"/>
                    <br/>
                    <textarea name="" id="" className="form-control" placeholder="Leave your Comment" rows="7"></textarea><br/>
                    <input type="submit" value="Send Message" className="btn btn-outline-danger"/>
                </form>
            </div>
            <div className="col-md-4">
                <h4 className="text-center">Stay Connected</h4>
                <br/>    
                <Link to="https://wa.me/254798805206">
  <img src="images/whatsapp.webp" alt="Facebook" height='60px'  width='60px' style={{ marginRight: '20px' }} />
</Link>

<Link to="https://instagram.com/bremojy">
  <img src="images/in.png" alt="Instagram" />
</Link>

                <br /><br />
                <button><span class="badge bg-danger text-white">WELCOME</span></button>
                <br /><br />
                <img src="images/dogs.avif" alt="" className="dog" />

            </div>

         </section>
         <footer class="bg-dark text-white text-center p-2">
            <h5>Developed by Brian Mwangi &copy; 2025. All rights reserved</h5>
         </footer>

        </div>
     );
}
 
export default Footer;