import "../sass/_Footer.scss";

function Footer() {
  return (
    <footer className="footer-wrapp" id="footer">
      <div className="row container footer-top ">
        <img
          src="https://res.cloudinary.com/dymsokiwr/image/upload/v1729572683/IF_Logo_BW_slqpml.png"
          alt=""
          className="col-sm-5 col-md"
        />
        <div className="col-sm-5 col-md">
          <div className="content">
            <p>Subscribe to our news letter</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              ></input>
              <button className="btn subscribe-btn" type="submit">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row footer-links justify-content-center">
        <div className="links col-2 text-center">
          <p className="title ">About Insight</p>
          <li>About</li>
          <li>Careers</li>
          <li>News</li>
          <li>About Insight</li>
        </div>
        <div className="links  col-2 text-center">
          <p className="title">Insight Help</p>
          <li>Accessibility</li>
          <li>Help Center</li>
          <li>FAQ</li>
          <li>Returns</li>
          <li>Price Match</li>
          <li>Child Safety</li>
        </div>
        <div className="links col-2 text-center">
          <p className="title">Services</p>
          <li>Financing</li>
          <li>Rewards</li>
          <li>Trade Program</li>
          <li>Delivery Methods</li>
        </div>
        <div className="links  col-2 text-center">
          <p className="title">Legal</p>
          <li>Terms and Conditions</li>
          <li>Offers & Details</li>
          <li>Privacy Policy</li>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
