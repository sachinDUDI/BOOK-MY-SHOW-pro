import React from "react";

const Cast = (props) => {
    return (
    <>
        <div className="flex flex-col flex-center">
            <div className="w-32 h-32">
                <img
                src={props.image}
                alt="crew man"
                className="w-full h-full rounded-full"
                />
            </div>
            <h1 className="text-xl  text-gray-800">{props.castName}</h1>
            <h5 className="text-xs  text-gray-500">{props.role}</h5>
        </div>
    </>
    )
}

export default Cast;
