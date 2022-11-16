import Navbar from "../Layout/Navbar/Navbar";
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
            <Navbar />
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