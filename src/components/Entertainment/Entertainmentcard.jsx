import React from "react";
import Slider from "react-slick";
const EntertainmentCard =(props) => {
    return(<>
        <div className="w-full h-30x px-2">
            <img className="w-full h-full rounded-xl"
            src={props.src}
            alt="entertainment image"
            />    
        </div>
    </>

    );
};

const EntertainmentCardSlider =(props) => {
    const EntertainmentImage =[
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/food-n-drinks-collection-202010061250.png"
    ];
    const settings = {      
        infinite: false,        
        slidesToShow: 4,
        slideToScroll:4,
        InitialSlide:0,
        responsive:[
            {breakpoints:1024,
                settings:{
                    infinite: true,        
                    slidesToShow: 3,
                    slideToScroll:2,

                },
            },
            {breakpoints:600,
                settings:{
                    InitialSlide:1,        
                    slidesToShow: 2,
                    slideToScroll:1,

                },
            },
            {breakpoints:1024,
                settings:{
                    InitialSlide:1,             
                    slidesToShow: 2,
                    slideToScroll:1,
    
                },
            },
        ]
};
    return(
    <>
      
       <Slider {...settings}>
       {EntertainmentImage.map((image)=>(
           <EntertainmentCard src = {image} />
       ))}
       
       </Slider>
    
    </>

    );
};

export default EntertainmentCardSlider;