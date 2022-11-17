import NavbarHome from "../Layout/Navbar/NavbarHome";
import "./HomePage.css"
import Footer from "../Layout/Footer/Footer";
import Intro from "./Intro/Intro";
import Trending from "./Trending/Trending";
import News from "../Home/News/News";
import NewsLetter from "./NewsLetter/NewsLetter";
import Carousel from "./Carousel/Carousel";

const HomePage = () => {
    return (
        <>
            <NavbarHome />
            <hr />
            <Carousel />
            <Intro />
            <Trending />
            <News />
            <NewsLetter />
            <Footer />
        </>
    )
}

export default HomePage;