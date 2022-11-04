import Navbar from "../Navbar/Navbar";
import "./HomePage.css"
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import Trending from "../Trending/Trending";
import News from "../News/News";
import NewsLetter from "../NewsLetter/NewsLetter";
import Carousel from "../Carousel/Carousel";

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