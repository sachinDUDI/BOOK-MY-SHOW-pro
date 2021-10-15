import React from "react";
//component
import Poster from "../components/Posters/poster.component";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";

const Plays = () => {
    return (
    <>
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Plays in Hyderabad</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA3IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg"
                            title="Ranga Shankara"
                            subtitle="Kannada -> ₹ 150"
                            />
                        </div> 
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00315109-afgnxhtuuc-portrait.jpg"
                            title="`VARASUDAARA`"
                            subtitle="Kannada -> ₹ 200"
                            />
                        </div> 
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315137-rnmgfrzrhw-portrait.jpg"
                            title="The Body "
                            subtitle="English -> ₹ 199"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12">
                            <Poster 
                            src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA3IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg"
                            title="Ranga Shankara"
                            subtitle="Kannada -> ₹ 150"
                            />
                        </div> 
                    </div>
                </div>
                <div className="lg:w-3/12">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                    <div>
                        <PlaysFilter 
                        title="Date"
                        tags={["Today","Tommorow","This Weekend"]}

                        />
                        <PlaysFilter 
                        title="Language"
                        tags={["Hindi","Kannada","English"]}

                        />
                    </div>
                </div>
            </div>
            
         
        </div>
    </>
    );
};

export default Plays;
/*   <div className="w-full lg:flex lg:flex-row-reverse">
                <div className="lg:w-8/12">
                    <h2 className="text-2xl font-bold my-2" >Plays in Hyderabad</h2>
                    <div className="flex felx-wrap lg:w-8/12">
                    <div className="w-1/2 md:w-1/3 lg:w-3/12">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315137-rnmgfrzrhw-portrait.jpg"
                        title="The Body "
                        subtitle="English -> ₹ 199"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 lg:w-3/12">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCA3IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00304172-pclggvbndr-portrait.jpg"
                        title="Ranga Shankara"
                        subtitle="Kannada -> ₹ 150"
                        />
                    </div> 
                    <div className="w-1/2 md:w-1/3 lg:w-3/12">
                        <Poster 
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00315109-afgnxhtuuc-portrait.jpg"
                        title="`VARASUDAARA`"
                        subtitle="Kannada -> ₹ 200"
                        />
                    </div> 
                </div>
                </div>      
               
                <div className="lg:w-1/12 border-2 p-6 border-black"></div>
            </div>  */