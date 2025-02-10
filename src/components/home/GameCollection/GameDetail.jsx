import { useLoaderData } from 'react-router-dom';
import {Slide } from "react-awesome-reveal";
const GameDetail = () => {
    const details = useLoaderData()
    console.log(details);
    return (
        <div className='w-full h-[800px]  lg:h-[850px]  mx-auto relative'>
            <img className="hidden lg:block" src="../../../../Assets/bg-4.webp" alt="" />
            <div className=" lg:w-[70%] absolute top-[8%] lg:top-[10%] lg:left-[15%] ">
                <div className="nav-bg-color lg:h-[70%] rounded-xl">
                    <div className="p-[10%] grid grid-cols-1 lg:grid-cols-2">
                        <Slide direction="left">
                            <div className="w-10/12 lg:w-full pb-5 mx-auto">
                                <img src={details.photo} className="w-full lg:w-9/12 mx-auto rounded-lg shadow-2xl border-3 border-gray-200" />
                            </div>
                        </Slide>
                        <Slide direction="right">
                        <div className='w-full'>
                            <div className="w-full mx-auto lg:mt-[10%] ml-0  space-y-4">
                                <h1 className="text-3xl lg:text-5xl font-bold">{details.name}</h1>
                                <p className="">{details.game_detail}</p>
                                <p className="">Manufacturer Name: {details.manufacturer_name}</p>
                                <p className="p-3 bg-purple-800 rounded-lg w-1/2 lg:w-1/4">Price:{details.price}</p>
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                        </Slide>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetail;