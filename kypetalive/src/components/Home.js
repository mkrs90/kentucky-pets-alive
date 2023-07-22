import React, { useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import voteVideo from '../images/videos/shelterChalleng2023.mp4';
import kpaSlide from '../images/Logos/KPA_Slide.png';
import slide3 from '../images/10-13.png';
import slide4 from '../images/adoption_weekends.png';

function Home() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    if (videoEl && videoEl.current) {
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
    }
  };

  useEffect(() => {
    const videoRef = videoEl.current;
    attemptPlay();

    const handleVideoEnd = () => {
      if (videoRef) {
        videoRef.pause();
      }
    };

    if (videoRef) {
      videoRef.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoRef) {
        videoRef.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, []);

  return (
    <div className="App d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
      <Carousel interval={5000} pause="hover" className="carousel-container">
        {/* Video Slide */}
        <Carousel.Item>
          <video
             className="d-block h-100"
             playsInline
             muted
             alt="Shelter Challenge"
             src={voteVideo}
             ref={videoEl}
          />
        </Carousel.Item>

        {/* Other Slides */}
        <Carousel.Item>
          <img 
              className="d-block h-100 img-fluid"
              src={kpaSlide}
              alt="Slide 2" 
            />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block h-100 img-fluid" 
            src={slide3} 
            alt="Slide 3" 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block h-100 img-fluid" 
            src={slide4} 
            alt="Slide 4" 
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
