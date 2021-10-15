import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
import axios from "axios";

//components
import {NextArrow, PrevArrow} from "./Arrows.components"


const HeroCarousel= () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayiingMovies = async () =>{
            const getImages = await axios.get("/movie/popular");
            setImages(getImages.data.results);
        };
        requestNowPlayiingMovies();
        
        //Race condition
    }, []);


    const settingsLG = {
        arrows: true,
        autoplay:true,
        centerMode: true,
        centerPadding: "300px",       
        infinite: true,        
        slidesToShow: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        
    };
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    };
    
    return(
    <> 
        <div className="lg:hidden">
            <HeroSlider {...settings}>
             {images.map((image)=>(
                <div className="w-full h-56 md:h-80 py-3">
                    <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} alt="tesing" className="w-full h-full" />
                </div>
             ))}
            </HeroSlider>
        </div>

        <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
             {images.map((image)=>(
                <div className="w-full h-96 px-2 py-3">
                    <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} alt="tesing" className="w-full h-full rounded-md"/>
                </div>
             ))}
            </HeroSlider>
        </div>
    
    </>
    );
};

export default HeroCarousel;