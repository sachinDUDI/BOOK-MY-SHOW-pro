import React, {useState, useEffect } from "react";
import axios from "axios";

//components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard";
import PosterSlider from "../PosterSlider/PosterSlider.component";


//config
import TempPosters from "../Config/TempPosters.confif";

const HomePage = ()=> {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    
    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
              
    }, []);
    useEffect(() => {
        const requestTopRatedMovies = async () =>{
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setTopRatedMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();            
   
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () =>{
            const getUpcomingMovies = await axios.get("/movie/upcoming");
            setUpcomingMovies(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
              
    }, []);



     return (<>
     <div className="flex flex-col gap-10">
     <div className="container mx-auto px-4"> 
     <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment </h1>
     <EntertainmentCardSlider/>
     </div>
     <div className="bg-bms-800 py-16">
        <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex ">
                <img 
                    src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                    alt="Rupay"
                    className="w-full h-full"
                />
            </div>
            <PosterSlider 
            images={popularMovies} title="Premiers" 
            subtitle="Brand new releases every Friday" 
            isDark/>
        </div>
     </div>
     </div>
     <div className="container mx-auto px-4 my-8">
      <PosterSlider 
       images={upcomingMovies}
       title="Online Streaming Events"
       isDark={false}/> 
     </div>
     <div className="container mx-auto px-4 my-8">
      <PosterSlider 
       images={topRatedMovies}
       title="Outdoor Events"
       isDark={false}/>
     </div>
     <div className="container mx-auto px-4 my-8">
      <PosterSlider 
       images={TempPosters}
       title="Laughter Therapy"
       isDark={false}/>
     </div>
     
     </>
    );
};
  
export default HomePage;