import Carousel from 'react-material-ui-carousel';
import './Carousel.css'

const items = [
    {
        heading: "Slide 1",
        description: "lorem ipsu delsk",
        imageUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    },
    {
        heading: "Slide 2",
        description: "lorem ipsu delsk",
        imageUrl: "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
    },
    {
        heading: "Slide 3",
        description: "lorem ipsu delsk",
        imageUrl: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"
    },
]


const ImageCarousel = () => {
    const carasoulSettings = {
        autoPlay: false,
        animation: "slide",
        indicators: false,
        duration: 500,
        navButtonsAlwaysVisible: true,
        navButtonsAlwaysInvisible: false,
        cycleNavigation: true,
        fullHeightHover: true,
        swipe: true,
        height: 620,
    }

    return (
        <div className="carousel">
            <Carousel
                {...carasoulSettings}
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} />
                    })
                }
            </Carousel>
        </div>
    );
}



const Banner = (props) => {
    return (
        <div className="carousel__container">
            <div className="carousel__container--left">
                <h1 className="">{props.item.heading}</h1>
                <p>{props.item.description}</p>
                <button className="carousel__container--left--btn">read more</button>
            </div>
            <div className="carousel__container--right">
                <img src={props.item.imageUrl} alt="" className="carousel__container--right--image" />
            </div>
        </div>
    )
}


export default ImageCarousel;