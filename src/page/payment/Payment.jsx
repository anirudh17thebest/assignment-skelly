import "./payment.css";
import Navbar from "../../components/navbar/Navbar";

const Payment = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="mainBody">
        <div className="left">
          <p className="title">Shipping and Payment</p>
          <div className="buttons">
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
          </div>
          <p className="shippingInfo">Shipping Information</p>
          <div className="shipping">
            <form>
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Postal Code / ZIP" />
              <input type="text" placeholder="Phone Number" />
              <section className="dropdown">
                <select>
                  <option value="poland">Poland</option>
                  <option value="australia">Australia</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="turkey">Turkey</option>
                </select>
              </section>
            </form>
          </div>
        </div>
        <div className="center">
          <div className="top">
            <p className="paymentP">Payment Method</p>
            <div className="topPayment">
              <div className="capsule">
                <i className="payIcons fab fa-paypal fa-2x"></i>
              </div>
              <div className="capsule">
                <i className="payIcons fab fa-cc-visa fa-2x"></i>
              </div>
              <div className="capsule">
                <i class="payIcons fab fa-cc-mastercard fa-2x"></i>
              </div>
              <div className="capsule">
                <i class="payIcons fab fa-cc-mastercard fa-2x"></i>
              </div>
              <div className="capsule">
                <i className="payIcons fab fa-cc-discover fa-2x"></i>
              </div>
              <div className="capsule last">
                <i class="payIcons fab fa-stripe fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p className="deliveryP">Delivery Method</p>
            <div className="bottomDelivery">
              <div className="delivery">
                <i className=" delIcons fab fa-ups fa-2x"></i>
                <span className="price">$20.00</span>
              </div>
              <div className="delivery">
                <i className="delIcons fas fa-truck-loading fa-lg"></i>
                <span className="price">$12.00</span>
              </div>
              <div className="delivery">
                <i className="delIcons fab fa-dhl fa-3x"></i>
                <span className="price">$15.00</span>
              </div>
              <div className="delivery">
                <i className="delIcons fab fa-fedex fa-2x"></i>
                <span className="price">$10.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="first">
            <span className="iconWrapper one">
              <i
                style={{ padding: "6px" }}
                className="fas fa-shopping-cart"
              ></i>
            </span>
            <hr />
            <span className="iconWrapper two">
              <i style={{ padding: "6px" }} className="fas fa-truck"></i>
            </span>
          </div>
          <div className="second">
            <p className="cartTitle">Your Cart</p>
            <div className="cartItem">
              <div className="cartleft">
                <img
                  className="cartImg"
                  src="https://cdn.shopify.com/s/files/1/0261/7393/1605/products/image0816copy_300x.png?v=1603294397"
                  alt=""
                />
                <span className="productDesc">
                  T Shirt <br /> Summer Vibes <br />
                  <p className="hash">#261311</p>
                </span>
              </div>
              <p className="price">$89.99</p>
            </div>
            <div className="cartItem">
              <div className="cartleft">
                <img
                  className="cartImg"
                  src="https://fcity.in/images/products/5217846/1_512.jpg"
                  alt=""
                />
                <span className="productDesc">
                  Basic Slim <br /> Fit T-Shirt <br />
                  <p className="hash">#212315</p>
                </span>
              </div>
              <p className="price">$69.99</p>
            </div>
          </div>
          <button className="payBtn">
            <p style={{ color: "#585858" }}>Total cost</p> $159.98
          </button>
          <div className="third">
            <i className="fas fa-truck-moving "></i>
            <span className="productOffer">
              You are <span style={{ color: "black" }}>$159.98</span> away
              <br /> from free shipping
            </span>
          </div>
        </div>
      </div>
      <div className="footer">
        <i
          style={{ cursor: "pointer", marginLeft: "20px" }}
          className="fas fa-arrow-left"
        >
          <span className="back"> Back</span>
        </i>
        <div className="footerbtn">
          <button className="btn c">CONTINUE SHOPPING</button>
          <button className="btn p">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
