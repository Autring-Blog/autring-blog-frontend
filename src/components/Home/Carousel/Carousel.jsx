import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';
import './Carousel.css'



const ImageCarousel = ({ blogs }) => {
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
          blogs && blogs.map((item, index) => {
            return <Banner item={item} key={index} />
          })
        }
      </Carousel>
    </div>
  );
}

const Banner = (props) => {
  const navigate = useNavigate();
  return (

    <div className="carousel__container">
      <div className="carousel__container--left">
        <h1 className="">{props.item.inPhotoTitle}</h1>
        <p>{props.item.shortDescription.length > 200 ?
          props.item.shortDescription.substring(0, 200) + " ...." :
          props.item.shortDescription}</p>
        <button className="carousel__container--left--btn" onClick={() => navigate(`blog/${props.item._id}`)}>read more</button>

      </div>
      <div className="carousel__container--right">
        <img src={props.item.photo[0]} alt="" className="carousel__container--right--image" />
      </div>
    </div>
  )
}

export default ImageCarousel;
