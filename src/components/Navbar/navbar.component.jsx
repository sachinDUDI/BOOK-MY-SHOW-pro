import React from "react";
import {BiChevronRight,BiSearch,BiMenu,BiChevronDown} from "react-icons/bi";

 
const NavSm = ()=> {
    return(
        <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3  className="text-xl font-bold">It All Starts Here!</h3>
                <span className="text-gray-300 text-xs flex items-center">Hyderabad <BiChevronRight/></span>
            </div>
            <div className="w-8 h-8"> 
                <BiSearch className="w-full h-full"/>
            </div>
        </div>
        </>
    );
};
const NavMd = ()=> {
    return(
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch/>
            <input 
             type="search"
             className="w-full bg-transparent border-none focus:outline-none" 
             placeholder="Search for Movies,Events, Plays, Sports and Activities."/>
        </div>
    );
};
const NavLg = ()=> {
    return(
    <>
        <div className="container mx-auto px-2 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-2">
                <div className="w-18 h-10">
                    <img 
                    src="data:image/png;base64,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"
                    alt="logo"
                    className="w-full h-full"
                    />

                </div>
                <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                    <BiSearch/>
                    <input 
                     type="search"
                    className="w-full bg-transparent border-none focus:outline-none" 
                    placeholder="Search for Movies,Events, Plays, Sports and Activities."/>
                </div>    
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer"> Hyderabad <BiChevronDown/></span>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign In</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
    </>    
    )
};

const Navbar =() =>{
    return(
        <>
        <nav className="bg-bms-700 p-4">
            <div className="md:hidden">{/*Mobile screen */}
             <NavSm/>
            </div>
            <div className="hidden md:flex lg:hidden">{/*Medium/tab screen */}
             <NavMd/>
            </div>
            <div className="hidden lg:flex">{/*Large screen */}
             <NavLg/>
            </div>
        </nav>
        
        </>
    );
};
export default Navbar;