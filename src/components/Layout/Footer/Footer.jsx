import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="row primary">
                    <h2>THE AUTRING</h2>

                    <div className="column links">
                        <h3>About</h3>
                        <p className='about'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                            voluptatem corporis error non,
                        </p>
                    </div>
                    <div className="column links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#faq">Lorem</a>
                            </li>
                            <li>
                                <a href="#cookies-policy">Lorem</a>
                            </li>
                            <li>
                                <a href="#terms-of-services">Lorem</a>
                            </li>


                        </ul>
                    </div>
                    <div className="column subscribe">
                        <h3>Contact Us</h3>
                        <p className='contactUs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum natus explicabo sapiente tempore consequatur quis totam ad, vero, alias perferendis, illo aliquid assumenda nobis. Eum laboriosam qui natus tempora a?
                            Saepe fugit quaerat sit quod iure perferendis nostrum rem aut iusto dignissimos harum, sint tenetur totam cum blanditiis?</p>
                            <div className='icons'>
                            <i className="large whatsapp icon"></i>
                            <i className="large instagram icon"></i>
                            <i className="large facebook icon"></i>
                            </div>
                    </div>
                </div>




            </footer>
        </>
    )
}

export default Footer;