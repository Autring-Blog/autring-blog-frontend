import "./Navbar.css";
import Navbarimage from "./autring image.png";

function NavbarHome() {
  return (
    <div className="ui secondary menu">
      <div className="left menu">
        {<img src={Navbarimage} />}
      </div>

      <a className="item">
        Home
      </a>
      <a className="item">
        International
      </a>
      <a className="item">
        National
      </a>
      <a className="item">
        Politics
      </a>
      <a className="item">
        Defence
      </a>
      <a className="item">
        Science and Technology
      </a>
      <a className="item">
        Sports
      </a>
      <a className="item">
        Education
      </a>
      <a className="item">
        Others
      </a>
      <div className="right menu">
        <i className="big search link icon"></i>

      </div>
    </div>
  )
}

export default NavbarHome;