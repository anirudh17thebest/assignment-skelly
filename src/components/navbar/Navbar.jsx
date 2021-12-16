import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navWrapper">
        <div className="navLeft">
          <i className=" flagship far fa-clipboard fa-2x"></i>
          <span style={{ color: "#ffdb58" }}>E - </span> Shop
        </div>
        <div className="navCenter">
          <p className="navPar">Men Women Kids</p>
        </div>
        <div className="navRight">
          <i className="icons fas fa-search fa-lg"></i>
          <i className="icons fas fa-shopping-cart fa-lg"></i>
          <i className="icons far fa-user fa-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
