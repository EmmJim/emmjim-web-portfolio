import React from 'react';

const Project = ({project}) => {
    const {imageName, imageAlt, title, description, href} = project;
    return (
        <div className='card flex flex-col items-center'>
            <div className='hover:shadow-md hover:shadow-cyan-400 w-3/4  bg-white text-black rounded-xl transition ease-in-out delay-150 hover:scale-110 duration-300 flex justify-center'>
                <img src={imageName} alt={imageAlt} className='object-cover h-28'/>
            </div>
            <div className='mt-5 space-y-2 flex flex-col items-center'>
                <h5 className="font-bold">{title}</h5>
                <p className="text-sm text-center">{description}</p>
                <div className="transition ease-in-out text-cyan-400 border-b-2 w-min border-transparent hover:border-cyan-400">
                <a href={href} target="_blank" rel="noopener noreferrer">Visitar</a>
                </div>
            </div>
        </div>
    )
}

export default Project