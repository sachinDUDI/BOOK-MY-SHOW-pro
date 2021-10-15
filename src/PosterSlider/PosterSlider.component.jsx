import React from "react";
import Slider from "react-slick";

//components
import Poster from "../components/Posters/poster.component";

//config
import settings from "../Config/PosterCarousel.config";

const PosterSlider = (props) => {

    const sliderConfig = props.config ? props.config : settings
    return (
    <>
    <div className="flex flex-col items-start my-3 ">
        <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
        <p className={`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>
        {props.subtitle}
        </p>
    </div>
    <Slider { ...sliderConfig }>
        {props.images.map((image)=>(
            <Poster {...image} isDark={props.isDark} />
        ))}

    </Slider>
        
    </>
    );
};

export default PosterSlider;
