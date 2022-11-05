import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="title">
                THE AUTRING
            </div>
            <div className="left">
                About Us
            </div>
            <div className="lefttext">
                Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Rerum, unde.

            </div>
            <div className="mid">
                Quick Lines
            </div>
            <div className="midtext">
                Lorem, ipsum.<br />
                Lorem, ipsum.<br />
                Lorem, ipsum.<br />
            </div>

            <div className="right">
                Contact Us
            </div>
            <div className="righttext">
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptas, iste corporis
                praesentium nemo eius, officia excepturi nulla,
                dolor error quibusdam aliquid laborum assumenda!
                <br />
                <i className="whatsapp icon"></i>
                <i className="instagram icon"></i>
                <i className="facebook icon"></i>
            </div>

        </div>
    )
}

export default Footer;